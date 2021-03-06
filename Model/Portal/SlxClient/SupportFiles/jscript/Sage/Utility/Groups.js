/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define("Sage/Utility/Groups", [
    'Sage/Groups/GroupLookup',
    'Sage/UI/Controls/GridParts/Columns/Boolean',
    'Sage/UI/Controls/GridParts/Columns/DateTime',
    'Sage/UI/Controls/GridParts/Columns/Numeric',
    'Sage/UI/Controls/GridParts/Columns/OwnerType',
    'Sage/UI/Controls/GridParts/Columns/Phone',
    'Sage/UI/Controls/GridParts/Columns/UserType',
    'Sage/UI/Controls/GridParts/Columns/Currency',
    'Sage/UI/Controls/GridParts/Columns/SlxLink',
    'dojo/_base/array',
    'dojo/string'
],
function (GroupLookup,
        booleanColumn,
        dateTimeColumn,
        numericColumn,
        ownerTypeColumn,
        phoneColumn,
        userTypeColumn,
        Currency,
        slxLinkColumn,
        dojoArray,
        dString
        ) {
    Sage.namespace('Utility.Groups');
    dojo.mixin(Sage.Utility.Groups, {
        showMainLookupFor: function (family, page) {
            var lookupManagerService = Sage.Services.getService('GroupLookupManager');
            if (lookupManagerService) {
                if (typeof family === "undefined") {
                    lookupManagerService.showLookup();
                } else {
                    lookupManagerService.showLookup({ family: family, returnTo: page || false });
                }
            }
        },
        getGridStructure: function (layout, hideWebLink) {
            var structureData = {};
            var structure = [];
            var select = [];


            var groupContextService = Sage.Services.getService("ClientGroupContext"), context;

            if (groupContextService) {
                context = groupContextService.getContext();
            }

            if (layout.length > 0) {
                //For each field in the group layout, create a grid column.
                dojoArray.forEach(layout, function (item, i) {
                    select.push(item['alias']);

                    if (item['visible']) {
                        if (item['webLink'] && !hideWebLink) {
                            var dataPath = item['dataPath'],
                                entity = dataPath.lastIndexOf("!") > -1 ? dataPath.substring(0, dataPath.lastIndexOf("!")).substring(dataPath.lastIndexOf(".") + 1) : dataPath.substring(0, dataPath.lastIndexOf(":")),
                                keyField = entity + 'ID';

                            //take into account the often denormalized field "ACCOUNT" that lives on several entities... (Contact, etc.)
                            if (item['alias'] === 'ACCOUNT' || item['alias'].match(/A\d+_ACCOUNT/ig)) {
                                entity = 'ACCOUNT';
                                keyField = 'ACCOUNTID';
                            }
                            if ((context) && (entity === context.CurrentTable)) {
                                entity = context.CurrentEntity;
                                keyField = context.CurrentTableKeyField;
                            }
                            if (item.alias.lastIndexOf('_') === 2) {
                                var list = item.alias.split('_');
                                keyField = dString.substitute('${0}_${1}', [list[0], keyField]);
                            }
                            select.push(keyField);

                            structure.push({
                                field: item['alias'],
                                property: item['propertyPath'],
                                label: item['caption'],
                                type: slxLinkColumn,
                                pageName: entity,
                                idField: keyField,
                                _layout: item,
                                width: item['width'] + 'px'
                        });
                        }
                        else {
                            // hack section
                            if (item['alias'].match(/^email$/i)) {
                                item['format'] = 'Email';
                            }
                            if (item['fieldType'] === 'DateTime') {
                                item['format'] = 'DateTime';
                            }
                            // end hack section
                            var cssClass = (item['align'] && item['align'].toLowerCase() === 'right') ? 'alignright' : 'alignleft' + ' ' + item.cssClass || '';

                            switch (item['format']) {
                                case 'Owner':
                                    var ownerName = item['alias'] + 'NAME';
                                    select.push(ownerName);
                                    structure.push({
                                        field: ownerName,
                                        className: cssClass,
                                        label: item['caption'],
                                        width: item['width'] + 'px'
                                    });
                                    break;
                                case 'User':
                                    var userName = item['alias'] + 'NAME';
                                    select.push(userName);
                                    structure.push({
                                        field: userName,
                                        className: cssClass,
                                        label: item['caption'],
                                        width: item['width'] + 'px'
                                    });
                                    break;
                                case 'DateTime':
                                    if (item['displayPath'].indexOf('Activity') !== -1) {
                                        dateTimeColumn.prototype.useFiveSecondRuleToDetermineTimeless = true;
                                    }
                                    structure.push({
                                        field: item['alias'],
                                        property: item['propertyPath'],
                                        label: item['caption'],
                                        type: dateTimeColumn,
                                        className: cssClass,
                                        datePattern: item['formatString'],
                                        dateTimeType: item['dateTimeType'],
                                        width: item['width'] + 'px'
                                    });
                                    break;
                                case 'Percent':
                                    structure.push({
                                        field: item['alias'],
                                        property: item['propertyPath'],
                                        label: item['caption'],
                                        type: numericColumn,
                                        className: cssClass,
                                        constraints: {
                                            places: Sage.Utility.getPrecision(item['formatString']),
                                            round: -1
                                        },
                                        fercent: true,
                                        formatType: 'Percent',
                                        width: item['width'] + 'px',
                                        isWholeNumberPercent: false
                                    });
                                    break;
                                case 'Currency':
                                    structure.push({
                                        field: item['alias'],
                                        property: item['caption'],
                                        label: item['caption'],
                                        type: Currency,
                                        className: cssClass,
										constraints: {
                                            places: Sage.Utility.getPrecision(item['formatString']),
                                            currencySymbol: Sage.Utility.getCurrencySymbol(item['formatString']),
											showCurrencySymbol: true
                                        },
                                        width: item['width'] + 'px'
                                    });
                                    break;
                                case 'Fixed':
                                    structure.push({
                                        field: item['alias'],
                                        property: item['propertyPath'],
                                        label: item['caption'],
                                        type: numericColumn,
                                        className: cssClass,
                                        constraints: {
                                            places: Sage.Utility.getPrecision(item['formatString']),
                                            round: -1
                                        },
                                        // a fake percent
                                        fercent: true,
                                        formatType: item['formatString'][
                                        item['formatString'].length - 1] === '%' ? 'Percent' : 'Number',
                                        width: item['width'] + 'px',
                                        isWholeNumberPercent: item['format'] === 'Percent' ? false : true
                                    });
                                    break;
                                case 'Boolean':
                                    structure.push({
                                        field: item['alias'],
                                        property: item['propertyPath'],
                                        label: item['caption'],
                                        type: booleanColumn,
                                        className: cssClass,
                                        formatString: item['formatString'],
                                        width: item['width'] + 'px'
                                    });
                                    break;
                                case 'Email':
                                    structure.push({
                                        field: item['alias'],
                                        property: item['propertyPath'],
                                        label: item['caption'],
                                        className: cssClass,
                                        formatter: function (val) {
                                            if (!val) {
                                                return '';
                                            }

                                            return dojo.string.substitute(
                                            '<a href=mailto:${0}>${0}</a>',
                                            [Sage.Utility.htmlEncode(val)]);
                                        },
                                        width: item['width'] + 'px'
                                    });
                                    break;
                                case 'OwnerType':
                                    structure.push({
                                        field: item['alias'],
                                        property: item['propertyPath'],
                                        label: item['caption'],
                                        type: ownerTypeColumn,
                                        className: cssClass,
                                        width: item['width'] + 'px'
                                    });
                                    break;

                                case 'Phone':
                                    structure.push({
                                        field: item['alias'],
                                        property: item['propertyPath'],
                                        label: item['caption'],
                                        type: phoneColumn,
                                        className: cssClass,
                                        width: item['width'] + 'px'
                                    });
                                    break;

                                case 'PickList Item':
                                    var pickName = item['alias'] + 'TEXT';
                                    select.push(pickName);
                                    structure.push({
                                        field: pickName,
                                        className: cssClass,
                                        property: item['propertyPath'],
                                        label: item['caption'],
                                        width: item['width'] + 'px'
                                    });
                                    break;
                                case 'User Type':
                                    structure.push({
                                        field: item['alias'],
                                        property: item['propertyPath'],
                                        label: item['caption'],
                                        type: userTypeColumn,
                                        className: cssClass,
                                        width: item['width'] + 'px'
                                    });
                                    break;
                                default:
                                    structure.push({
                                        field: item['alias'],
                                        label: item['caption'],
                                        width: item['width'] + "px",
										className: cssClass,
                                        sortable: item.fieldType !== "Memo"
                                    });
                                    break;
                            }

                        }
                    }
                });
            }

            //The special "keyAlias" column must always be present.
            structure.push({
                field: this.keyAlias,
                hidden: true,
                width: '0px',
                label: '',
                unhidable: true
            });

            structureData["structure"] = structure;
            structureData["select"] = select;

            return structureData;
        }

    });

    return Sage.Utility.Groups;
});