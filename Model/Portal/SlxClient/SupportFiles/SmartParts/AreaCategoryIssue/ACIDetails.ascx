<%@ Control Language="C#" ClassName="AciDetailsView" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>

<%//------------------------------------------------------------------------
//This file was generated by a tool.  Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//------------------------------------------------------------------------ %>
<table border="0" cellpadding="1" cellspacing="0" class="formtable">
         <col width="33%" />
            <col width="33%" />
     <tr>
            <td rowspan="3"  >
<div class="dependency">
<SalesLogix:DependencyLookupControl runat="server" ID="dplArea1"  LabelCssClass="lbl alignright" ButtonToolTip="<%$ resources: dplArea1.ButtonToolTip %>"  AutoPostBack="true"  >
<LookupResultsHeaderStyle BackColor="ActiveCaption" Font-Bold="True" ForeColor="White" />
<LookupDialogStyle BackColor="ButtonFace" />
<LookupResultsStyle CellPadding="4" ForeColor="Black" />
<DependentLookups>
 <SalesLogix:DependentLookup LookupEntityName="IAreaCategoryIssue" ReadOnlyControl="false" LookupEntityTypeName="Sage.Entity.Interfaces.IAreaCategoryIssue, Sage.Entity.Interfaces, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null" DropDownDisplayProperty="Area" ParentProperty="" PropertyDisplay="<%$ resources: dplArea1.DependentLookups.Area.PropertyDisplay %>" BindingPropertyName="Area">
  </SalesLogix:DependentLookup>
 <SalesLogix:DependentLookup LookupEntityName="IAreaCategoryIssue" ReadOnlyControl="false" LookupEntityTypeName="Sage.Entity.Interfaces.IAreaCategoryIssue, Sage.Entity.Interfaces, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null" DropDownDisplayProperty="Category" ParentProperty="Area" PropertyDisplay="<%$ resources: dplArea1.DependentLookups.Category.PropertyDisplay %>" BindingPropertyName="Category">
  </SalesLogix:DependentLookup>
 <SalesLogix:DependentLookup LookupEntityName="IAreaCategoryIssue" ReadOnlyControl="false" LookupEntityTypeName="Sage.Entity.Interfaces.IAreaCategoryIssue, Sage.Entity.Interfaces, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null" DropDownDisplayProperty="Issue" ParentProperty="Category" PropertyDisplay="<%$ resources: dplArea1.DependentLookups.Issue.PropertyDisplay %>" BindingPropertyName="Issue">
  </SalesLogix:DependentLookup>
  </DependentLookups>
</SalesLogix:DependencyLookupControl>
</div>

      </td>
                <td  >
<div class="slxlabel  alignleft checkboxRight">

  <SalesLogix:SLXCheckBox runat="server" ID="QFCheckBox2"  Text="<%$ resources: QFCheckBox2.Caption %>"  CssClass=""
LabelPlacement="left"  />
</div>
      </td>
      </tr>
<tr>
                  <td  >
<div class="slxlabel  alignleft checkboxRight">

  <SalesLogix:SLXCheckBox runat="server" ID="QFCheckBox1"  Text="<%$ resources: QFCheckBox1.Caption %>"  CssClass=""
LabelPlacement="left"  />
</div>
      </td>
      </tr>
<tr>
                  <td  >
<div class="slxlabel  alignleft checkboxRight">

  <SalesLogix:SLXCheckBox runat="server" ID="QFCheckBox"  Text="<%$ resources: QFCheckBox.Caption %>"  CssClass=""
LabelPlacement="left"  />
</div>
      </td>
      </tr>
<tr>
            <td>
                <div class=" lbl alignright">
   <asp:Label ID="QFSLXOwner_lbl" AssociatedControlID="QFSLXOwner" runat="server" Text="<%$ resources: QFSLXOwner.Caption %>" ></asp:Label>
 </div>   
  <div  class="textcontrol"  > 
<SalesLogix:OwnerControl runat="server" ID="QFSLXOwner" Types="$qfcontrol.Types"  />
  </div>
            </td>
                <td  >
 
      </td>
      </tr>
</table>
 


 <SalesLogix:SmartPartToolsContainer runat="server" ID="AciDetailsView_RTools" ToolbarLocation="right">
   <SalesLogix:GroupNavigator runat="server" ID="tbrNavigator" ></SalesLogix:GroupNavigator>
    <asp:ImageButton runat="server" ID="tbrSave"
 ToolTip="<%$ resources: tbrSave.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Save_16x16"  />
   
    <asp:ImageButton runat="server" ID="cmdSaveNew"
 ToolTip="<%$ resources: cmdSaveNew.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Save_New16x16"  />
   
     <asp:ImageButton runat="server" ID="cmdCopyACI"
 ToolTip="<%$ resources: cmdCopyACI.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Copy_16x16"  />

    <asp:ImageButton runat="server" ID="tbrDelete"
 ToolTip="<%$ resources: tbrDelete.ToolTip %>" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Delete_16x16"  />

 <SalesLogix:PageLink ID="lnkAciDetailsViewHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="AciDetailsView" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
 </SalesLogix:SmartPartToolsContainer>


<script runat="server" type="text/C#">
/// <summary>
/// Gets or sets the role security service.
/// </summary>
/// <value>The role security service.</value>
[Sage.Platform.Application.ServiceDependency]
public Sage.Platform.Security.IRoleSecurityService RoleSecurityService { get; set; }

public override Type EntityType
{
    get { return typeof(Sage.Entity.Interfaces.IAreaCategoryIssue); }
}
 

protected override void OnAddEntityBindings() {
   BindingSource.AddBindingProvider(dplArea1);
         var dplArea1TextBinding = new WebEntityBinding("Area", dplArea1, "Text", false);
BindingSource.Bindings.Add(dplArea1TextBinding);
              var QFCheckBox2CheckedBinding = new WebEntityBinding("Ticket", QFCheckBox2, "Checked", false);
BindingSource.Bindings.Add(QFCheckBox2CheckedBinding);
              var QFCheckBox1CheckedBinding = new WebEntityBinding("Defect", QFCheckBox1, "Checked", false);
BindingSource.Bindings.Add(QFCheckBox1CheckedBinding);
              var QFCheckBoxCheckedBinding = new WebEntityBinding("Customer", QFCheckBox, "Checked", false);
BindingSource.Bindings.Add(QFCheckBoxCheckedBinding);
                         
      
      
      
             
      
      
      
        }
                                   
protected void tbrSave_ClickAction(object sender, EventArgs e) {

  Sage.Entity.Interfaces.IAreaCategoryIssue _entity = BindingSource.Current as Sage.Entity.Interfaces.IAreaCategoryIssue;
  ///////////////////////////
  if (QFSLXOwner.LookupResultValue.ToString() != "")
  {
      var area = _entity.Area;
      var tao = Sage.Platform.EntityFactory.GetRepository<ITicketAreaOwner>().FindFirstByProperty("Area", area);
      if (tao == null)
      {
          tao = Sage.Platform.EntityFactory.Create<ITicketAreaOwner>();
          tao.Area = area;
      }
      tao.AreaOwner = Sage.Platform.EntityFactory.GetById<IOwner>(QFSLXOwner.LookupResultValue);
      tao.Save();
  }
  ///////////////////////////////
  if (_entity != null)
  {
    object _parent = GetParentEntity();
    if (DialogService.ChildInsertInfo != null)
    {
        if (_parent != null)
        {
            if (DialogService.ChildInsertInfo.ParentReferenceProperty != null)
            {
                DialogService.ChildInsertInfo.ParentReferenceProperty.SetValue(_entity, _parent, null);
            }
        }
    }
    bool shouldSave = true;
    var page = Page as Sage.Platform.WebPortal.EntityPage;
    if (page != null)
    {
        if(IsInDialog() && page.ModeId.ToUpper() == "INSERT")
        {
            shouldSave = false;
        }
    }

    if(shouldSave)
    {
	if (_entity.ModifyDate != null)
    {
        _entity.ModifyDate = DateTime.Now;
    }
       _entity.Save();
    }

    if (_parent != null)
    {
        if (DialogService.ChildInsertInfo != null)
        {
           if (DialogService.ChildInsertInfo.ParentsCollectionProperty != null)
           {
              var addMethod = DialogService.ChildInsertInfo.ParentsCollectionProperty.PropertyType.GetMethod("Add");
              addMethod.Invoke(DialogService.ChildInsertInfo.ParentsCollectionProperty.GetValue(_parent, null), new object[] { _entity });
           }
        }
     }
  }

          tbrSave_ClickActionBRC(sender, e);
    
  
}
protected void tbrSave_ClickActionBRC(object sender, EventArgs e) {
      Response.Redirect(string.Format("AreaCategoryIssue.aspx?entityId={0}", (this.BindingSource.Current as Sage.Platform.ComponentModel.IComponentReference).Id));
  
}
protected void cmdSaveNew_ClickAction(object sender, EventArgs e) {
    
  Sage.Entity.Interfaces.IAreaCategoryIssue _entity = BindingSource.Current as Sage.Entity.Interfaces.IAreaCategoryIssue;

  ///////////////////////////
  if (QFSLXOwner.LookupResultValue.ToString() != "")
  {
      var area = _entity.Area;
      var tao = Sage.Platform.EntityFactory.GetRepository<ITicketAreaOwner>().FindFirstByProperty("Area", area);
      if (tao == null)
      {
          tao = Sage.Platform.EntityFactory.Create<ITicketAreaOwner>();
          tao.Area = area;
      }
      tao.AreaOwner = Sage.Platform.EntityFactory.GetById<IOwner>(QFSLXOwner.LookupResultValue);
      tao.Save();
  }
  ///////////////////////////////
    
  if (_entity != null)
  {
    object _parent = GetParentEntity();
    if (DialogService.ChildInsertInfo != null)
    {
        if (_parent != null)
        {
            if (DialogService.ChildInsertInfo.ParentReferenceProperty != null)
            {
                DialogService.ChildInsertInfo.ParentReferenceProperty.SetValue(_entity, _parent, null);
            }
        }
    }
    bool shouldSave = true;
    var page = Page as Sage.Platform.WebPortal.EntityPage;
    if (page != null)
    {
        if(IsInDialog() && page.ModeId.ToUpper() == "INSERT")
        {
            shouldSave = false;
        }
    }

    if(shouldSave)
    {
       _entity.Save();
    }

    if (_parent != null)
    {
        if (DialogService.ChildInsertInfo != null)
        {
           if (DialogService.ChildInsertInfo.ParentsCollectionProperty != null)
           {
              var addMethod = DialogService.ChildInsertInfo.ParentsCollectionProperty.PropertyType.GetMethod("Add");
              addMethod.Invoke(DialogService.ChildInsertInfo.ParentsCollectionProperty.GetValue(_parent, null), new object[] { _entity });
           }
        }
     }
  }

          cmdSaveNew_ClickActionBRC(sender, e);
    
  
}
protected void cmdSaveNew_ClickActionBRC(object sender, EventArgs e) {
      Response.Redirect(string.Format("InsertACI.aspx?modeid=Insert&entityId={0}", (BindingSource.Current as Sage.Platform.ComponentModel.IComponentReference).Id));
   
}
protected void tbrDelete_ClickAction(object sender, EventArgs e) {
  var persistentEntity = this.BindingSource.Current as Sage.Platform.Orm.Interfaces.IPersistentEntity;
  if (persistentEntity != null) {
    persistentEntity.Delete();
  }
  btnDelete_ClickActionBRC(sender, e);
}
protected void btnDelete_ClickActionBRC(object sender, EventArgs e)
{
    Response.Redirect("AreaCategoryIssue.aspx");
}
protected void cmdCopyACI_ClickAction(object sender, EventArgs e)
{
    Response.Redirect(string.Format("InsertACI.aspx?modeid=Insert&copyaci=true&entityId={0}", (BindingSource.Current as Sage.Platform.ComponentModel.IComponentReference).Id));

}
protected override void OnWireEventHandlers()
{
    base.OnWireEventHandlers();

    tbrSave.Click += tbrSave_ClickAction;
    cmdSaveNew.Click += cmdSaveNew_ClickAction;
    cmdCopyACI.Click += cmdCopyACI_ClickAction;
    tbrDelete.Click += tbrDelete_ClickAction;
}

protected void quickformload0(object sender, EventArgs e) {
    if (dplArea1.Text != "")
    {
        var ticketAreaOwner = Sage.Platform.EntityFactory.GetRepository<ITicketAreaOwner>().FindFirstByProperty("Area", dplArea1.Text);
        if (ticketAreaOwner != null && ticketAreaOwner.AreaOwner != null)
        {
            QFSLXOwner.Text = ticketAreaOwner.AreaOwner.OwnerDescription;
        }
    }
}
private bool _runActivating;
protected override void OnActivating()
{
_runActivating = true;
}
private void DoActivating()
{
quickformload0(this, EventArgs.Empty);

}
protected override void OnFormBound()
{
Sage.Platform.WebPortal.EntityPage epage = Page as Sage.Platform.WebPortal.EntityPage;
        if (epage != null)
            _runActivating = (epage.IsNewEntity || _runActivating);
if (_runActivating) DoActivating();

ClientBindingMgr.RegisterSaveButton(tbrSave);
ClientBindingMgr.RegisterSaveButton(cmdSaveNew);

tbrDelete.OnClientClick = string.Format("return confirm('{0}');", Sage.Platform.WebPortal.PortalUtil.JavaScriptEncode(GetLocalResourceObject("tbrDelete.ActionConfirmationMessage").ToString()));
    
tbrSave.Visible = false;
cmdSaveNew.Visible = false;
cmdCopyACI.Visible = false;
tbrDelete.Visible = false;
    
if (Request.QueryString["modeid"] != null && string.Equals(Request.QueryString["modeid"], "Insert", StringComparison.CurrentCultureIgnoreCase))
{
    if (RoleSecurityService.HasAccess("Entities/ACI/Add"))
    {
        tbrSave.Visible = true;
        cmdSaveNew.Visible = true;
    }
}
else
{
    if (RoleSecurityService.HasAccess("Entities/ACI/Edit"))
    {
        tbrSave.Visible = true;
    }
    if (RoleSecurityService.HasAccess("Entities/ACI/Add") && RoleSecurityService.HasAccess("Entities/ACI/Edit"))
    {
        cmdSaveNew.Visible = true;
    }
    if (RoleSecurityService.HasAccess("Entities/ACI/Add"))
    {
        cmdCopyACI.Visible = true;
    }
    if (RoleSecurityService.HasAccess("Entities/ACI/Delete"))
    {
        tbrDelete.Visible = true;
    }
}
quickformload1(this, EventArgs.Empty);

}

protected void quickformload1(object sender, EventArgs e)
{
    Sage.Entity.Interfaces.IAreaCategoryIssue aci = BindingSource.Current as Sage.Entity.Interfaces.IAreaCategoryIssue;
    if (Request.QueryString["copyaci"] != null && Request.QueryString["copyaci"].Equals("true"))
    {
        Sage.Entity.Interfaces.IAreaCategoryIssue copyFromAci =
            Sage.Platform.EntityFactory.GetById<Sage.Entity.Interfaces.IAreaCategoryIssue>(Request.QueryString["entityId"]);
        aci.Area = copyFromAci.Area;
        aci.Category = copyFromAci.Category;
        aci.Issue = copyFromAci.Issue;
        aci.Ticket = copyFromAci.Ticket;
        aci.Customer = copyFromAci.Customer;
        aci.Defect = copyFromAci.Defect;

        if (copyFromAci.Area != "")
        {
            var ticketAreaOwner = Sage.Platform.EntityFactory.GetRepository<ITicketAreaOwner>().FindFirstByProperty("Area", copyFromAci.Area);
            if (ticketAreaOwner != null && ticketAreaOwner.AreaOwner != null)
            {
                QFSLXOwner.Text = ticketAreaOwner.AreaOwner.OwnerDescription;
                QFSLXOwner.LookupResultValue = ticketAreaOwner.AreaOwner.Id;
            }
        }
    }

    // Update AssignedTo when Area is changed
    if (aci != null && aci.Area != "")
    {
        var ticketAreaOwner = Sage.Platform.EntityFactory.GetRepository<ITicketAreaOwner>().FindFirstByProperty("Area", aci.Area);
        if (ticketAreaOwner != null && ticketAreaOwner.AreaOwner != null)
        {
            QFSLXOwner.Text = ticketAreaOwner.AreaOwner.OwnerDescription;
            QFSLXOwner.LookupResultValue = ticketAreaOwner.AreaOwner.Id;
        }
    }

}

public override Sage.Platform.Application.UI.ISmartPartInfo GetSmartPartInfo(Type smartPartInfoType)
{
    var tinfo = new ToolsSmartPartInfo();
        if (BindingSource != null && BindingSource.Current != null)
    {
		tinfo.Description = BindingSource.Current.ToString();
		tinfo.Title = BindingSource.Current.ToString();
    }

    if (Request.QueryString["modeid"] != null && string.Equals(Request.QueryString["modeid"], "Insert", StringComparison.CurrentCultureIgnoreCase))
    {
        tinfo.Description = "";
        tinfo.Title = "";
    }
    foreach (Control c in Controls)
    {
        var cont = c as SmartPartToolsContainer;
        if (cont != null)
        {
            switch (cont.ToolbarLocation)
            {
                case SmartPartToolsLocation.Right:
                    foreach (Control tool in cont.Controls)
                    {
                                            tinfo.RightTools.Add(tool);
                                        }
                    break;
                case SmartPartToolsLocation.Center:
                    foreach (Control tool in cont.Controls)
                    {
                        tinfo.CenterTools.Add(tool);
                    }
                    break;
                case SmartPartToolsLocation.Left:
                    foreach (Control tool in cont.Controls)
                    {
                        tinfo.LeftTools.Add(tool);
                    }
                    break;
            }
        }
    }

        return tinfo;
}

private AciDetailsViewAdapter _formAdapter;

// For backward compat
public AciDetailsViewAdapter FormAdapter
{
    get { return _formAdapter ?? (_formAdapter = new AciDetailsViewAdapter(this)); }
}
// For easier programming model
public AciDetailsViewAdapter MyPage {get { return FormAdapter; }} 

public class AciDetailsViewAdapter : Sage.Platform.WebPortal.Adapters.EntityFormAdapter
{
    public AciDetailsViewAdapter(Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider smartPart)
        : base(smartPart) {}

    private Sage.Platform.Controls.IDependencyLookupControl _dplArea1;
    public  Sage.Platform.Controls.IDependencyLookupControl dplArea1
    {
        get { return FindControl(ref _dplArea1, "dplArea1"); }
    }
    private Sage.Platform.Controls.ICheckBoxControl _QFCheckBox2;
    public  Sage.Platform.Controls.ICheckBoxControl QFCheckBox2
    {
        get { return FindControl(ref _QFCheckBox2, "QFCheckBox2"); }
    }
    private Sage.Platform.Controls.ICheckBoxControl _QFCheckBox1;
    public  Sage.Platform.Controls.ICheckBoxControl QFCheckBox1
    {
        get { return FindControl(ref _QFCheckBox1, "QFCheckBox1"); }
    }
    private Sage.Platform.Controls.ICheckBoxControl _QFCheckBox;
    public  Sage.Platform.Controls.ICheckBoxControl QFCheckBox
    {
        get { return FindControl(ref _QFCheckBox, "QFCheckBox"); }
    }
    private Sage.Platform.Controls.IOwnerControl _QFSLXOwner;
    public  Sage.Platform.Controls.IOwnerControl QFSLXOwner
    {
        get { return FindControl(ref _QFSLXOwner, "QFSLXOwner"); }
    }
    private Sage.Platform.Controls.IGroupNavigatorControl _tbrNavigator;
    public  Sage.Platform.Controls.IGroupNavigatorControl tbrNavigator
    {
        get { return FindControl(ref _tbrNavigator, "tbrNavigator"); }
    }
    private Sage.Platform.Controls.IButtonControl _tbrSave;
    public  Sage.Platform.Controls.IButtonControl tbrSave
    {
        get { return FindControl(ref _tbrSave, "tbrSave"); }
    }
    private Sage.Platform.Controls.IButtonControl _cmdSaveNew;
    public  Sage.Platform.Controls.IButtonControl cmdSaveNew
    {
        get { return FindControl(ref _cmdSaveNew, "cmdSaveNew"); }
    }
    private Sage.Platform.Controls.IButtonControl _tbrDelete;
    public  Sage.Platform.Controls.IButtonControl tbrDelete
    {
        get { return FindControl(ref _tbrDelete, "tbrDelete"); }
    }
    private Sage.Platform.Controls.IButtonControl _cmdCopyACI;
    public Sage.Platform.Controls.IButtonControl cmdCopyACI
    {
        get { return FindControl(ref _cmdCopyACI, "cmdCopyACI"); }
    }

}

</script>
<script type="text/javascript">
</script>