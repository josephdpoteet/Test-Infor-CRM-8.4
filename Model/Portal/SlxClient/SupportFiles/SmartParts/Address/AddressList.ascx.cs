using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using Sage.Platform.ComponentModel;
using Sage.Platform.WebPortal.SmartParts;
using Sage.Platform.Application;
using Sage.Platform;
using Sage.Entity.Interfaces;
using Sage.Platform.WebPortal;
using Sage.Platform.Orm.Interfaces;

public partial class SmartParts_AddressList : EntityBoundSmartPartInfoProvider 
{
    [ServiceDependency]
    public IEntityContextService EntityService { get; set; }

    public override Type EntityType
    {
        get { return typeof(IAccount); }
    }

    protected override void OnAddEntityBindings()
    {
    }

    protected override void OnWireEventHandlers()
    {
        btnAdd.Click += btnAdd_ClickAction;
        AddressGrid.PageIndexChanging += AddressGrid_PageIndexChanging;
        base.OnWireEventHandlers();
    }

    protected override void OnFormBound()
    {
        base.OnFormBound();
        LoadGrid();
    }

    private Sage.Platform.WebPortal.Binding.WebEntityListBindingSource _dsAddrss;
    public Sage.Platform.WebPortal.Binding.WebEntityListBindingSource DSAddress
    {
        get
        {
            if (_dsAddrss == null)
            {
                _dsAddrss = new Sage.Platform.WebPortal.Binding.WebEntityListBindingSource(typeof(IAddress),
                 EntityService.EntityType, "Addresses", System.Reflection.MemberTypes.Property);
                _dsAddrss.UseSmartQuery = false;
            }
            return _dsAddrss;
        }
    }

    public override Sage.Platform.Application.UI.ISmartPartInfo GetSmartPartInfo(Type smartPartInfoType)
    {
        ToolsSmartPartInfo tinfo = new ToolsSmartPartInfo();
        foreach (Control c in Address_LTools.Controls)
        {
            tinfo.LeftTools.Add(c);
        }
        foreach (Control c in Address_CTools.Controls)
        {
            tinfo.CenterTools.Add(c);
        }
        foreach (Control c in Address_RTools.Controls)
        {
            tinfo.RightTools.Add(c);
        }
        return tinfo;
    }

    protected void btnAdd_ClickAction(object sender, EventArgs e)
    {
        if (!CanChangeAddress())
        {
            return;
        }
        
        if (DialogService != null)
        {
            DialogService.SetSpecs(200, 200, 440, 300, "AddEditAddress", "", true);
            DialogService.EntityType = typeof(IAddress);
            DialogService.ShowDialog();
            LoadGrid();
        }
    }

    private int _deleteColumnIndex = -2;
    protected int DeleteColumnIndex
    {
        get
        {
            if (_deleteColumnIndex == -2)
            {
                int bias = (AddressGrid.ExpandableRows) ? 1 : 0;
                _deleteColumnIndex = -1;
                int colcount = 0;
                foreach (DataControlField col in AddressGrid.Columns)
                {
                    ButtonField btn = col as ButtonField;
                    if (btn != null)
                    {
                        if (btn.CommandName == "Delete")
                        {
                            _deleteColumnIndex = colcount + bias;
                            break;
                        }
                    }
                    colcount++;
                }
            }
            return _deleteColumnIndex;
        }
    }

    protected void AddressGrid_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            // Get the LinkButton control for the Delete 
            if ((DeleteColumnIndex >= 0) && (DeleteColumnIndex < e.Row.Cells.Count))
            {
                TableCell cell = e.Row.Cells[DeleteColumnIndex];
                foreach (Control c in cell.Controls)
                {
                    LinkButton btn = c as LinkButton;
                    if (btn != null)
                    {
                        btn.Attributes.Add("onclick", "javascript: return confirm('" + PortalUtil.JavaScriptEncode(GetLocalResourceObject("ConfirmMessage").ToString()) + "');");
                        return;
                    }
                }
            }
        }
    }

    protected void AddressGrid_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (!CanChangeAddress())
        {
            return;
        }

        if (e.CommandName.Equals("Edit"))
        {
            int rowIndex = Convert.ToInt32(e.CommandArgument);
            var id = AddressGrid.DataKeys[rowIndex].Value.ToString();
            if (DialogService != null)
            {
                DialogService.SetSpecs(200, 200, 440, 300, "AddEditAddress", "", true);
                DialogService.EntityType = typeof(IAddress);
                DialogService.EntityID = id;
                DialogService.ShowDialog();
            }
            return;
        }
        if (e.CommandName.Equals("Delete"))
        {
            int rowIndex = Convert.ToInt32(e.CommandArgument);
            var id = AddressGrid.DataKeys[rowIndex].Value.ToString();
            var address = EntityFactory.GetById<IAddress>(id);
            if ((address.IsPrimary == true) || (address.IsMailing == true))
            {
                if (DialogService != null)
                {
                    string msg = GetLocalResourceObject("DeleteAddressMessage").ToString();
                    DialogService.ShowMessage(msg);
                }
            }
            else
            {
                address.Delete();
                LoadGrid();
            }
        }
    }

    protected string ConvertBoolean(object val)
    {
        LocalizedBooleanConverter converter = new LocalizedBooleanConverter();
        return converter.ConvertToString(val);
    }

    protected void AddressGrid_RowEditing(object sender, GridViewEditEventArgs e)
    {
        AddressGrid.SelectedIndex = e.NewEditIndex;
        e.Cancel = true;
    }

    protected void AddressGrid_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
    }

    protected void AddressGrid_Sorting(object sender, GridViewSortEventArgs e)
    {
    }

    protected void AddressGrid_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        AddressGrid.PageIndex = e.NewPageIndex;
    }

    private void LoadGrid()
    {
        DSAddress.Bindings.Add(new Sage.Platform.WebPortal.Binding.WebEntityListBinding("Addresses", AddressGrid));
        DSAddress.SourceObject = EntityService.GetEntity();
        AddressGrid.DataBind();
    }
   
    private bool CanChangeAddress()
    {
        IPersistentEntity parentEntity = GetParentEntity() as IPersistentEntity;
        if (parentEntity.PersistentState == PersistentState.Modified)
        {
            if (DialogService != null)
            {
                string msg = GetLocalResourceObject("SaveChanges").ToString(); 
                DialogService.SetSpecs(100, 100, 25, 100, "");
                DialogService.ShowMessage(msg);
            }
            return false;
        }
        return true;
    }
}