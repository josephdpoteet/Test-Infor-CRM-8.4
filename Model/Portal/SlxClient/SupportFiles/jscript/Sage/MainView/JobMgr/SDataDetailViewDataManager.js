/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define("Sage/MainView/JobMgr/SDataDetailViewDataManager", [
    'Sage/Data/SDataServiceRegistry',
    'Sage/Data/SDataStore',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'Sage/Utility/nls/Jobs'
],
function (sDataServiceRegistry, sDataStore, declare, lang, Jobs) {
    var sDataDetailRequestQueue = declare('Sage.MainView.JobMgr.SDataDetailRequestQueue', null, {
        select: [],
        resourceKind: '',
        fetching: false,
        include: [],
        service: null,
        constructor: function (options) {
            lang.mixin(this, options);
            this.requestHash = {};
            this.fetching = false;
            var jobService = Sage.Services.getService('JobService');
            this.service = jobService.getSchedulingSDataService();
        },
        add: function (entityid, context) {
            var currentContext = this.requestHash[entityid];
            if ((currentContext) && (currentContext.id !== context.id)) {
                if (!currentContext.duplicates) {
                    currentContext.duplicates = [];
                }
                var found = false;
                for (var i = 0; i < currentContext.duplicates.length; i++) {
                    if (currentContext.duplicates[i].context.id === context.id) {
                        found = true;
                    }
                }
                if (!found) {
                    currentContext.duplicates.push({ id: context.id, context: context });
                }

            } else {
                this.requestHash[entityid] = context;
            }
        },
        send: function (callback, manager) {
            this.fetching = true;
            var context = this;
            var request = new Sage.SData.Client.SDataSingleResourceRequest(this.service);
            request.setResourceKind(this.resourceKind);
            for (var id in this.requestHash) {
                request.setResourceSelector("'" + id + "'");
            }
            request.setQueryArg('include', this.include.join(','));
            request.read({
                success: lang.hitch(manager, callback, context),
                failure: lang.hitch(this, this.requestFailed, context)
            });
        },
        requestFailed: function (a, b, c) {
            console.log('Request failed %o %o %o', a, b, c);
            for (var cid in a.requestHash) {
                var tryThisObject = a.requestHash[cid];
                if (tryThisObject && tryThisObject.contentNode) {
                    tryThisObject.contentNode.innerHTML = Jobs.getRequestMessageFromStatus(a.status);
                }
            }
        }
    });
    var sDataSummaryVewDataManager = declare('Sage.MainView.JobMgr.SDataDetailViewDataManager', null, {
        keyField: "$key",
        constructor: function () {
            this.queue = new sDataDetailRequestQueue();
            this.requestTimeout = false;
        },
        requestDataNoWait: function (entityid, widget, requestConfiguration) {
            var tempQueue = new sDataDetailRequestQueue();
            if (requestConfiguration.keyField) {
                this.keyField = requestConfiguration.keyField;
            }
            tempQueue.select = requestConfiguration.select;
            tempQueue.resourceKind = requestConfiguration.resourceKind;
            tempQueue.serviceName = requestConfiguration.serviceName;
            tempQueue.include = requestConfiguration.include;
            tempQueue.useBatchRequest = requestConfiguration.useBatchRequest;
            if (requestConfiguration.expandRecurrences !== null) {
                tempQueue.expandRecurrences = requestConfiguration.expandRecurrences;
            }
            tempQueue.add(entityid, widget);
            tempQueue.send(this.receiveData, this);
        },
        receiveData: function (context, data) {
            var entity = data;
            var id = entity.id;
            if (!id) {
                id = entity[this.keyField];
                entity.id = id;
            }
            var currentContext = context.requestHash[entity.id];
            if (currentContext) {
                try {
                    if (!currentContext.applied) {
                        currentContext.applied = true;
                        currentContext.set('entity', entity);
                    }
                }
                catch (err) {
                    console.error(err);
                }
            }
        }
    });
    return sDataSummaryVewDataManager;
});