<%@ Control Language="C#" ClassName="MarketoInsightDashboard" Inherits="Sage.Platform.WebPortal.SmartParts.EntityBoundSmartPartInfoProvider" %>
<%@ Register TagPrefix="mkt" Namespace="SalesLogix.Integration.Marketo.Controls" assembly="SalesLogix.Integration.Marketo" %>
<%//------------------------------------------------------------------------
//This file was generated by a tool.  Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//------------------------------------------------------------------------ %>
<mkt:MarketoSalesInsightHeaderControl runat="server" ID="mktDashboardControl" />

<SalesLogix:SmartPartToolsContainer runat="server" ID="MarketoInsightDashboard_RTools" ToolbarLocation="right">
    <SalesLogix:PageLink ID="btnEditForm" CssClass="adminEditFormButton" runat="server" LinkType="RelativePath" ToolTip="<%$ resources: Portal, EditForm_ToolTip %>" NavigateUrl="~/FormManager.aspx?entityid=MarketoInsightDashboard&modeid=Detail" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=form_manager_16x16"></SalesLogix:PageLink>




    <SalesLogix:PageLink ID="lnkMarketoInsightDashboardHelp" runat="server" LinkType="HelpFileName" ToolTip="<%$ resources: Portal, Help_ToolTip %>" Target="MCWebHelp" NavigateUrl="MarketoInsightDashboard" ImageUrl="~/ImageResource.axd?scope=global&type=Global_Images&key=Help_16x16"></SalesLogix:PageLink>
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
        get { return typeof(Sage.Entity.Interfaces.IMarketoLead); }
    }


    protected override void OnAddEntityBindings()
    {
    }


    protected override void OnWireEventHandlers()
    {
        base.OnWireEventHandlers();

    }

    protected override void OnFormBound()
    {
        if (!RoleSecurityService.HasAccess("Administration/Forms/View"))
        {
            btnEditForm.Visible = false;
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
</script>
<script type="text/javascript">
</script>
