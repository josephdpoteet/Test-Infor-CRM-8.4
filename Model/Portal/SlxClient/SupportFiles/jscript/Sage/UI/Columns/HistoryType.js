/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define("Sage/UI/Columns/HistoryType", [
       'dojox/grid/cells/_base',
       'Sage/Utility',
       'Sage/Utility/Activity',
       'dojo/string',
       'dojo/_base/declare'
],
function (_base, util, activity, dString, declare) {
    var widget = declare("Sage.UI.Columns.HistoryType", _base, {
        keyField: false,
        format: function (inRowIndex, inItem) {
            var type = this.get(inRowIndex, inItem);
            if (!type) {
                return this.defaultValue;
            }
            var key = util.getValue(inItem, this.keyField || "$key");
            var fmt = '<div class="Global_Images icon16x16 ${0}"></div>&nbsp;<span onclick="javascript:Sage.Link.editHistory(\'${1}\')" class="activity-type-link">${2}</span>';
            return dString.substitute(fmt, [activity.getActivityImageClass(type, 'small'), key, activity.getActivityTypeName(type)]);
        }
    });

    return widget;
});
