using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Web.UI;
using System.Web.UI.WebControls;
using Sage.Entity.Interfaces;
using Sage.Platform.Application;
using Sage.Platform.Application.Services;
using Sage.Platform.Application.UI;
using Sage.Platform.Orm;
using Sage.Platform.WebPortal.SmartParts;
using Sage.SalesLogix.Client.GroupBuilder;
using Sage.SalesLogix.Plugins;
using Sage.SalesLogix.WebUserOptions;

/// <summary>
/// Group options are stored in useroptions under category DefaultGroup, name Entity name.  The lan default groups are stored under
/// category DefaultGroup, name MainviewFamily|MainViewName
/// </summary>
public partial class GroupTabOptionsPage : UserControl, ISmartPartInfoProvider
{
    /// <summary>
    /// Saves the options.
    /// </summary>
    /// <param name="sender">The sender.</param>
    /// <param name="e">The <see cref="System.EventArgs"/> instance containing the event data.</param>
    protected void SaveOption(object sender, EventArgs e)
    {
        IUserOptionsService userOption = ApplicationContext.Current.Services.Get<IUserOptionsService>();
        userOption.SetCommonOption(DefaultGroupOptionName(), "DefaultGroup", GetFamNameFromId(ddlGroup.SelectedValue), false);
        userOption.SetCommonOption(DefaultGroupOptionName(), "LookupLayoutGroup", GetFamNameFromId(ddlLookupLayoutGroup.SelectedValue), false);
        var egis = GroupContext.GetGroupContext().EntityGroupInfos;
        if (egis != null)
        {
            foreach (var egi in egis)
                if (egi.EntityName.Equals(DefaultGroupOptionName(), StringComparison.OrdinalIgnoreCase))
                {
                    egi.ClearCache(true);
                    break;
                }
        }
        userOption.SetCommonOption("defaultLookupCondition", "DefaultLookupCondition", ddlDefaultSearchCondition.SelectedValue, false);
    }

    private static string GetFamNameFromId(string id)
    {
        var groupList = PluginManager.GetPluginList(PluginType.ACOGroup, true, false);
        foreach (Plugin grp in groupList)
            if (grp.PluginId == id)
                return String.Format("{0}:{1}", grp.Family, grp.Name);
        groupList = PluginManager.GetPluginList(PluginType.Group, true, false);
        foreach (Plugin grp in groupList)
            if (grp.PluginId == id)
                return String.Format("{0}:{1}", grp.Family, grp.Name);
        return "";
    }

    /// <summary>
    /// Handles the PreRender event of the Page control.
    /// </summary>
    /// <param name="sender">The source of the event.</param>
    /// <param name="e">The <see cref="System.EventArgs"/> instance containing the event data.</param>
    protected void Page_PreRender(object sender, EventArgs e)
    {
        string family = "ACCOUNT";
        if (ddlMainView.SelectedItem != null)
        {
            family = ddlMainView.SelectedItem.Value;
        }

        var groupList = PluginManager.GetPluginList(GroupInfo.GetGroupPluginType(family), true, false);
        for (int i = groupList.Count - 1; i >= 0; i--)
        {
            if (groupList[i].Family.ToLower() != family.ToLower())
            {
                groupList.RemoveAt(i);
                continue;
            }
            if (String.IsNullOrEmpty(groupList[i].DisplayName))
            {
                groupList[i].DisplayName = groupList[i].Name;
            }
        }

        /***** Name Collision with Blob.PluginId *****************************************************/
        //ddlGroup.DataSource = GroupList;
        //ddlGroup.DataTextField = "DisplayName";
        //ddlGroup.DataValueField = "PluginId";
        //ddlGroup.DataBind();
        /*********************************************************************************************/
        ddlGroup.Items.Clear();
        ddlLookupLayoutGroup.Items.Clear();
        foreach (Plugin gl in groupList)
        {
            ddlGroup.Items.Add(new ListItem(gl.DisplayName, gl.PluginId));
            ddlLookupLayoutGroup.Items.Add(new ListItem(gl.DisplayName, gl.PluginId));
        }

        IUserOptionsService userOption = ApplicationContext.Current.Services.Get<IUserOptionsService>();
        string defFamName = userOption.GetCommonOption(DefaultGroupOptionName(), "DefaultGroup");
        foreach (Plugin grp in groupList)
            if ((grp.Family.ToLower() == defFamName.Split(':')[0].ToLower()) && (grp.Name == defFamName.Split(':')[1]))
                Utility.SetSelectedValue(ddlGroup, grp.PluginId);
        string defLayoutGroup = userOption.GetCommonOption(DefaultGroupOptionName(), "LookupLayoutGroup");
        defLayoutGroup = (string.IsNullOrEmpty(defLayoutGroup)) ? defFamName : defLayoutGroup;
        foreach (Plugin grp in groupList)
            if ((grp.Family.ToLower() == defLayoutGroup.Split(':')[0].ToLower()) && (grp.Name == defLayoutGroup.Split(':')[1]))
                Utility.SetSelectedValue(ddlLookupLayoutGroup, grp.PluginId);

        string defaultLookupCondition = userOption.GetCommonOption("defaultLookupCondition", "DefaultLookupCondition");
        ddlDefaultSearchCondition.ClearSelection();
        foreach (ListItem item in ddlDefaultSearchCondition.Items)
        {
            if (string.Equals(item.Value, defaultLookupCondition))
            {
                item.Selected = true;
                break;
            }
        }
    }

    private string DefaultGroupOptionName()
    {
        return ddlMainView.SelectedValue;
    }

    /// <summary>
    /// Handles the Load event of the Page control.
    /// </summary>
    /// <param name="sender">The source of the event.</param>
    /// <param name="e">The <see cref="System.EventArgs"/> instance containing the event data.</param>
    protected void Page_Load(object sender, EventArgs e)
    {
        btnSave.Click += SaveOption;
        var mvList = new SortedList();
        AddFamiliesToList(mvList, PluginType.ACOGroup);
        AddFamiliesToList(mvList, PluginType.Group);
        ddlMainView.DataSource = mvList;
        ddlMainView.DataValueField = "Key";
        ddlMainView.DataTextField = "Value";
        ddlMainView.DataBind();
    }

    private static void AddFamiliesToList(SortedList MVList, PluginType aType)
    {
        IList<Plugin> aList = PluginManager.GetPluginList(aType, true, false);
        var entityAssemblyqualifiedName = typeof(IAccount).AssemblyQualifiedName;
        foreach (Plugin grp in aList)
        {
            string family = grp.Family;
            family = GroupInfo.GetEntityName(family);
            var familytype = Type.GetType(entityAssemblyqualifiedName.Replace("Account", family), false, true);
            if (familytype != null)
            {
                string famname = familytype.GetDisplayName();
                famname = string.IsNullOrEmpty(famname) ? family : famname;
                if (!MVList.ContainsKey(grp.Family) && !MVList.ContainsValue(famname))
                {
                    MVList.Add(grp.Family, famname);
                }
            }
        }
    }

    /// <summary>
    /// Gets the smart part info.
    /// </summary>
    /// <param name="smartPartInfoType">Type of the smart part info.</param>
    /// <returns></returns>
    public ISmartPartInfo GetSmartPartInfo(Type smartPartInfoType)
    {
        var tinfo = new ToolsSmartPartInfo();
        tinfo.Description = GetLocalResourceObject("PageDescription.Text").ToString();
        tinfo.Title = GetLocalResourceObject("PageDescription.Title").ToString();
        foreach (Control c in LitRequest_RTools.Controls)
        {
            tinfo.RightTools.Add(c);
        }
        return tinfo;
    }
}