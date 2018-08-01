define('Sage/nls/Dialog_zh-tw',{
'dijit/nls/loading':{"loadingState":"載入中...","errorState":"抱歉，發生錯誤","_localized":{}}
,
'dijit/nls/common':{"buttonOk":"確定","buttonCancel":"取消","buttonSave":"儲存","itemClose":"關閉","_localized":{}}
,
'dijit/form/nls/validate':{"invalidMessage":"輸入的值無效。","missingMessage":"必須提供此值。","rangeMessage":"此值超出範圍。","_localized":{}}
,
'Sage/UI/nls/Dialogs':{"yesText":"是","noText":"否","okText":"確定","cancelText":"取消","_localized":{}}
,
'Sage/Utility/nls/ErrorHandler':{"EmailContentL1":"Administrator","EmailContentL2":"${0} encountered an error at ${1}","EmailContentL3":"Please click the link below to view the Event Viewer error log for this error","HttpError":"There was an unknown error in response to a HTTP request.","_localized":{}}
,
'Sage/Utility/nls/Utility':{"dangerousValueWarn":"已偵測到有潛在危險的表單值。請避免無效的字元組合。範例:「&lt;script&gt;&lt;/script&gt;」同時請避免檔案名稱中的無效字元: \\ / : * ? \" &lt; &gt; | ","_localized":{}}
,
'Sage/Utility/nls/Email':{"RecipientInfoError":"嘗試讀取收件者資訊時發生未預期的錯誤: ${0}","MailToProtocolError":"使用 mailto: 通訊協定 (href.length=${0}) 嘗試產生電子郵件訊息時發生錯誤。必須減少電子郵件收件者人數。瀏覽器錯誤: ${1}。","InvalidContextError":"無法處理電子郵件要求。僅支援聯絡人或銷售線索執行這項操作。","InvalidArgumentError":"無法處理電子郵件要求。無效的引數。","FilteredOutMsg":"已篩選掉: 非請求: ${0}，無效: ${1}，重複: ${2}","AllInvalidEmailError":"集合未包含具有有效和/或可請求的電子郵件地址的某個實體。","EmailFieldQueried":"查詢的電子郵件欄位是: ${0}。","EntityInfoError":"嘗試擷取實體資訊失敗。","CapabilityModeError":"只能在清單檢視中將電子郵件寫入選取的群組。","CapabilityEntityError":"只有聯絡人或銷售線索可以將電子郵件寫入選取的群組。","NoRowsSelectedError":"未選取任何列。","_localized":{}}
,
'Sage/Groups/nls/GroupManager':{"ConfirmDeleteMessage":"您確定要刪除目前的群組?","ConfirmDeleteFmtMessage":"您確定要刪除這個群組: ${0}","InvalidSortStringMessage":"錯誤: 無效的排序字串 - ","InvalidConditionStringMessage":"錯誤: 無效的條件字串 - ","InvalidLayoutConditionStringMessage":"錯誤: 無效的配置字串 - ","noneSelectedTitle":"未選取記錄","noneSelectedPromptFmt":"未選取記錄。將會新增整個群組的 ${0} 筆記錄。要繼續嗎?","noneSelectedRemovePromptFmt":"未選取記錄。將會移除整個群組的 ${0} 筆記錄。","noRecordsInGroup":"這個群組沒有任何可選取的記錄。","newGroupTitle":"將記錄新增至新群組","newGroupNamePrompt":"${0} 選取的記錄會新增至這個新群組。<br><br>群組名稱：<br>${1}","newGroupRePrompt":"&nbsp;&nbsp;<i>請輸入群組名稱。</i>","invalidCharMsg":"名稱不可以包含: / \\ : * ? \" <> | 或 '","groupNameText":"群組名稱:","saveLookupDlgTitle":"將查閱結果儲存為新群組","yesCaption":"是","noCaption":"否","cancelCaption":"取消","okCaption":"確定","LOCALSTORE_NAMESPACE":"SageGroups","exportToExcel":"這個方法已經過時，請參閱 Sage.TaskPane.CommonTasksTasklet.exportToExcel。","createAdHocGroupJob_Description":"群組: ${0}","createAdHocGroupJob_Title":"建立群組","createAdHocGroupJobError":"抱歉，建立群組時發生錯誤: ${0}","createAdHocGroupJobProcessingJobMsg":"您可以繼續等待完成，或者可以關閉此訊息。您會在群組完成時收到通知。","_localized":{}}
,
'Sage/Utility/nls/Jobs':{"errorMessage":"抱歉，工作「${0}」的執行期間發生錯誤: ${1} ${2}。","jobCompletedSuccessfully":"工作已經成功完成。","unexpectedErrorMessage":"抱歉，工作「${0}」的執行期間發生未預期錯誤。","repeatIndefinitely":"無限次重複","cancelButtonCaption":"取消","defaultProgressDialogTitle":"執行工作","closeButtonCaption":"關閉","dataExpiredRefreshPage":"此工作資訊已到期，請重新整理頁面。","generalCheckJobService":"無法要求此工作資訊，請檢查工作服務。","JobServerviceOff":"目前無法取得工作服務，請開啟或重新開始服務。","_localized":{}}
,
'Sage/UI/Controls/nls/_DialogHelpIconMixin':{"helpTooltip":"說明","_localized":{}}
,
'dgrid/extensions/nls/columnHider':{"popupTriggerLabel":"Show or hide columns","popupLabel":"Show or hide columns","_localized":{}}
,
'dgrid/extensions/nls/pagination':{"status":"${start} - ${end} of ${total} results","gotoFirst":"Go to first page","gotoNext":"Go to next page","gotoPrev":"Go to previous page","gotoLast":"Go to last page","gotoPage":"Go to page","jumpPage":"Jump to page","rowsPerPage":"Number of rows per page","_localized":{}}
,
'Sage/UI/Controls/nls/Grid':{"loadingMessage":"正在載入資料...","noDataMessage":"沒有符合所選條件的記錄。","showMore":"顯示較多","showLess":"顯示較少","_localized":{}}
,
'dijit/form/nls/ComboBox':{"previousMessage":"前一個選擇項","nextMessage":"其他選擇項","_localized":{}}
,
'Sage/UI/Controls/nls/DateTimePicker':{"okText":"確定","cancelText":"取消","convertDescription":"比較其他時區。","convertText":"比較","calculatorText":"時區計算器","timeZoneSourceText":"目前時區","timeZoneDestText":"比較時區","buttonToolTip":"行事曆","timeStartText":"時間","timeZoneCalculatorText":"時區計算器","_localized":{}}
,
'Sage/Utility/nls/Sql':{"InvalidApostropheCount":"SQL IN 子句中的縮寫符號數目無效。","_localized":{}}
,
'dojox/grid/enhanced/nls/EnhancedGrid':{"singleSort":"單一排序","nestedSort":"巢狀排序","ascending":"按一下以遞增排序","descending":"按一下以遞減排序","sortingState":"${0} - ${1}","unsorted":"本欄不進行排序","indirectSelectionRadio":"第 ${0} 行，單一選項，圓鈕框","indirectSelectionCheckBox":"第 ${0} 行，多重選項，勾選框","selectAll":"全選","_localized":{}}
,
'dojox/form/nls/Uploader':{"label":"選取檔案...","_localized":{}}
,
'Sage/Utility/nls/Activity':{"ToDo":"待辦事項","PhoneCall":"電話","Meeting":"會議","Personal":"個人活動","Literature":"文宣","Fax":"傳真","Letter":"信件","Note":"備註","Email":"電子郵件","Document":"文件","DatabaseChange":"資料庫變更","Event":"事件","ScheduledEvent":"已排定的事件","Contact":"聯絡人","Lead":"銷售線索","New":"新增","hr":"hr","h":"h","m":"m","Change":"變更","Deleted":"已刪除","Confirm":"確認","Decline":"拒絕","Unknown":"不明","Leader":"負責人","Complete":"完成","confirmTypeChanged":"已變更","confirmTypeConfirmed":"已確認","confirmTypeDeleted":"已刪除","timelessText":"無指定時間","_localized":{}}
,
'Sage/UI/Controls/nls/PickList':{"okText":"確定","missingPickListText":"找不到 PickList","_localized":{}}
,
'Sage/UI/nls/SearchConditionWidget':{"trueText":"真","falseText":"假","networkText":"網路","remoteText":"遠端","webText":"網頁","webViewerText":"網頁檢視者","concurrentText":"並行","retiredText":"已退出","templateText":"範本","addonText":"附加元件","adminText":"管理員","userText":"使用者","teamText":"團隊","departmentText":"部門","systemText":"系統","_localized":{}}
,
'Sage/UI/nls/ConditionManager':{"addimgalttext":"新增條件","hideimgalttext":"移除條件","addrowlabel":"查閱方式:","hiderowlabel":"和:","srchBtnCaption":"搜尋","errorOperatorRequiresValue":"運算子需要一個值","startingWith":"開頭為","endsWith":"結束於","contains":"包含","equalTo":"等於","notEqualTo":"不等於","equalOrLessThan":"等於或小於","equalOrGreaterThan":"等於或大於","lessThan":"小於","greaterThan":"大於","_localized":{}}
,
'Sage/UI/nls/SDataLookup':{"closeText":"關閉","cancelText":"取消","loadingText":"載入中...","noDataText":"未傳回記錄","_localized":{}}
,
'Sage/UI/nls/EditableGrid':{"unsavedDataText":"*未儲存的資料","addText":"新增","deleteText":"刪除","saveText":"儲存","cancelText":"取消","noSelectionsText":"未選取任何記錄。","confirmDeleteFmtTxt":"您確定要刪除這 ${0} 個項目?","yesText":"是","noText":"否","createItemsInvalidArrayText":"Sage.UI.EditableGrid.createItems() 中的項目參數應該為陣列。","recordCountFormatString":"記錄 ${0} - ${2}，共 ${1} 筆","noDataMessage":"沒有符合所選條件的記錄。","dirtyDataMessage":"您的資料尚未儲存。如果繼續，您將會遺失所做的變更。","okText":"確定","_localized":{}}
,
'Sage/Utility/nls/File':{"unableToUploadText":"必須安裝 CRM Office Integration 模組才能使用這個功能。","unknownSizeText":"不明","largeFileWarningText":"警告:此要求超過管理員設定的大小限制，因此無法上傳。","largeFileWarningTitle":"警告","_localized":{}}
,
'Sage/Utility/File/nls/DescriptionsForm':{"titleFmt":"新增 ${0} 的附件","titleLibraryDoc":"新增資訊庫文件","fileNameText":"檔案名稱和大小: ","descText":"描述:","okText":"確定","cancelText":"取消","_localized":{}}
,
'Sage/Utility/File/nls/Attachment':{"uploadingAttachments":"上傳附件","uploadCompleted":"已完成","uploadingPleaseWait":"上傳中，請稍候...","uploadFailed":"上傳失敗。","_localized":{}}
,
'Sage/Utility/File/nls/AttachmentPropertiesEditForm':{"fileText":"檔案","descriptionText":"描述","sizeText":"大小","attachDateText":"附加日期","attachedByText":"附加者","uploadFileText":"選取其他檔案...","editText":"編輯附件","okText":"確定","cancelText":"取消","browseText":"瀏覽","urlText":"URL","requestFailedMsg":"無法完成要求的操作。請稍後再試一次。","_localized":{}}
,
'Sage/Utility/File/nls/FallbackFilePicker':{"addLibraryFileText":"新增資訊庫檔案","attachFileText":"附加檔案","descriptionText":"描述","uploadFileText":"附件","okText":"確定","cancelText":"取消","invalidContext":"無法將檔案上傳至銷售資訊庫以外的位置。","fileTooLargeError":"嘗試上傳檔案已中止，因為檔案太大。","pleaseSelectFile":"請先選取一個檔案。","slxErrorIdInfo":"Saleslogix 錯誤 ID: ","_localized":{}}
,
'Sage/Utility/File/nls/AddURLAttachment':{"descriptionText":"描述","urlText":"URL","titleText":"新增 URL 附件","okText":"確定","cancelText":"取消","requestFailedMsg":"無法完成要求的操作。請稍後再試一次。","urlBlankMsg":"URL 或描述內容不可以空白。","_localized":{}}
,
'Sage/Utility/File/nls/GoogleDocPicker':{"googleDocumentsTitle":"Google 文件","couldNotOpenWindowMsg":"無法開啟驗證視窗 - 請檢查您的快顯封鎖程式設定。","_localized":{}}
,
'Sage/UI/nls/AttachmentList':{"attachmentText":"附件","userText":"使用者","modDateText":"修改日期/時間","dateRangeText":"修改日期範圍","sizeText":"大小","extensionText":"副檔名","addFileText":"新增檔案","addUrlText":"新增 URL","editText":"編輯","helpText":"說明","addGoogleText":"新增 Google 文件","deleteText":"刪除","request":"要求檔案","delivered":"已傳遞","requested":"已要求","available":"可用","_localized":{}}
,
'Sage/UI/nls/GridView':{"unsavedDataText":"*未儲存的資料","addText":"新增","deleteText":"刪除","saveText":"儲存","cancelText":"取消","editText":"編輯","helpText":"說明","noSelectionsText":"未選取任何記錄。","confirmDeleteFmtTxt":"您確定要刪除這 ${0} 個項目?","yesText":"是","noText":"否","createItemsInvalidArrayText":"Sage.UI.GridView.createItems() 中的項目參數應該為陣列。","noDataMessage":"沒有符合所選條件的記錄。","dirtyDataMessage":"您的資料尚未儲存。如果繼續，您將會遺失所做的變更。","okText":"確定","totalRecordCountLabel":"記錄總數: ${0}","toggleRows":"顯示/隱藏預覽","_localized":{}}
,
'Sage/UI/nls/SLXPreviewGrid':{"applyText":"套用","resetText":"重設","filterText":"篩選","_localized":{}}
,
'Sage/UI/Controls/nls/EntityInfoToolTip':{"errorText":"找不到資訊。","loadingText":"載入中...","noInfoText":"未顯示資訊。","mainText":"主要:","faxText":"傳真:","tollFreeText":"免付費:","urlText":"網址:","workText":"公司電話:","mobileText":"行動電話:","emailText":"電子郵件:","contactNameText":"名稱:","phoneText":"電話:","accountText":"客戶:","_localized":{}}
,
'Sage/UI/Controls/nls/Lookup':{"buttonToolTip":"尋找","closeButtonToolTip":"移除","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/ActivityEditor':{"labelWidth":"100","tabNameGeneralText":"一般","tabNameAvailabilityText":"可用性","tabNameAssociationsText":"關聯","tabNameRecurringText":"週期性","tabNameAttachmentsText":"附件","tabNameNotesText":"備註","scheduleText":"排程","scheduleTodo":"Schedule To-Do","schedulePhonecall":"Schedule Phone Call","scheduleMeeting":"Schedule Meeting","startTimeText":"開始時間","timeLessText":"無指定時間","alarmText":"鬧鐘","durationText":"持續時間","rolloverText":"自動展期至次日","contactText":"聯絡人","accountText":"客戶","leadText":"銷售線索","opportunityText":"商機","ticketText":"記錄單","companyText":"公司","regardingText":"關於","notesText":"備註","priorityText":"優先順序","leaderText":"負責人","categoryText":"類別","locationText":"位置","dialogHeaderFormatText":"${actionText} ${activityType} - ${description}","scheduledByFormatText":"${user} 排程於 ${date}","completeScheduledByFormatText":"${user} 排程於 ${date} 原先是 ${startDate}","newConfirmationHeaderFormatText":"確認 ${user} 排程的 ${activityType}","otherConfimationHeaderFormatText":"${user} 的 ${activityType} ${actionText}","acceptedText":"已接受","declinedText":"已拒絕","scheduledText":"已安排","updatedText":"已更新","deletedText":"已刪除","cancelText":"取消","okText":"確定","completeTodo":"Complete To-Do","completePhonecall":"Complete Phone Call","completeMeeting":"Complete Meeting","completeText":"完成","completeBtnText":"完成...","completedText":"已完成","deleteText":"刪除","lookupActText":"查閱客戶","lookupContactText":"查閱聯絡人","lookupOpportunityText":"查閱商機","lookupTicketText":"查閱記錄單","lookupLeadText":"查閱銷售線索","lookupLeaderText":"查閱負責人","lookupResourcesText":"新增成員和資源","addResourceText":"新增選取項目","mainPhoneText":"主要電話","typeText":"類型","subTypeText":"子類型","nameText":"名稱","cityText":"城市","stateText":"省/州","workphoneText":"公司電話","emailText":"電子郵件","acctMgrText":"客戶經理","descriptionText":"描述","stageText":"階段","statusText":"狀態","ownerText":"擁有者","ticketNumberText":"記錄單編號","phoneText":"電話","urgencyText":"急迫性","areaText":"區域","recurringText":"週期性","resultText":"結果","followupText":"後續","noneText":"無","carryOverAttachmentsText":"沿用附件","carryOverNotesText":"沿用備註","asScheduledText":"如期","nowText":"現在","responseText":"回應","acceptText":"接受","declineText":"拒絕","deleteConfText":"刪除確認","closeText":"關閉","leadFullNameText":"名稱","postalText":"郵遞區號","failedLoadingDataMsg":"載入資料時發生錯誤。","removeText":"移除","noText":"否","yesText":"是","areYouSureText":"您即將永久刪除此記錄。","couldNotSaveErrorText":"很抱歉，由於發生錯誤，因此無法儲存活動。","couldNotDeleteErrorText":"很抱歉，由於發生錯誤，因此無法刪除活動。","couldNotCompleteErrorText":"很抱歉，由於發生錯誤，因此無法完成活動。","scheduleFollowUpErrorText":"無法排程後續處理，因為無法判斷 HistoryId。","tabNameParticipants":"參與者","updateToDo":"To-Do","updatePhoneCall":"Phone Call","updateMeeting":"Meeting","_localized":{}}
,
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/SpeedSearchLookup':{"dialogTitle":"查閱參與者","okText":"新增選取項目","cancelText":"關閉","noDataText":"沒有符合所選條件的記錄","srchBtnCaption":"搜尋","colName":"名稱","colType":"類型","colAccount":"公司/客戶","colTitle":"標題","colEmail":"電子郵件","colWorkPhone":"公司電話","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/ActivityEditorAttendeesTab':{"header_Name":"名稱","header_AccountName":"客戶/公司","header_Type":"類型","header_Primary":"主要","header_RoleName":"角色","header_Phone":"電話","header_Email":"電子郵件","header_TimeZone":"時區","header_Notes":"備註","tooltip_speedSearch":"新增參與者","tooltip_AddContact":"新增聯絡人","tooltip_AddLead":"新增銷售線索","tooltip_Delete":"刪除","header_Attendee":"為出席者","_localized":{}}
,
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/ContactLookupConfig':{"contactText":"聯絡人","accountText":"客戶","lookupContactText":"查閱聯絡人","nameText":"名稱","cityText":"城市","stateText":"省/州","workphoneText":"公司電話","emailText":"電子郵件","dialogButtonText":"新增選取項目","cancelText":"關閉","colFirstName":"名字","colLastName":"姓氏","colTitle":"標題","colAccount":"客戶","colWorkPhone":"公司電話","colEmail":"電子郵件","dialogTitleText":"查閱聯絡人","_localized":{}}
,
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/LeadLookupConfig':{"contactText":"聯絡人","accountText":"客戶","lookupContactText":"查閱聯絡人","nameText":"名稱","cityText":"城市","stateText":"省/州","workphoneText":"公司電話","emailText":"電子郵件","dialogButtonText":"新增選取項目","cancelText":"關閉","colFirstName":"名字","colLastName":"姓氏","colTitle":"標題","colCompany":"公司","colWorkPhone":"公司電話","colEmail":"電子郵件","dialogTitleText":"查閱銷售線索","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/RecurringEditor':{"activityOccurrsText":"這個活動發生...","onceText":"一次","dailyText":"每天","weeklyText":"每週","monthlyText":"每月","yearlyText":"每年","occursOnceText":"這個活動只發生一次","everyText":"每","daysText":"天","daysAfterText":"完成後天數","startRecurringText":"開始週期性: ","endAfterText":"多久後結束","endOnText":"結束週期性","occurrencesText":"出現次數","weeksOnText":"週於","monText":"週一","tueText":"週二","wedText":"週三","thurText":"週四","friText":"週五","satText":"週六","sunText":"週日","weeksAfterText":"完成後週數","monthsOnText":"月，天","monthsOnTheText":"月於","monthsAfterText":"完成後月數","firstText":"第一","secondText":"第二","thirdText":"第三","fourthText":"第四","lastText":"最後","yearsOnText":"年於","yearsAfterText":"完成後年數","janText":"一月","febText":"二月","marText":"三月","aprText":"四月","mayText":"五月","junText":"六月","julText":"七月","augText":"八月","sepText":"九月","octText":"十月","novText":"十一月","decText":"十二月","theText":"此","inText":"在","_localized":{}}
,
'Sage/UI/Controls/nls/DurationSelect':{"minuteText":"分鐘","minutesText":"分鐘","hourText":"小時","hoursText":"小時","dayText":"天","daysText":"天","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/EditEventEditor':{"titleScheduleText":"排程事件","titleEditText":"編輯事件","lblDayTypeText":"日類型:","lblStartDateText":"開始日期:","lblEndDateText":"結束日期:","lblUserText":"使用者:","lookupUserText":"查閱使用者","lblCategoryText":"類別:","lblLocationText":"位置:","lblDescriptionText":"描述:","btnOkayText":"確定","btnCancelText":"取消","btnHelpText":"說明","eventTypeActiveText":"作用中","eventTypeBusinessTripText":"出差","eventTypeConferenceText":"會議","eventTypeHolidayText":"假日","eventTypeOffText":"請假","eventTypeTradeShowText":"商展","eventTypeUnavailableText":"無法使用","eventTypeVacationText":"休假","errorText":"很抱歉，由於發生錯誤，因此無法建立事件。","invaildDatesText":"很抱歉，結束日期不可以早於開始日期。","nameText":"名稱","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/QuickCompleteEditor':{"lblResultText":"結果:","lblNoteText":"備註 (附加至所有項目):","btnCompleteIndividuallyText":"個別","btnAsScheduledText":"如期","btnCompleteNowText":"現在","btnCancelText":"取消","btnCloseText":"關閉","btnHelpText":"說明","resultCompletedText":"完成","titleText":"快速完成","actionMessage":"只會完成您有權限完成的活動。","completeMessage":"完成所有 {0} 個選取的活動:","processingMessage":"正在處理所有 {0} 個選取的活動，請稍候...","_localized":{}}
,
'Sage/Services/nls/ActivityActionProcessor':{"btnOkayText":"確定","btnCancelText":"取消","btnCloseText":"關閉","btnHelpText":"說明","processingText":"正在處理要求，請稍候...","failureText":"很抱歉，由於發生錯誤，因此動作不成功。","titleText":"程序","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/HistoryEditor':{"labelWidth":"100","tabNameGeneralText":"一般","tabNameAttachmentsText":"附件","scheduleText":"排程","startTimeText":"已安排","completedDateText":"已完成","timeLessText":"無指定時間","durationText":"持續時間","contactText":"聯絡人","accountText":"客戶","leadText":"銷售線索","opportunityText":"商機","ticketText":"記錄單","companyText":"公司","regardingText":"關於","resultText":"結果","notesText":"備註","noteText":"Note","priorityText":"優先順序","leaderText":"負責人","categoryText":"類別","locationText":"位置","scheduledByFormatText":"${user} 排程於 ${date}","cancelText":"取消","okText":"確定","deleteText":"刪除","lookupActText":"查閱客戶","lookupContactText":"查閱聯絡人","lookupOpportunityText":"查閱商機","lookupTicketText":"查閱記錄單","lookupLeadText":"查閱銷售線索","lookupLeaderText":"查閱負責人","lookupResourcesText":"查閱","mainPhoneText":"主要電話","typeText":"類型","subTypeText":"子類型","nameText":"名稱","cityText":"城市","stateText":"省/州","workphoneText":"公司電話","emailText":"電子郵件","acctMgrText":"客戶經理","descriptionText":"描述","stageText":"階段","statusText":"狀態","ownerText":"擁有者","ticketNumberText":"記錄單編號","phoneText":"電話","urgencyText":"急迫性","areaText":"區域","recurringText":"週期性","followupText":"後續","noneText":"無","carryOverAttachmentsText":"沿用附件","carryOverNotesText":"沿用備註","asScheduledText":"如期","insertText":"插入","insertNoteText":"Insert Note","couldNotSaveErrorText":"很抱歉，由於發生錯誤，因此無法儲存歷程記錄。","deleteMessage":"您即將永久刪除此記錄。","deleteTitle":"刪除歷程記錄","couldNotDeleteErrorText":"很抱歉，由於發生錯誤，因此無法刪除歷程記錄。","postalText":"郵遞區號","tabNameParticipants":"所有參與者","resultComplete":"Complete","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/HistoryEditorAttendeesTab':{"header_Name":"名稱","header_AccountName":"客戶/公司","header_Type":"類型","header_Primary":"主要","header_RoleName":"角色","header_Phone":"電話","header_Email":"電子郵件","header_TimeZone":"時區","header_Notes":"備註","header_Status":"狀態","header_Attendee":"為出席者","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/OccurrenceOrSeriesQueryDlg':{"titleFmt":"${type} - ${description}","actDateText":"活動日期:","contactText":"聯絡人:","accountText":"客戶:","opportunityText":"商機:","editAllText":"編輯所有出現次數","editOneText":"編輯這個出現次數","completeAllText":"完成所有出現次數","completeOneText":"完成這個出現次數","deleteAllText":"刪除所有出現次數","deleteOneText":"刪除這個出現次數","continueText":"繼續","failedToLoadMsg":"無法載入活動","_localized":{}}
,
'Sage/Services/nls/ActivityService':{"txtErrorActionMsg":"很抱歉，由於發生錯誤，因此動作不成功。","txtActivity":"活動","txtActivities":"活動","txtActionDeleteActivites":"刪除活動","txtActionDeleteActivitiesQuestion":"只會刪除您有權限刪除的活動。<P>您確定要刪除 {0} 個選取的 {1}?","txtAlarm":"鬧鐘","txtAlarms":"鬧鐘","txtActionSnoozeAlarm":"延期鬧鐘","txtActionSnoozeQuestion":"您確定要讓 {2} 的 {0} 個選取的{1} 延期?","txtActionSnoozeAllQuestion":"您確定要讓 {1} 的所有 {0} 延期?","txtActionDismissAlarms":"關閉鬧鐘","txtActionDismissAlarmsQuestion":"您確定要關閉 {0} 個選取的 {1}?","txtEvent":"事件","txtEvents":"事件","txtActionDeleteEvents":"刪除事件","txtActionDeleteEventsQuestion":"只會刪除您有權限刪除的事件。<P> 您確定要刪除 {0} 個選取的 {1}?","txtConfirmation":"確認","txtConfirmations":"確認","txtActionAcceptConfirmations":"接受確認","txtActionAcceptConfirmQuestion":"您確定要接受 {0} 個選取的 {1}? 這個動作只能在新的或已變更的確認上執行。所有其他確認將會被略過。","txtDeclineConfirmations":"拒絕確認","txtActionDeclineConfrimQuestion":"您確定要拒絕 {0} 個選取的 {1}? 這個動作只能在新的或已變更的確認上執行。所有其他確認將會被略過。","txtActionRemoveConfirmations":"刪除確認","txtActionRemoveConfirmationsQuestion":"您確定要刪除 {0} 個選取的 {1}? 這個動作只能在負責人、拒絕或刪除的確認上執行。所有其他確認將會被略過。","txtLiteratureRequest":"文宣要求","txtLiteratureRequests":"文宣要求","txtActionDeleteLiteratureRequests":"刪除文宣要求","txtActionDeleteLiteratureRequestsQuestion":"只會刪除您有權限刪除的文宣要求。<P> 您確定要刪除 {0} 個選取的 {1}?","_localized":{}}
,
'Sage/MainView/EntityMgr/nls/_BaseEntityDetailContent':{"FilterTabTitle":"篩選","MetricTabTitle":"計量","PropertyTabTitle":"欄位","CalcFieldTabTitle":"計算欄位","EntityTabTitle":"實體","RelationTabTitle":"關聯","dialogTitleAddField":"新增欄位至 ${0} 實體","dialogTitleAddFilter":"新增篩選至 ${0} 實體","dialogTitleAddMetric":"新增計量 ${0} 實體","dialogTitleAddRelationship":"新增關聯至 ${0} 實體","editDialogTitle":"在 ${1} 實體中編輯 ${0}","FilterDialogTitle":"篩選","MetricDialogTitle":"計量","PropertyDialogTitle":"欄位","RelationDialogTitle":"關聯","FilterGridColumnFilter":"篩選名稱","MetricGridColumnMetric":"計量名稱","FilterGridColumnDisplay":"顯示名稱","FilterGridColumnProperty":"欄位","FilterGridColumnType":"計量或篩選","FilterGridColumnIsMetric":"在儀表板","FilterGridColumnLastUpdated":"上次修改","FilterGridColumnDetails":"類型","FilterGridDetailsDistinctFilter":"相異","FilterGridDetailsDateDiffMetricFilter":"日期差異計量","FilterGridDetailsRangeFilter":"範圍","FilterGridDetailsMetricFilter":"計量","FilterGridDetailsUserLookupFilter":"使用者查閱","FilterGridDetailsLookupFilter":"查閱","FilterGridDetailsCustom":"自訂","GridHelp":"說明","FilterGridAdd":"新增篩選","FilterGridRemove":"移除篩選","FilterGridEdit":"編輯篩選","MetricGridAdd":"新增計量","MetricGridRemove":"移除計量","MetricGridEdit":"編輯計量","PropertyGridAdd":"新增欄位","PropertyGridRemove":"移除欄位","PropertyGridEdit":"編輯欄位","CalculatedGridAdd":"新增計算欄位","CalculatedGridRemove":"移除計算欄位","CalculatedGridEdit":"編輯計算欄位","lblFilterName":"篩選名稱","lblDisplayName":"顯示名稱","lblFilterDp":"欄位","lblTypeDp":"類型","lblCharacter":"字元","lblTypeSpecificContentBox":"輸入特定的內容方塊","lblSaveButton":"儲存","lblCancelButton":"取消","lblOkButton":"確定","lblWarning":"請選取一個項目。","confirmDeleteFmtTxt":"您確定要刪除這 ${0} 個項目?","filtersFor":"篩選用於","metricsFor":"計量用於","propertyFor":"欄位用於","calculatedFor":"計算欄位用於","defaultRangeRowValue":"輸入一個值","customSql":"自訂 SQL","displayName":"顯示名稱","lower":"下限","rangeId":"範圍 ID","rangeName":"範圍名稱","upper":"上限","SUM":"總計 (加總)","Contains":"包含","StartsWith":"開始於","EndsWith":"結束於","LessThan":"小於","GreaterThan":"大於","LessThanEqual":"小於或等於","GreaterThanEqual":"大於或等於","Equal":"等於","NotEqual":"不等於","COUNT":"計數","AVG":"平均","MIN":"最小值","MAX":"最大值","totalRecordCountLabel":"記錄總數: ${0}","propertyName":"名稱","Description":"描述","propertyType":"類型","included":"包含","calculatedFields":"已計算","generate":"產生","key":"金鑰","relationFor":"關聯用於","childEntity":"子項","childProperty":"子欄位","parentEntity":"父項","parentProperty":"父欄位","editable":"可編輯","cardinality":"基數","relationship":"關聯","parentImport":"父項匯入","parentMatch":"父項符合","parentAudit":"父項稽核","parentIncluded":"已包含父項","childImport":"子項匯入","childMatch":"子項符合","childAudit":"子項稽核","childIncluded":"已包含子項","text":"文字","memo":"備忘","unicodeText":"unicode 文字","unicodeMemo":"unicode 備忘","integer":"整數","double":"雙倍","single":"單一","decimal":"小數點","short":"簡短","standardId":"標準 ID","trueFalse":"真/假","yesNo":"是/否","boolean":"布林值","dateTime":"日期/時間","email":"電子郵件","phone":"電話","pickList":"挑選清單","owner":"擁有者","lookup":"查閱","dependencyLookup":"相依性查閱","char":"圖表","enum_":"列舉","guid":"guid","byte":"位元組","binary":"二進位","url":"URL","string":"字串","number":"數字","notUniqueFor":"不是唯一的","lblPluralName":"顯示複數名稱","lblTitle":"標題","IsExtension":"是延伸模組","AdvOptions":"進階選項","lblImport":"匯入","lblMatch":"相符","lblBulkUpdate":"大量更新","lblAudited":"已稽核","lblPut":"放置","lblPost":"張貼","lblDelete":"刪除","lblHistory":"追蹤歷程記錄至","metricNotEditable":"此計量不可編輯。","_localized":{}}
,
'Sage/MainView/EntityMgr/AddEditEntityDetail/nls/AddEditDialog':{"dialogTitleAddField":"新增欄位至 ${0} 實體","dialogTitleAddFilter":"新增篩選至 ${0} 實體","dialogTitleAddMetric":"新增計量 ${0} 實體","dialogTitleAddRelationship":"新增關聯至 ${0} 實體","editDialogTitle":"在 ${1} 實體中編輯 ${0}","lblFilter":"篩選","lblMetric":"計量","lblFilters":"篩選","lblMetrics":"計量","lblDistinct":"相異","lblRange":"範圍","lblUserLookup":"使用者查閱","lblAdd":"新增","lblEdit":"編輯","lblRemove":"移除","lblHelp":"說明","lblFilterName":"篩選名稱","lblMetricName":"計量名稱","lblDisplayName":"顯示名稱","lblName":"名稱","lblDisplay":"顯示","lblCalculated":"已計算","lblCalculation":"計算","lblDescription":"描述","lblFieldsName":"欄位名稱","lblCalculatedFieldsName":"計算欄位名稱","lblFilterDp":"欄位","lblTypeDp":"類型","lblCharacter":"字元","lblFrom":"從","lblTo":"至","lblOperators":"運算子","lblAggregation":"彙總","lblTypeSpecificContentBox":"輸入特定的內容方塊","lblSaveButton":"確定","lblCancelButton":"取消","DateDiffCheckerValue":"日期差異計量","InvalidFilterName":"無效的篩選名稱","InvalidRangeName":"無效的範圍名稱","RequiredFilterName":"必須提供篩選名稱","RequiredRangeName":"必須提供範圍名稱","FieldMustBeANumber":"字元欄位必須是整數","SelectAnItem":"請選取一個項目。","ItemRequired":"必須提供項目","ItemInvalid":"項目無效","LowerMustBeLessThanUpper":"下限值必須小於上限值。","InvalidSpecialDateValue":"Invalid special date placeholder value.","defaultRangeRowValue":"輸入一個值","totalRecordCountLabel":"記錄總數: ${0}","lblNew":"新增","lblExisting":"現有","lblExistingCalc":"現有計算欄位","validNameMsg":"有效的輸入以大寫字母開頭且<br>可包含英數值和底線。","propertyName":"名稱","displayName":"顯示","dataTypeId":"類型","dataTypeData":"類型屬性","length":"長度","scale":"縮放","precision":"精確度","isIncluded":"包含","isReadOnly":"唯讀","displayCategory":"顯示類別","sdata":"Sdata","bulkAction":"大量動作","canBulkUpdate":"可以大量更新","canImport":"匯入","canMatch":"相符","generate":"產生","audited":"已稽核","notUniqueFor":"不是唯一的","notUnique":"不是唯一的","nlsCode":"NLS 代碼","nlsName":"NLS 名稱","showTranslations":"顯示翻譯","hideTranslations":"隱藏翻譯","standardIds":"標準 ID","others":"其他","SelectField":"請選取一個欄位！","SelectOneField":"請僅選取一個欄位！","parent":"父實體和聯結欄位","child":"子實體和聯結欄位","cardinality":"關聯","cascade":"重疊顯示","includeParent":"包含子實體中的父關聯內容","includeChild":"包含父實體中的子關聯內容","existingRelaton":"這個關聯已經存在！","_localized":{}}
,
'Sage/UI/Controls/nls/PropertyStore':{"text":"文字","memo":"備忘","unicodeText":"Unicode 文字","unicodeMemo":"Unicode 備忘","integer":"整數","double":"雙倍","single":"單一","decimal":"小數點","short":"簡短","standardId":"標準 ID","trueFalse":"真/假","yesNo":"是/否","boolean":"布林值","dateTime":"日期/時間","email":"電子郵件","phone":"電話","pickList":"挑選清單","owner":"擁有者","lookup":"查閱","dependencyLookup":"相依性查閱","char":"圖表","enum_":"列舉","guid":"Guid","byte":"位元組","binary":"二進位","url":"URL","string":"字串","number":"數字","calc":"計算欄位","calcSF":"計算字串","calcNF":"計算數字","_localized":{}}
,
'Sage/MainView/EntityMgr/EntityWizard/nls/_EntityWizardDialog':{"lblNewEntityWizard":"新實體精靈","lblCreateEntity":"建立實體","lblCreateEntityFromTable":"從表格建立新實體","lblEntityName":"名稱","lblDisplayName":"顯示","lblPackage":"套件","lblEntityUsed":"實體名稱已經在使用中！","lblNext":"下一步","lblCancel":"取消","lblBack":"上一步","lblEnterProperties":"輸入欄位","lblAddNewProperty":"按一下新增(+) 按鈕，將新欄位新增至實體","lblPropertyName":"欄位名稱","lblDataType":"資料類型","lblLength":"長度","lblSure":"確定嗎？","lblThisStepCreateEntity":"完成這個步驟就會建立實體和必要的結構描述","lblEntity":"實體","lblProperties":"欄位","lblStatus":"狀態","lblSuccess":"成功","lblSuccessMsg":"成功，已成功建立實體。","lblError":"錯誤","lblFailed":"失敗","lblErrorMsg":"錯誤，實體建立失敗！","lblFinish":"完成","lblInvalidEntry":"有效的輸入以大寫字母開頭且可包含英數值","lblRequired":"必要","lblErrorRelation":"與下列項目建立關聯時發生錯誤:","lblRelationship":"主要關聯","lblSelectEntity":"選擇這個實體是否與另一個實體具有主要關聯。","lblExistingEntity":"與現有的實體相關","lblRelatedEntity":"相關的實體","lblRelationType":"關聯類型","addFieldDialogTitle":"新增欄位","editFieldDialogTitle":"編輯欄位","noDeleteSysProps":"無法刪除系統內容","noEditSysProps":"無法編輯系統內容","NoRecordsSelected":"未選取任何記錄。","lblNullable":"可為 Null","ExtensionEntity":"1:1 - Extension Entity","ChildEntity":"1:M - Child Entity","CreateUser":"建立使用者","CreateDate":"建立日期","ModifyUser":"修改使用者","ModifyDate":"修改日期","_localized":{}}
,
'Sage/UI/Forms/nls/FormFromSData':{"addText":"新增","deleteText":"刪除","saveText":"儲存","cancelText":"取消","editText":"編輯","helpText":"說明","yesText":"是","noText":"否","okText":"確定","allText":"ALL","newPickList":"新挑選清單","items":"挑選清單項目","number":"順序","enterValue":"輸入值","lblMore":"更多","picklistAlreadyExists":"Picklist「${0}」已經存在。","messageOnSave":"已經儲存挑選清單 ${0}。請繼續新增或編輯欄位資訊。","permissionsToView":"您沒有檢視權限。","required":"必要項目","allowMultiples":"允許多個選取項目","valueMustExist":"文字必須與清單項目相符","alphaSorted":"依照英文字母順序排序","noneEditable":"使用者無法編輯項目","LanguageCodeFilterPlaceHolder":"Filter by Language Code","PickListItemCodeUniqueException":"Picklist item codes must be unique","PickListItemCodeRequiredeException":"Picklist item codes are required","_localized":{}}
,
'Sage/UI/Controls/nls/FieldAttributeControlFactory':{"IsEncrypted":"已加密","Length":"長度","Precision":"精確度","Scale":"縮放","LookupEntityName":"查閱實體名稱","LookupGroup":"查閱群組","IsPercentage":"為百分比","Items":"項目","MultiSelect":"複選","OverriddenName":"已覆寫名稱","Storage":"儲存空間","EnableHyperLinking":"啟用超連結","LookupPreFilters":"查閱預先篩選","EqualTo":"等於","NotEqualTo":"不等於","GreaterThanOrEqual":"大於或等於","GreaterThan":"大於","LessThanOrEqual":"小於或等於","LessThan":"小於","CondOperator":"條件運算子","FilterValue":"篩選值","PropertyName":"內容名稱","LookupProperties":"查閱內容","ExcludeFromFilters":"從篩選中排除","HideCondition":"隱藏條件","IsSortable":"可排序","PropertyFormat":"內容格式","None":"無","Phone":"電話","User":"使用者","PickList":"挑選清單","DateTime":"日期時間","PropertyFormatString":"內容格式字串","PropertyHeader":"內容標頭","PropertyType":"內容類型","UseAsResult":"做為結果","ReturnPrimaryKey":"傳回主索引鍵","AllowMultiples":"允許多個","AlphaSort":"依字母排序","MustExistInList":"必須在清單中","NoneEditable":"不可編輯","PickListFilter":"挑選清單篩選","ValueStoredAsText":"值已儲存為文字","Value":"值","Display":"顯示","Code":"代碼","Name":"名稱","DisplayName":"顯示名稱","Template":"計算","Description":"描述","SortOrder":"排序順序","lblNoFieldsInTemplate":"在套用排序順序之前，請先新增實體內容至範本。","AddField":"新增欄位","InUse":"使用中","NotInUse":"不在使用中","CalculatedNumberInputError":"<p>輸入內容僅限於從下拉清單選取的欄位名稱，<br/>以及下列字元：<br/>&nbsp;&nbsp;&nbsp;&nbsp;「+」、「-」、「*」、「/」、「(」或「)」。<br/>&nbsp;&nbsp;&nbsp;&nbsp;這些與文字區域上方的按鈕值相符。</p>","newPickList":"新挑選清單","add":"加","substract":"減","multiply":"乘","divide":"除","openParens":"左括號","closeParens":"右括號","_localized":{}}
});