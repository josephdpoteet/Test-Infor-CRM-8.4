using System;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;
using Sage.Platform.WebPortal.SmartParts;
using Sage.Platform.Application;
using Sage.Entity.Interfaces;
using Sage.Platform;
using Sage.Platform.Orm;
using System.Collections.Generic;
using Sage.SalesLogix.Security;
using Sage.Platform.Security;
using Sage.Platform.Application.UI;
using Sage.Platform.WebPortal.Services;
using Sage.Platform.Orm.Interfaces;

public partial class SmartParts_Campaign_AddEditTask : EntityBoundSmartPartInfoProvider
{
    private ICampaignTask _task;
    private string _mode;
    private IPersistentEntity _parentEntity;

    /// <summary>
    /// Gets the type of the entity.
    /// </summary>
    /// <value>The type of the entity.</value>
    public override Type EntityType
    {
        get { return typeof(ICampaignTask); }
    }

    /// <summary>
    /// Called when [add entity bindings].
    /// </summary>
    protected override void OnAddEntityBindings()
    {
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("Description", txtDecription, "Text", "", ""));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("Status", pklStatus, "PickListValue", "", ""));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("DueDate", dtNeededDate, "DateTimeValue", "", null));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("Priority", pklPriority, "PickListValue", "", ""));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("CompletedDate", dtCompletedDate, "DateTimeValue", "", null));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("PercentComplete", txtPercentComplete, "Text", "", "0.0"));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("Notes", txtComment, "Text", "", ""));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("ActualHours", numActualHours, "Text"));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("BudgetHours", numEstimatedHours, "Text"));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("ActualCost", slxCurActualCost, "Text"));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("BudgetAmount", slxCurEstimatedCost, "Text"));
        BindingSource.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityBinding("DateAssigned", dtAssignedDate, "DateTimeValue", "", null));
        //We need this so we can default the percenatage to 100%. the bindigs actually formats the percentage. 
        BindingSource.OnCurrentEntitySet += BindingSource_IntOnCurrentEntitySet;
    }

    /// <summary>
    /// Called when [register client scripts].
    /// </summary>
    protected override void OnRegisterClientScripts()
    {
        base.OnRegisterClientScripts();
        IntRegisterClientScripts();
    }

    /// <summary>
    /// Called when [wire event handlers].
    /// </summary>
    protected override void OnWireEventHandlers()
    {
        cmdSave.Click += cmdSave_OnClick;
        cmdSave.Click += DialogService.CloseEventHappened;
        cmdCancel.Click += DialogService.CloseEventHappened;
        rdgAssignTo.Attributes.Add("onClick", "return Sage.UI.Forms.AddEditTask.onAssignToTypeChange();");
        base.OnWireEventHandlers();
    }

    /// <summary>
    /// Called when [form bound].
    /// </summary>
    protected override void OnFormBound()
    {
        ClientBindingMgr.RegisterDialogCancelButton(cmdCancel);
        base.OnFormBound();
    }

    /// <summary>
    /// Handles the OnCurrentEntitySet event of the BindingSource control.
    /// </summary>
    /// <param name="sender">The source of the event.</param>
    /// <param name="e">The <see cref="System.EventArgs"/> instance containing the event data.</param>
    protected void BindingSource_IntOnCurrentEntitySet(object sender, EventArgs e)
    {
        _parentEntity = GetParentEntity() as IPersistentEntity;
        _task = BindingSource.Current as ICampaignTask;
        if (DialogService.DialogParameters.Count > 0)
        {
            object mode;
            if (DialogService.DialogParameters.TryGetValue("Mode", out mode))
                _mode = mode.ToString();
        }
        LoadView();
    }

    /// <summary>
    /// Ints the register client scripts.
    /// </summary>
    private void IntRegisterClientScripts()
    {
        ScriptManager.RegisterClientScriptInclude(this, GetType(), "AddEditTask", Page.ResolveUrl("~/SmartParts/Campaign/AddEditTask.js"));
        var script = new StringBuilder();
        if (Page.IsPostBack)
        {
            script.Append(" Sage.UI.Forms.AddEditTask.init(" + GetWorkSpace() + " );");
        }
        else
        {
            script.Append("require(['dojo/ready'], function(ready) { ready(function () {Sage.UI.Forms.AddEditTask.init(" + GetWorkSpace() + "); }); });");
        }
        ScriptManager.RegisterStartupScript(this, GetType(), "initialize_AddEditTask", script.ToString(), true);
    }

    private string GetWorkSpace()
    {
        var sb = new StringBuilder();
        sb.Append("{");
        sb.AppendFormat("opt0ID:'{0}',", opt0.ClientID);
        sb.AppendFormat("opt1ID:'{0}',", opt1.ClientID);
        sb.AppendFormat("opt2ID:'{0}',", opt2.ClientID);
        sb.AppendFormat("opt3ID:'{0}',", opt3.ClientID);
        sb.AppendFormat("opt4ID:'{0}',", opt4.ClientID);
        sb.AppendFormat("ownerTypeID:'{0}',", txtOwnerType.ClientID);
        sb.AppendFormat("assignToID:'{0}',", rdgAssignTo.UniqueID);
        sb.Append("}");
        return sb.ToString();
    }

    /// <summary>
    /// Gets the smart part info.
    /// </summary>
    /// <param name="smartPartInfoType">Type of the smart part info.</param>
    /// <returns></returns>
    public override ISmartPartInfo GetSmartPartInfo(Type smartPartInfoType)
    {
        var tinfo = new ToolsSmartPartInfo();
        if (BindingSource != null)
        {
            if (BindingSource.Current != null)
            {
                tinfo.Title = _task.Id != null
                                  ? (_mode.ToUpper().Equals("EDIT")
                                         ? GetLocalResourceObject("DialogTitleEdit").ToString()
                                         : GetLocalResourceObject("DialogTitleComplete").ToString())
                                  : GetLocalResourceObject("DialogTitleAdd").ToString();
            }
        }

        foreach (Control c in Form_LTools.Controls)
        {
            tinfo.LeftTools.Add(c);
        }
        foreach (Control c in Form_CTools.Controls)
        {
            tinfo.CenterTools.Add(c);
        }
        foreach (Control c in Form_RTools.Controls)
        {
            tinfo.RightTools.Add(c);
        }
        return tinfo;
    }

    /// <summary>
    /// Handles the OnClick event of the cmdSave control.
    /// </summary>
    /// <param name="sender">The source of the event.</param>
    /// <param name="e">The <see cref="System.EventArgs"/> instance containing the event data.</param>
    protected void cmdSave_OnClick(object sender, EventArgs e)
    {
        var task = BindingSource.Current as ICampaignTask;
        ResolveOwner(task);
        task.Save();

        var refresher = PageWorkItem.Services.Get<IPanelRefreshService>();
        refresher.RefreshAll();
    }

    /// <summary>
    /// Loads the view.
    /// </summary>
    private void LoadView()
    {
        if (_task.Id == null) //Insert task
        {
            _task.Campaign = (ICampaign)_parentEntity;
            _task.Status = GetLocalResourceObject("Status_Open").ToString();
            _task.DateAssigned = DateTime.UtcNow;
            _task.PercentComplete = 0;
            _task.OwnerName = GetDefaultAssignToName();
            _task.OwnerType = "0"; //TeamUser
            _task.ActualHours = 0;
            _task.ActualCost = 0;
            _task.BudgetHours = 0;
            _task.BudgetAmount = 0;
            _task.Priority = GetLocalResourceObject("Priority_Normal").ToString();
            object stageId;
            if (DialogService.DialogParameters.TryGetValue("StageId", out stageId))
                _task.CampaignStage = GetCampaignStage(stageId.ToString());
        }
        else //Update task
        {
            if (_mode == "Complete")
            {
                _task.CompletedDate = DateTime.UtcNow;
                _task.Status = GetLocalResourceObject("Status_Completed").ToString();
                _task.Completed = true;
                _task.PercentComplete = 1.0;
            }
        }
        if (_task.PercentComplete == null)
            _task.PercentComplete = 0;
        SetOwner();
    }

    /// <summary>
    /// Sets the owner.
    /// </summary>
    private void SetOwner()
    {
        opt0.Style.Add("display", "none");
        opt1.Style.Add("display", "none");
        opt2.Style.Add("display", "none");
        opt3.Style.Add("display", "none");
        opt4.Style.Add("display", "none");

        string ownerType = _task.OwnerType;//slxBool Value used as enumeration
        txtOwnerType.Text = ownerType;
        LoadDepartmentDropDown();
        switch (ownerType)
        {
            case "0":
                opt0.Style.Add("display", "blocked");
                slxOwner.Text = _task.OwnerName;
                rdgAssignTo.SelectedIndex = 0;
                break;
            case "1":
                opt1.Style.Add("display", "blocked");
                ddlDepartments.SelectedValue = _task.OwnerName;
                rdgAssignTo.SelectedIndex = 1;
                break;
            case "2":
                opt2.Style.Add("display", "blocked");
                luContact.LookupResultValue = _task.OwnerName;
                rdgAssignTo.SelectedIndex = 2;
                break;
            case "3":
                opt3.Style.Add("display", "blocked");
                txtOther.Text = _task.OwnerName;
                rdgAssignTo.SelectedIndex = 3;
                break;
            case "4":
                opt4.Style.Add("display", "blocked");
                rdgAssignTo.SelectedIndex = 4;
                break;
            default:
                opt0.Style.Add("display", "blocked");
                slxOwner.Text = _task.OwnerName;
                break;
        }
    }

    /// <summary>
    /// Resolves the owner.
    /// </summary>
    /// <param name="task">The task.</param>
    private void ResolveOwner(ICampaignTask task)
    {
        string ownerType = Request.Form[string.Concat("ctl00$ctl00$", txtOwnerType.ClientID.Replace("_", "$"))];
        task.OwnerType = ownerType;
        string ownerName = string.Empty;
        string id;
        switch (ownerType)
        {
            case "0":
                id = slxOwner.ClientID + "_LookupText";
                ownerName = Request.Form[string.Concat("ctl00$ctl00$", id.Replace("_", "$"))];
                break;
            case "1":
                id = ddlDepartments.ClientID;
                ownerName = Request.Form[string.Concat("ctl00$ctl00$", id.Replace("_", "$"))];
                break;
            case "2":
                id = luContact.ClientID + "_LookupText";
                ownerName = Request.Form[string.Concat("ctl00$ctl00$", id.Replace("_", "$"))];
                break;
            case "3":
                ownerName = Request.Form[string.Concat("ctl00$ctl00$", txtOther.ClientID.Replace("_", "$"))];
                break;
            case "4":
                ownerName = "";
                break;
        }
        task.OwnerName = ownerName;
    }

    /// <summary>
    /// Loads the department drop down.
    /// </summary>
    private void LoadDepartmentDropDown()
    {
        ddlDepartments.Items.Clear();
        var departmentList = GetDepartments();
        var item = new ListItem {Text = string.Empty, Value = string.Empty, Selected = true};
        ddlDepartments.Items.Add(item);
        foreach (Owner owner in departmentList)
        {
            item = new ListItem { Text = owner.OwnerDescription, Value = owner.OwnerDescription };
            ddlDepartments.Items.Add(item);
        }
    }

    /// <summary>
    /// Gets the campaign stage.
    /// </summary>
    /// <param name="stageId">The stage id.</param>
    /// <returns></returns>
    private ICampaignStage GetCampaignStage(string stageId)
    {
        using (new SessionScopeWrapper())
        {
            return EntityFactory.GetById<ICampaignStage>(stageId);
        }
    }

    /// <summary>
    /// Gets the departments.
    /// </summary>
    /// <returns></returns>
    private IEnumerable<IOwner> GetDepartments()
    {
        return Owner.GetByOwnerType(OwnerType.Department);
    }

    /// <summary>
    /// Gets the name of the default assign to.
    /// </summary>
    /// <returns></returns>
    private string GetDefaultAssignToName()
    {
        var service = (SLXUserService) ApplicationContext.Current.Services.Get<IUserService>(true);
        var currentUser = service.GetUser();
        return currentUser.ToString();
    }
}