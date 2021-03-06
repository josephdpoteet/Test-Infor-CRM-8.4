/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define("Sage/MainView/ReportMgr/ReportsSDataSummaryFormatterScope", [
    'Sage/UI/SummaryContainer',
    'dojo/i18n',
    'Sage/UI/SummaryFormatterScope',
    'Sage/MainView/ReportMgr/ReportsSDataDetailViewDataManager',
    'Sage/UI/Controls/SummaryAggregate',
    'dojo/_base/declare'
],
function (summaryContainer, i18n, SummaryFormatterScope, ReportsSDataDetailViewDataManager, SummaryAggregate, declare) {
    var reportsSDataSummaryFormatterScope = declare('Sage.MainView.ReportMgr.ReportsSDataSummaryFormatterScope', [SummaryFormatterScope], {
        constructor: function (args) {
            dojo.mixin(this, args);
            this.widgets = [];
            this.preFetchResources();
            this._setupDataManager();
        },
        _setupDataManager: function () {
            this.dataManager = new ReportsSDataDetailViewDataManager(this.requestConfiguration);
            if (Sage.Services.hasService('SummaryViewDataManager')) {
                Sage.Services.removeService('SummaryViewDataManager');
            }
            Sage.Services.addService('SummaryViewDataManager', this.dataManager);
        }
    });
    return reportsSDataSummaryFormatterScope;
});