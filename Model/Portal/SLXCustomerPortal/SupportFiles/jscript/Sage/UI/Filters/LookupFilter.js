/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define("Sage/UI/Filters/LookupFilter", [
       'dijit/_Widget',
       'dijit/_Contained',
       'dojo/NodeList-traverse',
       'Sage/_Templated',
       'Sage/_ActionMixin',
       'dojo/string',
       'dojo/_base/lang',
       'dojo/_base/array',
       'dijit/form/Select',
       'dijit/form/TextBox',
       'dojo/on',
       'dojo/i18n!../nls/ConditionManager',
       'dojo/_base/declare',
       'Sage/Utility/Filters',
       'dojo/json'
],
function (
        _Widget,
        _Contained,
        NodeList,
        _Templated,
        _ActionMixin,
        dString,
        lang,
        array,
        Select,
        TextBox,
        on,
        conditionManagerResource,
        declare,
        FiltersUtility,
        json) {
    var widget = declare('Sage.UI.Filters.LookupFilter', [_Widget, _Contained, _ActionMixin, _Templated], {
        widgetsInTemplate: true,
        widgetTemplate: new Simplate([
            '<div class="filter-type-checkbox filter-collapsed">',
                '<h3 data-action="toggleExpand" data-dojo-attach-point="filterNameNode">{%: $.filter.$descriptor || $.filter.filterName %}',
                '</h3>',
                '<ul class="filter-list" data-dojo-attach-point="listNode">',
                '<select class="lookup-filter-operators" data-dojo-attach-point="operators" data-dojo-type="dijit.form.Select"></select><br/>',
                '<input class="filter-lookup-input" data-dojo-attach-point="textInput" data-dojo-type="dijit.form.TextBox" />',
                '</ul>',
            '</div>'
        ]),
        _loaded: false,
        _filterGroup: 'default',
        appliedValues: null,
        _hasApplied: false,
        operatorsMapping: {
            'Equal': conditionManagerResource.equalTo,
            'NotEqual': conditionManagerResource.notEqualTo,
            'LessThan': conditionManagerResource.lessThan,
            'LessThanEqual': conditionManagerResource.equalOrLessThan,
            'GreaterThan': conditionManagerResource.greaterThan,
            'GreaterThanEqual': conditionManagerResource.equalOrGreaterThan,
            'StartsWith': conditionManagerResource.startingWith,
            'EndsWith': conditionManagerResource.endsWith,
            'Contains': conditionManagerResource.contains
        },
        filter: null,
        store: null,
        _autoSearchHandle: null,
        _autoSearchDelay: 1000,
        _selectedOp: 'Contains',
        postMixInProperties: function () {
            this.inherited(arguments);
            if (this.expanded) {
                this.expanded = false; // toggleExpand will flip this
                setTimeout(lang.hitch(this, this._toggleExpand), 500);
            } else if (this.appliedValues) {
                setTimeout(lang.hitch(this, this._loadItems), 500);
            }
        },
        postCreate: function () {
            this.inherited(arguments);
            this.textInput.on('keyDown', lang.hitch(this, this._onInputKeyDown));
            if (this.appliedValues && this.appliedValues.value) {
                     this.textInput.set('value', this.appliedValues.value.value);
                    this._selectedOp = this.appliedValues.value.operator;
                    this._hasApplied = true;
            }
            this.resolveDeferred();
        },
        _setupAutoSearch: function () {
            if (this._autoSearchHandle > 0) {
                window.clearTimeout(this._autoSearchHandle);
            }

            this._autoSearchHandle = setTimeout(lang.hitch(this, function () {
                this.doSearch();
            }), this._autoSearchDelay);
        },
        uninitialize: function() {
            this.inherited(arguments);
        },
        toggleExpand: function (params, evt, el) {
            // toggleExpand is called when the user clicks the filter to expand it
            this._toggleExpand();
            this._saveExpandState();
        },
        _toggleExpand: function () {
            // toggle expanded state without saving state
            this.expanded = !this.expanded;

            if (this.domNode) {
                dojo.toggleClass(this.domNode, 'filter-collapsed');
            }

            this._loadItems();
        },
        _loadItems: function () {
            var ops = this.filter &&
                        this.filter.details &&
                        this.filter.details.userLookupFilter &&
                        this.filter.details.userLookupFilter.operators;

            if (this.operators) {
                if (!this._loaded) {
                    this._loaded = true;
                    array.forEach(ops, lang.hitch(this, function (op) {
                        var opSelected;
                        opSelected = false;
                        if (op === this._selectedOp) {
                            opSelected = true;
                        }
                        this.operators.addOption({
                            disabled: false,
                            label: this.operatorsMapping[op],
                            selected: opSelected,
                            value: op
                        });
                    }));
                    this.operators.set('value', this._selectedOp);
                }

            }
        },
        _saveExpandState: function () {
            var data = this.parent._configuration._hiddenFilters || {},
                key = this.parent._configuration._hiddenFiltersKey,
                service = Sage.Services.getService("ClientGroupContext"),
                context = service && service.getContext(),
                prop = context.CurrentEntity + '_' + this.filter.filterName;

            // Create it if necessary
            if (!data[prop]) {
                data[prop] = {
                    expanded: false,
                    hidden: false
                };
            }

            data[prop].expanded = this.expanded;
            FiltersUtility.setHiddenFilters(key, json.stringify(data));
        },
        _onInputKeyDown: function (event) {
            if (event.keyCode === 13 || event.keyCode === 0) {
                this.doSearch();
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Any time a key other than enter is pressed,
                // reset the auto search timeout
                this._setupAutoSearch();
            }
        },
        doSearch: function () {
            var value,
                name = this.filter.filterName,
                source = this;
                
            value = {
                operator: this.operators.get('value'),
                value: this.textInput.get('value')
            };
            
            this.onSelectionChange(name, value, source);
        },
        onSelectionChange: function(name, value, source) {
            dojo.publish(dString.substitute("/ui/filters/${0}/change", [this._filterGroup]), [this.filter, name, value, source]);
        },
        resolveDeferred: function () {
            if(this.deferred) {
                // resolve() doesn't have a return, so deferred is set to null
                //  (ensures this doesn't get hit when it's already resolved)
                this.deferred = this.deferred.resolve();
            }
        }
    });

    return widget;
});
