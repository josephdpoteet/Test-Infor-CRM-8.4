define('Sage/nls/Dialog_ur-pk',{
'dijit/nls/loading':{"loadingState":"Loading...","errorState":"Sorry, an error occurred","_localized":{}}
,
'dijit/nls/common':{"buttonOk":"OK","buttonCancel":"Cancel","buttonSave":"Save","itemClose":"Close","_localized":{}}
,
'dijit/form/nls/validate':{"invalidMessage":"The value entered is not valid.","missingMessage":"This value is required.","rangeMessage":"This value is out of range.","_localized":{}}
,
'Sage/UI/nls/Dialogs':{"yesText":"Yes","noText":"No","okText":"OK","cancelText":"Cancel","_localized":{}}
,
'Sage/Utility/nls/ErrorHandler':{"EmailContentL1":"Administrator","EmailContentL2":"${0} encountered an error at ${1}","EmailContentL3":"Please click the link below to view the Event Viewer error log for this error","HttpError":"There was an unknown error in response to a HTTP request.","_localized":{}}
,
'Sage/Utility/nls/Utility':{"dangerousValueWarn":"A potentially dangerous form value was detected.  Please avoid invalid character combinations.Example: \"&lt;script&gt;&lt;/script&gt;\" Also avoid invalid characters in file names: \\ / : * ? \" &lt; &gt; | ","_localized":{}}
,
'Sage/Utility/nls/Email':{"RecipientInfoError":"There was an unexpected error attempting to read the recipient information: ${0}","MailToProtocolError":"There was an error attempting to generate an e-mail message using the mailto: protocol (href.length=${0}). The number of e-mail recipients may need to be reduced. Browser error: ${1}.","InvalidContextError":"The e-mail request cannot be processed. This operation is only supported for Contacts or Leads.","InvalidArgumentError":"The e-mail request cannot be processed. Invalid argument.","FilteredOutMsg":"Filtered out: Non-solicitable: ${0}; Invalid: ${1}; Dupes: ${2}","AllInvalidEmailError":"The collection does not include one entity with a valid and/or solicitable e-mail address.","EmailFieldQueried":"The e-mail field queried was: ${0}.","EntityInfoError":"There was a failure attempting to retrieve the entity information.","CapabilityModeError":"The capability to write an e-mail to a group selection is only available in list views.","CapabilityEntityError":"The capability to write an e-mail to a group selection is only available for Contacts or Leads.","NoRowsSelectedError":"There are no rows selected.","_localized":{}}
,
'Sage/Groups/nls/GroupManager':{"ConfirmDeleteMessage":"Are you sure you want to delete the current group?","ConfirmDeleteFmtMessage":"Are you sure you want to delete this group: ${0}","InvalidSortStringMessage":"Error: Invalid sort string - ","InvalidConditionStringMessage":"Error: Invalid condition string - ","InvalidLayoutConditionStringMessage":"Error: Invalid layout string - ","noneSelectedTitle":"No records selected","noneSelectedPromptFmt":"No records selected. The full group, ${0} record(s), will be added.  Proceed?","noneSelectedRemovePromptFmt":"No records selected. The full group, ${0} record(s), will be removed.  Proceed?","noRecordsInGroup":"There are no records to be selected from this group.","newGroupTitle":"Add Records to new Group","newGroupNamePrompt":"${0} selected record(s) will be added to this new group.<br><br>Group Name:<br>${1}","newGroupRePrompt":"&nbsp;&nbsp;<i>Please enter a group name.</i>","invalidCharMsg":"Name Cannot contain: / \\ : * ? \" <> | or '","groupNameText":"Group Name:","saveLookupDlgTitle":"Save Lookup Results as New Group","yesCaption":"Yes","noCaption":"No","cancelCaption":"Cancel","okCaption":"OK","LOCALSTORE_NAMESPACE":"SageGroups","exportToExcel":"This method has been deprecated, please see Sage.TaskPane.CommonTasksTasklet.exportToExcel.","createAdHocGroupJob_Description":"Group: ${0}","createAdHocGroupJob_Title":"Creating Group","createAdHocGroupJobError":"Sorry an error occurred during the creation of the group: ${0}","createAdHocGroupJobProcessingJobMsg":"You may continue waiting for completion, or you may close this message.  You will receive a notification when the group is complete.","_localized":{}}
,
'Sage/Utility/nls/Jobs':{"errorMessage":"Sorry, an error occurred during the execution of job '${0}': ${1} ${2}.","jobCompletedSuccessfully":"The job has completed successfully.","unexpectedErrorMessage":"Sorry, an unexpected error occurred during the execution of job '${0}'.","repeatIndefinitely":"Repeat indefinitely","cancelButtonCaption":"Cancel","defaultProgressDialogTitle":"Running Job","closeButtonCaption":"Close","dataExpiredRefreshPage":"This job's information has expired, please refresh the page.","generalCheckJobService":"This job's information was not able to be requested, please check the job service.","JobServerviceOff":"The job service is currently not available, please turn on or restart the service.","_localized":{}}
,
'Sage/UI/Controls/nls/_DialogHelpIconMixin':{"helpTooltip":"Help","_localized":{}}
,
'dgrid/extensions/nls/columnHider':{"popupTriggerLabel":"Show or hide columns","popupLabel":"Show or hide columns","_localized":{}}
,
'dgrid/extensions/nls/pagination':{"status":"${start} - ${end} of ${total} results","gotoFirst":"Go to first page","gotoNext":"Go to next page","gotoPrev":"Go to previous page","gotoLast":"Go to last page","gotoPage":"Go to page","jumpPage":"Jump to page","rowsPerPage":"Number of rows per page","_localized":{}}
,
'Sage/UI/Controls/nls/Grid':{"loadingMessage":"Loading data...","noDataMessage":"No records match the selection criteria.","showMore":"show more","showLess":"show less","_localized":{}}
,
'dijit/form/nls/ComboBox':{"previousMessage":"Previous choices","nextMessage":"More choices","_localized":{}}
,
'Sage/UI/Controls/nls/DateTimePicker':{"okText":"OK","cancelText":"Cancel","convertDescription":"Compare to another time zone.","convertText":"Compare","calculatorText":"Time Zone Calculator","timeZoneSourceText":"Current Time Zone","timeZoneDestText":"Comparison Time Zone","buttonToolTip":"Calendar","timeStartText":"Time","timeZoneCalculatorText":"Time Zone Calculator","_localized":{}}
,
'Sage/Utility/nls/Sql':{"InvalidApostropheCount":"The number of apostrophes in the SQL IN clause is invalid.","_localized":{}}
,
'dojox/grid/enhanced/nls/EnhancedGrid':{"singleSort":"Single Sort","nestedSort":"Nested Sort","ascending":"Click to sort Ascending","descending":"Click to sort Descending","sortingState":"${0} - ${1}","unsorted":"Do not sort this column","indirectSelectionRadio":"Row ${0}, single selection","indirectSelectionCheckBox":"Row ${0}, multiple selection","selectAll":"Select all","_localized":{}}
,
'dojox/form/nls/Uploader':{"label":"Select Files...","_localized":{}}
,
'Sage/Utility/nls/Activity':{"ToDo":"To-Do","PhoneCall":"Phone Call","Meeting":"Meeting","Personal":"Personal Activity","Literature":"Literature","Fax":"Fax","Letter":"Letter","Note":"Note","Email":"E-mail","Document":"Document","DatabaseChange":"Database Change","Event":"Event","ScheduledEvent":"Scheduled Event","Contact":"Contact","Lead":"Lead","New":"New","hr":"hr","h":"h","m":"m","Change":"Change","Deleted":"Deleted","Confirm":"Confirm","Decline":"Decline","Unknown":"Unknown","Leader":"Leader","Complete":"Complete","confirmTypeChanged":"Changed","confirmTypeConfirmed":"Confirmed","confirmTypeDeleted":"Deleted","timelessText":"timeless","_localized":{}}
,
'Sage/UI/Controls/nls/PickList':{"okText":"OK","missingPickListText":"The PickList Could Not be Found","_localized":{}}
,
'Sage/UI/nls/SearchConditionWidget':{"trueText":"True","falseText":"False","networkText":"Network","remoteText":"Remote","webText":"Web","webViewerText":"Web Viewer","concurrentText":"Concurrent","retiredText":"Retired","templateText":"Template","addonText":"Addon","adminText":"Admin","userText":"User","teamText":"Team","departmentText":"Department","systemText":"System","_localized":{}}
,
'Sage/UI/nls/ConditionManager':{"addimgalttext":"Add Condition","hideimgalttext":"Remove Condition","addrowlabel":"Lookup by:","hiderowlabel":"And:","srchBtnCaption":"Search","errorOperatorRequiresValue":"The operator requires a value","startingWith":"Starting With","endsWith":"Ends With","contains":"Contains","equalTo":"Equal to","notEqualTo":"Not Equal to","equalOrLessThan":"Equal or Less than","equalOrGreaterThan":"Equal or Greater than","lessThan":"Less than","greaterThan":"Greater than","_localized":{}}
,
'Sage/UI/nls/SDataLookup':{"closeText":"Close","cancelText":"Cancel","loadingText":"Loading...","noDataText":"No records returned","_localized":{}}
,
'Sage/UI/nls/EditableGrid':{"unsavedDataText":"*unsaved data","addText":"Add","deleteText":"Delete","saveText":"Save","cancelText":"Cancel","noSelectionsText":"There are no records selected.","confirmDeleteFmtTxt":"Are you sure you want to delete these ${0} items?","yesText":"Yes","noText":"No","createItemsInvalidArrayText":"The items parameter in Sage.UI.EditableGrid.createItems() should be an array.","recordCountFormatString":"Records ${0} - ${1} of ${2}","noDataMessage":"No records match the selection criteria.","dirtyDataMessage":"You have unsaved data.  If you continue you will lose the changes you have made.","okText":"OK","_localized":{}}
,
'Sage/Utility/nls/File':{"unableToUploadText":"CRM Office Integration Module must be installed to use this feature.","unknownSizeText":"unknown","largeFileWarningText":"Warning: This request exceeds the size limit set by your administrator and failed to upload.","largeFileWarningTitle":"Warning","_localized":{}}
,
'Sage/Utility/File/nls/DescriptionsForm':{"titleFmt":"Add Attachment(s) for ${0}","titleLibraryDoc":"Add Library Document (s)","fileNameText":"File name and size: ","descText":"Description:","okText":"OK","cancelText":"Cancel","_localized":{}}
,
'Sage/Utility/File/nls/Attachment':{"uploadingAttachments":"Uploading attachments","uploadCompleted":"Completed","uploadingPleaseWait":"Uploading, please wait...","uploadFailed":"Upload failed.","_localized":{}}
,
'Sage/Utility/File/nls/AttachmentPropertiesEditForm':{"fileText":"File","descriptionText":"Description","sizeText":"Size","attachDateText":"Attached Date","attachedByText":"Attached By","uploadFileText":"Select Different File...","editText":"Edit Attachment","okText":"OK","cancelText":"Cancel","browseText":"Browse","urlText":"URL","requestFailedMsg":"The requested operation could not be completed, please try again later.","_localized":{}}
,
'Sage/Utility/File/nls/FallbackFilePicker':{"addLibraryFileText":"Add Library File","attachFileText":"Attach File","descriptionText":"Description","uploadFileText":"Attachment","okText":"OK","cancelText":"Cancel","invalidContext":"The file(s) cannot be uploaded outside of the Sales Library.","fileTooLargeError":"The file upload attempt was aborted because the file was too large.","pleaseSelectFile":"Please select a file first.","slxErrorIdInfo":"Infor CRM Error Id: ","_localized":{}}
,
'Sage/Utility/File/nls/AddURLAttachment':{"descriptionText":"Description","urlText":"URL","titleText":"Add URL Attachment","okText":"OK","cancelText":"Cancel","requestFailedMsg":"The requested operation could not be completed, please try again later.","urlBlankMsg":"The URL or description property cannot be blank.","_localized":{}}
,
'Sage/Utility/File/nls/GoogleDocPicker':{"googleDocumentsTitle":"Google Documents","couldNotOpenWindowMsg":"Could not open authentication window - please check your popup blocker settings.","_localized":{}}
,
'Sage/UI/nls/AttachmentList':{"attachmentText":"Attachment","userText":"User","modDateText":"Modify Date/Time","dateRangeText":"Modify Date Range","sizeText":"Size","extensionText":"File Extension","addFileText":"Add File","addUrlText":"Add URL","editText":"Edit","helpText":"Help","addGoogleText":"Add Google Document","deleteText":"Delete","request":"Request File","delivered":"Delivered","requested":"Requested","available":"Available","_localized":{}}
,
'Sage/UI/nls/GridView':{"unsavedDataText":"*unsaved data","addText":"Add","deleteText":"Delete","saveText":"Save","cancelText":"Cancel","editText":"Edit","helpText":"Help","noSelectionsText":"There are no records selected.","confirmDeleteFmtTxt":"Are you sure you want to delete these ${0} items?","yesText":"Yes","noText":"No","createItemsInvalidArrayText":"The items parameter in Sage.UI.GridView.createItems() should be an array.","noDataMessage":"No records match the selection criteria.","dirtyDataMessage":"You have unsaved data.  If you continue you will lose the changes you have made.","okText":"OK","totalRecordCountLabel":"Total Records: ${0}","toggleRows":"Show/Hide preview","_localized":{}}
,
'Sage/UI/nls/SLXPreviewGrid':{"applyText":"Apply","resetText":"Reset","filterText":"Filter","_localized":{}}
,
'Sage/UI/Controls/nls/EntityInfoToolTip':{"errorText":"Information not found.","loadingText":"Loading...","noInfoText":"No information to show.","mainText":"Main:","faxText":"Fax:","tollFreeText":"Toll Free:","urlText":"Web URL:","workText":"Work:","mobileText":"Mobile:","emailText":"Email:","contactNameText":"Name:","phoneText":"Phone:","accountText":"Account:","_localized":{}}
,
'Sage/UI/Controls/nls/Lookup':{"buttonToolTip":"Find","closeButtonToolTip":"Remove","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/ActivityEditor':{"labelWidth":"100","tabNameGeneralText":"General","tabNameAvailabilityText":"Availability","tabNameAssociationsText":"Associations","tabNameRecurringText":"Recurring","tabNameAttachmentsText":"Attachments","tabNameNotesText":"Notes","scheduleText":"Schedule","scheduleTodo":"Schedule To-Do","schedulePhonecall":"Schedule Phone Call","scheduleMeeting":"Schedule Meeting","startTimeText":"Start Time","timeLessText":"Timeless","alarmText":"Alarm","durationText":"Duration","rolloverText":"Auto rollover to next day","contactText":"Contact","accountText":"Account","leadText":"Lead","opportunityText":"Opportunity","ticketText":"Ticket","companyText":"Company","regardingText":"Regarding","notesText":"Notes","priorityText":"Priority","leaderText":"Leader","categoryText":"Category","locationText":"Location","dialogHeaderFormatText":"${actionText} ${activityType} - ${description}","scheduledByFormatText":"Scheduled by ${user} on ${date}","completeScheduledByFormatText":"Scheduled by ${user} on ${date} originally for ${startDate}","newConfirmationHeaderFormatText":"Confirm ${activityType} Scheduled by ${user}","otherConfimationHeaderFormatText":"${activityType} ${actionText} by ${user}","acceptedText":"Accepted","declinedText":"Declined","scheduledText":"Scheduled","updatedText":"Updated","deletedText":"Deleted","cancelText":"Cancel","okText":"OK","completeTodo":"Complete To-Do","completePhonecall":"Complete Phone Call","completeMeeting":"Complete Meeting","completeText":"Complete","completeBtnText":"Complete...","completedText":"Completed","deleteText":"Delete","lookupActText":"Lookup Account","lookupContactText":"Lookup Contact","lookupOpportunityText":"Lookup Opportunity","lookupTicketText":"Lookup Ticket","lookupLeadText":"Lookup Lead","lookupLeaderText":"Lookup Leader","lookupResourcesText":"Add Members and Resources","addResourceText":"Add Selected","mainPhoneText":"Main Phone","typeText":"Type","subTypeText":"Sub-Type","nameText":"Name","cityText":"City","stateText":"State","workphoneText":"Work Phone","emailText":"Email","acctMgrText":"Acct Manager","descriptionText":"Description","stageText":"Stage","statusText":"Status","ownerText":"Owner","ticketNumberText":"Ticket Number","phoneText":"Phone","urgencyText":"Urgency","areaText":"Area","recurringText":"Recurring","resultText":"Result","followupText":"Follow-up","noneText":"None","carryOverAttachmentsText":"Carry Over Attachments","carryOverNotesText":"Carry Over Notes","asScheduledText":"As Scheduled","nowText":"Now","responseText":"Response","acceptText":"Accept","declineText":"Decline","deleteConfText":"Delete Confirmation","closeText":"Close","leadFullNameText":"Name","postalText":"Postal Code","failedLoadingDataMsg":"An error occurred loading data.","removeText":"Remove","noText":"No","yesText":"Yes","areYouSureText":"You are about to permanently delete this record.","couldNotSaveErrorText":"We're sorry, the activity could not be saved because an error occurred.","couldNotDeleteErrorText":"We're sorry, the activity could not be deleted because an error occurred.","couldNotCompleteErrorText":"We're sorry, the activity could not be completed because an error occurred.","scheduleFollowUpErrorText":"The follow up could not be scheduled because the HistoryId could not be determined.","tabNameParticipants":"Participants","updateToDo":"To-Do","updatePhoneCall":"Phone Call","updateMeeting":"Meeting","_localized":{}}
,
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/SpeedSearchLookup':{"dialogTitle":"Lookup Participants","okText":"Add Selected","cancelText":"Close","noDataText":"No records match the selection criteria","srchBtnCaption":"Search","colName":"Name","colType":"Type","colAccount":"Company/Account","colTitle":"Title","colEmail":"Email","colWorkPhone":"Work Phone","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/ActivityEditorAttendeesTab':{"header_Name":"Name","header_AccountName":"Account/Company","header_Type":"Type","header_Primary":"Primary Contact","header_RoleName":"Role","header_Phone":"Phone","header_Email":"Email","header_TimeZone":"Time Zone","header_Notes":"Notes","tooltip_speedSearch":"Add Participant","tooltip_AddContact":"Add Contact","tooltip_AddLead":"Add Lead","tooltip_Delete":"Delete","header_Attendee":"Is Attendee","_localized":{}}
,
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/ContactLookupConfig':{"contactText":"Contact","accountText":"Account","lookupContactText":"Lookup Contact","nameText":"Name","cityText":"City","stateText":"State","workphoneText":"Work Phone","emailText":"Email","dialogButtonText":"Add Selected","cancelText":"Close","colFirstName":"First Name","colLastName":"Last Name","colTitle":"Title","colAccount":"Account","colWorkPhone":"Work Phone","colEmail":"Email","dialogTitleText":"Lookup Contacts","_localized":{}}
,
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/LeadLookupConfig':{"contactText":"Contact","accountText":"Account","lookupContactText":"Lookup Contact","nameText":"Name","cityText":"City","stateText":"State","workphoneText":"Work Phone","emailText":"Email","dialogButtonText":"Add Selected","cancelText":"Close","colFirstName":"First Name","colLastName":"Last Name","colTitle":"Title","colCompany":"Company","colWorkPhone":"Work Phone","colEmail":"Email","dialogTitleText":"Lookup Leads","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/RecurringEditor':{"activityOccurrsText":"This activity occurs...","onceText":"Once","dailyText":"Daily","weeklyText":"Weekly","monthlyText":"Monthly","yearlyText":"Yearly","occursOnceText":"This activity occurs only once","everyText":"Every","daysText":"Day(s)","daysAfterText":"Day(s) after completion","startRecurringText":"Start Recurring: ","endAfterText":"End After","endOnText":"End Recurring","occurrencesText":"occurrences","weeksOnText":"Week(s) on","monText":"Monday","tueText":"Tuesday","wedText":"Wednesday","thurText":"Thursday","friText":"Friday","satText":"Saturday","sunText":"Sunday","weeksAfterText":"Week(s) after completion","monthsOnText":"Month(s) on day","monthsOnTheText":"Month(s) on the","monthsAfterText":"Month(s) after completion","firstText":"1st","secondText":"2nd","thirdText":"3rd","fourthText":"4th","lastText":"last","yearsOnText":"Year(s) on","yearsAfterText":"Year(s) after completion","janText":"January","febText":"February","marText":"March","aprText":"April","mayText":"May","junText":"June","julText":"July","augText":"August","sepText":"September","octText":"October","novText":"November","decText":"December","theText":"The","inText":"in","_localized":{}}
,
'Sage/UI/Controls/nls/DurationSelect':{"minuteText":"minute","minutesText":"minutes","hourText":"hour","hoursText":"hours","dayText":"day","daysText":"days","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/EditEventEditor':{"titleScheduleText":"Schedule Event","titleEditText":"Edit Event","lblDayTypeText":"Day Type:","lblStartDateText":"Start Date:","lblEndDateText":"End Date:","lblUserText":"User:","lookupUserText":"Lookup User","lblCategoryText":"Category:","lblLocationText":"Location:","lblDescriptionText":"Description:","btnOkayText":"OK","btnCancelText":"Cancel","btnHelpText":"Help","eventTypeActiveText":"Active","eventTypeBusinessTripText":"Business Trip","eventTypeConferenceText":"Conference","eventTypeHolidayText":"Holiday","eventTypeOffText":"Off","eventTypeTradeShowText":"Trade Show","eventTypeUnavailableText":"Unavailable","eventTypeVacationText":"Vacation","errorText":"I'm sorry, the event could not be created because an error occurred.","invaildDatesText":"I'm sorry, the end date cannot be earlier than the start date.","nameText":"Name","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/QuickCompleteEditor':{"lblResultText":"Result:","lblNoteText":"Note (append to all items):","btnCompleteIndividuallyText":"Individually","btnAsScheduledText":"As Scheduled","btnCompleteNowText":"Now","btnCancelText":"Cancel","btnCloseText":"Close","btnHelpText":"Help","resultCompletedText":"Complete","titleText":"Quick Complete","actionMessage":"Only activities that you have permission to complete will be completed.","completeMessage":"Complete all {0} selected activities:","processingMessage":"Processing all {0} selected activities. Please wait...","_localized":{}}
,
'Sage/Services/nls/ActivityActionProcessor':{"btnOkayText":"OK","btnCancelText":"Cancel","btnCloseText":"Close","btnHelpText":"Help","processingText":"Processing request please wait...","failureText":"I'm sorry, the action was not successful an error occurred.","titleText":"Process","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/HistoryEditor':{"labelWidth":"100","tabNameGeneralText":"General","tabNameAttachmentsText":"Attachments","scheduleText":"Schedule","startTimeText":"Scheduled","completedDateText":"Completed","timeLessText":"Timeless","durationText":"Duration","contactText":"Contact","accountText":"Account","leadText":"Lead","opportunityText":"Opportunity","ticketText":"Ticket","companyText":"Company","regardingText":"Regarding","resultText":"Result","notesText":"Notes","noteText":"Note","priorityText":"Priority","leaderText":"Leader","categoryText":"Category","locationText":"Location","scheduledByFormatText":"Scheduled by ${user} on ${date}","cancelText":"Cancel","okText":"OK","deleteText":"Delete","lookupActText":"Lookup Account","lookupContactText":"Lookup Contact","lookupOpportunityText":"Lookup Opportunity","lookupTicketText":"Lookup Ticket","lookupLeadText":"Lookup Lead","lookupLeaderText":"Lookup Leader","lookupResourcesText":"Lookup","mainPhoneText":"Main Phone","typeText":"Type","subTypeText":"Sub-Type","nameText":"Name","cityText":"City","stateText":"State","workphoneText":"Work Phone","emailText":"Email","acctMgrText":"Acct Manager","descriptionText":"Description","stageText":"Stage","statusText":"Status","ownerText":"Owner","ticketNumberText":"Ticket Number","phoneText":"Phone","urgencyText":"Urgency","areaText":"Area","recurringText":"Recurring","followupText":"Follow-up","noneText":"None","carryOverAttachmentsText":"Carry Over Attachments","carryOverNotesText":"Carry Over Notes","asScheduledText":"As Scheduled","insertText":"Insert","insertNoteText":"Insert Note","couldNotSaveErrorText":"We're sorry, the history could not be saved because an error occurred.","deleteMessage":"You are about to permanently delete this record.","deleteTitle":"Delete History","couldNotDeleteErrorText":"We're sorry, the history could not be deleted because an error occurred.","postalText":"Postal Code","tabNameParticipants":"All Participants","resultComplete":"Complete","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/HistoryEditorAttendeesTab':{"header_Name":"Name","header_AccountName":"Account/Company","header_Type":"Type","header_Primary":"Primary Contact","header_RoleName":"Role","header_Phone":"Phone","header_Email":"Email","header_TimeZone":"Time Zone","header_Notes":"Notes","header_Status":"Status","header_Attendee":"Is Attendee","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/OccurrenceOrSeriesQueryDlg':{"titleFmt":"${type} - ${description}","actDateText":"Activity Date:","contactText":"Contact:","accountText":"Account:","opportunityText":"Opportunity:","editAllText":"Edit all Occurrences","editOneText":"Edit this Occurrence","completeAllText":"Complete all Occurrences","completeOneText":"Complete this Occurrence","deleteAllText":"Delete all Occurrences","deleteOneText":"Delete this Occurrence","continueText":"Continue","failedToLoadMsg":"Could not load activity","_localized":{}}
,
'Sage/Services/nls/ActivityService':{"txtErrorActionMsg":"I'm sorry, the action was not successful an error occurred.","txtActivity":"activity","txtActivities":"activities","txtActionDeleteActivites":"Delete Activities","txtActionDeleteActivitiesQuestion":"Only activities that you have permission to delete will be deleted. <P> Are you sure you want to delete the {0} selected {1}?","txtAlarm":"alarm","txtAlarms":"alarms","txtActionSnoozeAlarm":"Snooze Alarm","txtActionSnoozeQuestion":"Are you sure you want to snooze the {0} selected {1} for {2} ?","txtActionSnoozeAllQuestion":"Are you sure you want to snooze all {0} for {1} ?","txtActionDismissAlarms":"Dismiss Alarms","txtActionDismissAlarmsQuestion":"Are you sure you want to dismiss the {0} selected {1}?","txtEvent":"event","txtEvents":"events","txtActionDeleteEvents":"Delete Events","txtActionDeleteEventsQuestion":"Only events that you have permission to delete will be deleted. <P> Are you sure you want to delete the {0} selected {1}?","txtConfirmation":"confirmation","txtConfirmations":"confirmations","txtActionAcceptConfirmations":"Accept Confirmations","txtActionAcceptConfirmQuestion":"Are you sure you want to accept the {0} selected {1}? This action can only be performed on New or Changed confirmations. All others will be ignored.","txtDeclineConfirmations":"Decline Confirmations","txtActionDeclineConfrimQuestion":"Are you sure you want to decline the {0} selected {1}? This action can only be performed on New or Changed confirmations. All others will be ignored.","txtActionRemoveConfirmations":"Delete Confirmations","txtActionRemoveConfirmationsQuestion":"Are you sure you want to delete the {0} selected {1}? This action can only be performed on Leader, Declined or Deleted confirmations. All others will be ignored.","txtLiteratureRequest":"literature request","txtLiteratureRequests":"literature requests","txtActionDeleteLiteratureRequests":"Delete Literature Requests","txtActionDeleteLiteratureRequestsQuestion":"Only literature request that you have permission to delete will be deleted. <P> Are you sure you want to delete the {0} selected {1}?","_localized":{}}
,
'Sage/MainView/EntityMgr/nls/_BaseEntityDetailContent':{"FilterTabTitle":"Filters","MetricTabTitle":"Metrics","PropertyTabTitle":"Fields","CalcFieldTabTitle":"Calculated Fields","EntityTabTitle":"Entities","RelationTabTitle":"Relationships","dialogTitleAddField":"Add Field to ${0} Entity","dialogTitleAddFilter":"Add Filter to ${0} Entity","dialogTitleAddMetric":"Add Metric to ${0} Entity","dialogTitleAddRelationship":"Add Relationship to ${0} Entity","editDialogTitle":"Edit ${0} in ${1} Entity","FilterDialogTitle":"Filter","MetricDialogTitle":"Metric","PropertyDialogTitle":"Field","RelationDialogTitle":"Relationship","FilterGridColumnFilter":"Filter Name","MetricGridColumnMetric":"Metric Name","FilterGridColumnDisplay":"Display Name","FilterGridColumnProperty":"Field","FilterGridColumnType":"Metric or Filter","FilterGridColumnIsMetric":"In Dashboard","FilterGridColumnLastUpdated":"Last Modified","FilterGridColumnDetails":"Type","FilterGridDetailsDistinctFilter":"Distinct","FilterGridDetailsDateDiffMetricFilter":"Date Difference Metric","FilterGridDetailsRangeFilter":"Range","FilterGridDetailsMetricFilter":"Metric","FilterGridDetailsUserLookupFilter":"User Lookup","FilterGridDetailsLookupFilter":"Lookup","FilterGridDetailsCustom":"Custom","GridHelp":"Help","FilterGridAdd":"Add Filter","FilterGridRemove":"Remove Filter","FilterGridEdit":"Edit Filter","MetricGridAdd":"Add Metric","MetricGridRemove":"Remove Metric","MetricGridEdit":"Edit Metric","PropertyGridAdd":"Add Field","PropertyGridRemove":"Remove Field","PropertyGridEdit":"Edit Field","CalculatedGridAdd":"Add Calculated Field","CalculatedGridRemove":"Remove Calculated Field","CalculatedGridEdit":"Edit Calculated Field","lblFilterName":"Filter Name","lblDisplayName":"Display Name","lblFilterDp":"Fields","lblTypeDp":"Type","lblCharacter":"Characters","lblTypeSpecificContentBox":"Type Specific Content Box","lblSaveButton":"Save","lblCancelButton":"Cancel","lblOkButton":"OK","lblWarning":"Please select an item.","confirmDeleteFmtTxt":"Are you sure you want to delete these ${0} items?","filtersFor":"Filters for","metricsFor":"Metrics for","propertyFor":"Fields for","calculatedFor":"Calculated Fields for","defaultRangeRowValue":"Enter a Value","customSql":"Custom SQL","displayName":"Display Name","lower":"Lower","rangeId":"Range Id","rangeName":"Range Name","upper":"Upper","SUM":"Total (sum)","Contains":"Contains","StartsWith":"Starts With","EndsWith":"Ends With","LessThan":"Less Than","GreaterThan":"Greater Than","LessThanEqual":"Less Than Or Equal","GreaterThanEqual":"Greater Than Or Equal","Equal":"Equals","NotEqual":"Does Not Equal","COUNT":"Count","AVG":"Average","MIN":"Minimum Value","MAX":"Maximum Value","totalRecordCountLabel":"Total Records: ${0}","propertyName":"Name","Description":"Description","propertyType":"Type","included":"Included","calculatedFields":"Calculated","generate":"Generate","key":"Key","relationFor":"Relationship For","childEntity":"Child","childProperty":"Child's Field","parentEntity":"Parent","parentProperty":"Parent's Field","editable":"Editable","cardinality":"Cardinality","relationship":"Relationship","parentImport":"Parent's Import","parentMatch":"Parent's Match","parentAudit":"Parent's Audit","parentIncluded":"Parent's Included","childImport":"Child's Import","childMatch":"Child's Match","childAudit":"Child's Audit","childIncluded":"Child is Included","text":"text","memo":"memo","unicodeText":"unicode text","unicodeMemo":"unicode memo","integer":"integer","double":"double","single":"single","decimal":"decimal","short":"short","standardId":"standard id","trueFalse":"true/false","yesNo":"yes/no","boolean":"boolean","dateTime":"date/time","email":"email","phone":"phone","pickList":"pick list","owner":"owner","lookup":"lookup","dependencyLookup":"dependency lookup","char":"char","enum_":"enum","guid":"guid","byte":"byte","binary":"binary","url":"url","string":"string","number":"number","notUniqueFor":"is not unique for","lblPluralName":"Display Plural Name","lblTitle":"Title","IsExtension":"Is Extension","AdvOptions":"Advanced Options","lblImport":"Import","lblMatch":"Match","lblBulkUpdate":"Bulk Update","lblAudited":"Audited","lblPut":"Put","lblPost":"Post","lblDelete":"Delete","lblHistory":"Track History To","metricNotEditable":"This metric is not editable.","_localized":{}}
,
'Sage/MainView/EntityMgr/AddEditEntityDetail/nls/AddEditDialog':{"dialogTitleAddField":"Add Field to ${0} Entity","dialogTitleAddFilter":"Add Filter to ${0} Entity","dialogTitleAddMetric":"Add Metric to ${0} Entity","dialogTitleAddRelationship":"Add Relationship to ${0} Entity","editDialogTitle":"Edit ${0} in ${1} Entity","lblFilter":"Filter","lblMetric":"Metric","lblFilters":"Filters","lblMetrics":"Metrics","lblDistinct":"Distinct","lblRange":"Range","lblUserLookup":"User Lookup","lblAdd":"Add","lblEdit":"Edit","lblRemove":"Remove","lblHelp":"Help","lblFilterName":"Filter Name","lblMetricName":"Metric Name","lblDisplayName":"Display Name","lblName":"Name","lblDisplay":"Display","lblCalculated":"Calculated","lblCalculation":"Calculation","lblDescription":"Description","lblFieldsName":"Fields Name","lblCalculatedFieldsName":"Calculated Fields Name","lblFilterDp":"Fields","lblTypeDp":"Type","lblCharacter":"Characters","lblFrom":"From","lblTo":"To","lblOperators":"Operators","lblAggregation":"Aggregations","lblTypeSpecificContentBox":"Type Specific Content Box","lblSaveButton":"OK","lblCancelButton":"Cancel","DateDiffCheckerValue":"Date Difference Metric","InvalidFilterName":"Invalid filter name","InvalidRangeName":"Invalid range name","RequiredFilterName":"Filter name is required","RequiredRangeName":"Range name is required","FieldMustBeANumber":"Character field must be integer","SelectAnItem":"Please select an item","ItemRequired":"Item required","ItemInvalid":"Item invalid","LowerMustBeLessThanUpper":"Lower value must be less than upper value.","InvalidSpecialDateValue":"Invalid special date placeholder value.","defaultRangeRowValue":"Enter a value","totalRecordCountLabel":"Total Records: ${0}","lblNew":"New","lblExisting":"Existing","lblExistingCalc":"Existing Calculated Field","validNameMsg":"A valid entry starts with a capital letter and <br> can contain alphanumeric values and underscores.","propertyName":"Name","displayName":"Display","dataTypeId":"Type","dataTypeData":"Type Attributes","length":"Length","scale":"Scale","precision":"Precision","isIncluded":"Included","isReadOnly":"Read Only","displayCategory":"Display Category","sdata":"Sdata","bulkAction":"Bulk Action","canBulkUpdate":"Can Bulk Update","canImport":"Import","canMatch":"Match","generate":"Generate","audited":"Audited","notUniqueFor":"is not unique for","notUnique":"is not unique","nlsCode":"NLS Code","nlsName":"NLS Name","showTranslations":"Show translations","hideTranslations":"Hide translations","standardIds":"Standard Ids","others":"Others","SelectField":"Please select a field !","SelectOneField":"Please select only one field !","parent":"Parent Entity and Join Field","child":"Child Entity and Join Field","cardinality":"Relationship","cascade":"Cascade","includeParent":"Include parent relationship property in the child entity","includeChild":"Include child relationship property in the parent entity","existingRelaton":"This relationship already exists !","_localized":{}}
,
'Sage/UI/Controls/nls/PropertyStore':{"text":"Text","memo":"Memo","unicodeText":"Unicode Text","unicodeMemo":"Unicode Memo","integer":"Integer","double":"Double","single":"Single","decimal":"Decimal","short":"Short","standardId":"Standard Id","trueFalse":"True/False","yesNo":"Yes/No","boolean":"Boolean","dateTime":"Date/Time","email":"Email","phone":"Phone","pickList":"Pick List","owner":"Owner","lookup":"Lookup","dependencyLookup":"Dependency Lookup","char":"Char","enum_":"Enum","guid":"Guid","byte":"Byte","binary":"Binary","url":"Url","string":"String","number":"Number","calc":"Calculated Field","calcSF":"Calculated String","calcNF":"Calculated Number","_localized":{}}
,
'Sage/MainView/EntityMgr/EntityWizard/nls/_EntityWizardDialog':{"lblNewEntityWizard":"New Entity Wizard","lblCreateEntity":"Create Entity","lblCreateEntityFromTable":"Create a new entity from a table","lblEntityName":"Name","lblDisplayName":"Display","lblPackage":"Package","lblEntityUsed":"Entity Name is already used !","lblNext":"Next","lblCancel":"Cancel","lblBack":"Back","lblEnterProperties":"Enter Fields","lblAddNewProperty":"Click the add(+) button to add new fields to the entity","lblPropertyName":"Field Name","lblDataType":"Data Type","lblLength":"Length","lblSure":"Are you sure ?","lblThisStepCreateEntity":"Completing this step will create the entities and necessary schema","lblEntity":"Entity","lblProperties":"Fields","lblStatus":"Status","lblSuccess":"Success","lblSuccessMsg":"Success, Entity created Successfully.","lblError":"Error","lblFailed":"Failed","lblErrorMsg":"Error, Entity creation failed !","lblFinish":"Finish","lblInvalidEntry":"A valid entry starts with a capital letter and can contain alphanumeric values","lblRequired":"Required","lblErrorRelation":"Error while creating relationship with","lblRelationship":"Primary Relationship","lblSelectEntity":"Choose whether this entity has a primary relationship to another entity","lblExistingEntity":"Relate to an existing Entity","lblRelatedEntity":"Related Entity","lblRelationType":"Relation Type","addFieldDialogTitle":"Add Field","editFieldDialogTitle":"Edit Field","noDeleteSysProps":"Cannot delete the system properties","noEditSysProps":"Cannot edit the system properties","NoRecordsSelected":"There are no records selected.","lblNullable":"Is Nullable","ExtensionEntity":"1:1 - Extension Entity","ChildEntity":"1:M - Child Entity","CreateUser":"Create User","CreateDate":"Create Date","ModifyUser":"Modify User","ModifyDate":"Modify Date","_localized":{}}
,
'Sage/UI/Forms/nls/FormFromSData':{"addText":"Add","deleteText":"Delete","saveText":"Save","cancelText":"Cancel","editText":"Edit","helpText":"Help","yesText":"Yes","noText":"No","okText":"OK","allText":"ALL","newPickList":"New Pick List","items":"Pick List Items","number":"Order","enterValue":"Enter Value","lblMore":"More","picklistAlreadyExists":"Picklist '${0}' already exists.","messageOnSave":"Pick list, ${0}, has been saved. Please continue adding or editing the field information.","permissionsToView":"You do not have permissions to view.","required":"Required entry","allowMultiples":"Allow multiple selections","valueMustExist":"Text must match a list item","alphaSorted":"Sorted alphabetically","noneEditable":"Users cannot edit items","LanguageCodeFilterPlaceHolder":"Filter by Language Code","PickListItemCodeUniqueException":"Picklist item codes must be unique","PickListItemCodeRequiredeException":"Picklist item codes are required","_localized":{}}
,
'Sage/UI/Controls/nls/FieldAttributeControlFactory':{"IsEncrypted":"Is Encrypted","Length":"Length","Precision":"Precision","Scale":"Scale","LookupEntityName":"Lookup Entity Name","LookupGroup":"Lookup Group","IsPercentage":"Is Percentage","Items":"Items","MultiSelect":"MultiSelect","OverriddenName":"Overridden Name","Storage":"Storage","EnableHyperLinking":"Enable Hyper-Linking","LookupPreFilters":"Lookup PreFilters","EqualTo":"Equal To","NotEqualTo":"Not Equal To","GreaterThanOrEqual":"Greater Than or Equal","GreaterThan":"Greater Than","LessThanOrEqual":"Less Than or Equal","LessThan":"Less Than","CondOperator":"Condition Operator","FilterValue":"Filter Value","PropertyName":"Property Name","LookupProperties":"Lookup Properties","ExcludeFromFilters":"Exclude From Filters","HideCondition":"Hide Condition","IsSortable":"Is Sortable","PropertyFormat":"Property Format","None":"None","Phone":"Phone","User":"User","PickList":"Pick List","DateTime":"Date Time","PropertyFormatString":"Property Format String","PropertyHeader":"Property Header","PropertyType":"Property Type","UseAsResult":"Use As Result","ReturnPrimaryKey":"Return Primary Key","AllowMultiples":"Allow Multiples","AlphaSort":"Alpha Sort","MustExistInList":"Must Exist In List","NoneEditable":"None Editable","PickListFilter":"Pick List Filter","ValueStoredAsText":"Value Stored As Text","Value":"Value","Display":"Display","Code":"Code","Name":"Name","DisplayName":"Display Name","Template":"Calculation","Description":"Description","SortOrder":"Sort Order","lblNoFieldsInTemplate":"Please add an entity property to the template before applying a sort order.","AddField":"Add Field","InUse":"In Use","NotInUse":"Not In Use","CalculatedNumberInputError":"<p>Inputs are limited to Field Names selected from the drop down,<br/> and to the following characters:<br/>&nbsp;&nbsp;&nbsp;&nbsp;'+','-','*','/','(', or ')'.<br/>&nbsp;&nbsp;&nbsp;&nbsp;These match up with the button values above the text area.</p>","newPickList":"New Pick List","add":"add","substract":"subtract","multiply":"multiply","divide":"divide","openParens":"open parenthesis","closeParens":"close parenthesis","_localized":{}}
});