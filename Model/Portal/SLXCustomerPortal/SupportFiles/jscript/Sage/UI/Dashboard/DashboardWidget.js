/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define("Sage/UI/Dashboard/DashboardWidget", [
        'dojo/_base/declare',
        'Sage/UI/Dashboard/WidgetDefinition',
        'dojo/i18n',
        'dojo/_base/lang',
        'dojo/string',
        'dijit/form/TextBox',
        'dijit/form/CheckBox',
        'dojox/charting/widget/Chart2D',
        'dojox/charting/action2d/Highlight',
        'dojox/charting/action2d/MoveSlice',
        'dojox/charting/action2d/Tooltip',
        'dojox/charting/action2d/Magnify',
        'dojox/charting/widget/Legend',
        'Sage/UI/Dashboard/ChartingTheme',
        'dojo/i18n!./nls/DashboardWidget'
    ],
function (
        declare,
        widgetDefinition,
        i18n,
        lang,
        string
    ) {
    var widget = declare('Sage.UI.Dashboard.DashboardWidget', null, {
        constructor: function (config) {
            dojo.safeMixin(this, config);
            this._setDefinition();
            this._winResize = dojo.connect(window, 'onresize', this, function () {
                if (!this.parentCell.open || !this.parentCell._started) { return; }
                if (this.parentCell.refresh) {
                    this.parentCell.refresh(true);
                }
            });
            this.dropSub = dojo.subscribe('/ui/widget/dropped', this, function (id, p, c, i) {
                if (id === this.parentCell.id) {
                    if (!this.parentCell.open || !this.parentCell._started) { return; }
                    if (this.parentCell.refresh) {
                        this.parentCell.refresh(true);
                    }
                }
            });
        },
        postMixInProperties: function () {
            dojo.mixin(this, i18n.getLocalization("Sage.UI.Dashboard", "DashboardWidget"));
        },
        _getInstanceData: function () {
            if (this.parentCell.isNew && this.definition.editor) {
                this.definition.editor(this.parentCell);
                if(this.parentCell._settingsWidget) { // Default widget, for example, doesn't have a dialog to toggle
                    this.parentCell._settingsWidget.toggle();
                }
                else {
                    this.parentCell._editorAdded();
                }
                return;
            }
            if (!this.definition.isStatic) {
                // get the the 36 data here
                var that = this;
                // do I have a datasource? if so use it for an XHR call
                if (this.options.datasource) {
                    dojo.xhrGet({
                        url: this.options.datasource,
                        handleAs: 'json',
                        preventCache: true,
                        load: function (data) {
                            if (data) {
                                that._setInstanceData(data);
                            } else {
                                that.parentCell.set(
                                    'content', this.noQueryDataText + this.options.datasource); //'The server has no data for query ' 
                            }
                        },
                        error: function(data) {
                            that._setInstanceData(null);
                        }
                    });
                } else { // I am a new widget in need of a datasource or a StaticXhr
                    this.parentCell._setContent(this.initializingText || '', true);
                    if (this.definition.isStaticXhr) {
                        // widget handles xhr and cell rendering itself
                        this._setInstanceData(null);
                    }
                    // TODO how to use editor here?
                    if (this.definition.editor) {
                        this.definition.editor(this.parentCell);
                    }
                }
            } else {
                this._setInstanceData();
            }
        },
        _setDefinition: function () {
            // WidgetDefinition is a factory function,
            // the second argument is a callback with the returned definition
            widgetDefinition(
                Sage.UI.WidgetDefinitions[this.options.name], lang.hitch(this, function (definition) {
                    this.definition = definition;
                    this._getInstanceData();
            }));
        },
        _setInstanceData: function (data) {
            // pre-existing group list widgets do not have the tableName as part of their widgetOptions, so look it up and add it.
            var relativeName = this.parentCell.widgetOptions.name.replace(' ', '_');
            if (relativeName === "Group_List" && !this.parentCell.widgetOptions.tableName && this.parentCell.widgetOptions.resource) {
                console.log("Need to grab the table name for %o.%o", this.parentCell.widgetOptions.title, relativeName);

                var request = new Sage.SData.Client.SDataResourceCollectionRequest(Sage.Data.SDataServiceRegistry.getSDataService('metadata'));
                request.setResourceKind("entities");
                request.setQueryArg('startIndex', 0);
                request.setQueryArg('count', 1);
                request.setQueryArg('select', 'tableName');
                request.setQueryArg('where', string.substitute("name eq '${0}'", [this.parentCell.widgetOptions.resource]));
                request.setQueryArg('format', 'JSON');
                request.read({
                    scope: this,
                    async: false,
                    success: function (data) {
                        console.log(data);
                        if (data.$resources[0].tableName) {
                            this.parentCell.widgetOptions.tableName = data.$resources[0].tableName;
                        }
                    },
                    failure: function (data) {
                        console.warn('request has errored %o', request);
                    }
                });
            }
            // check for isStatic, and if true then just inject the 
            // return from the html() method
            if (this.definition.isStatic) {
                this.parentCell.set('content', this.definition.html(this.parentCell));
                // add the editor after if exists
                if (this.definition.editor) {
                    this.definition.editor(this.parentCell);
                }
            } else {
                // hand off to the widget's html() to handle rendering.
                this.definition.html(this.parentCell, data);
            }
        }
    });

    return widget;
});


