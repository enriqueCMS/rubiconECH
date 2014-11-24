// This is the first view in master area and tapping on the list items leads to a page navigation in master area.
// The tap event handler is called when user taps the list item.
sap.ui.jsview("view.inbox.Home", {
	getControllerName: function(){
		return "view.inbox.Home";
	},
	createContent : function(oController) {
		var UserDataModel = new sap.ui.model.json.JSONModel();
		UserDataModel.loadData("model/user.json",false,false);
		sap.ui.getCore().setModel(UserDataModel, "UserDataModel");
		var UserData = UserDataModel.oData.user;
		
	
		var WorklistModel = new sap.ui.model.json.JSONModel();
		WorklistModel.loadData("model/worklist.json",false,false);
		sap.ui.getCore().setModel(WorklistModel, "WorklistModel");
		var WorkList = WorklistModel.oData.worklist;
		
		
		/*var oInboxList = new sap.m.List({
			inset: true,
			headerText: "Lista de trabajo",
			items: [
				new sap.m.StandardListItem({
					//title : "{ids>/ids/USER_DATA}",
					title : "Hospitalización",
					icon : "{img>/icon/INBOX}",
					activeIcon: "{img>/icon/INBOX_ACTIVE}",
					type : sap.m.ListType.Active,
					counter: 3,
					press : [oController.onListItemTap, oController]
				})
			]
		});*/
		var oListStandard = new sap.m.List({ 
		    inset : true, 
		    headerText: "Lista de trabajo"
		});
		var item = new sap.m.StandardListItem({
              title : "{name}",
              iconInset: false,
              type : sap.m.ListType.Active,
              id : "paco",
              press: function(evt){
                  debugger;
                  console.log("holaaa");
                        }
          });
        oListStandard.setModel(WorklistModel);
        oListStandard.bindAggregation("items","/worklist" , item);
		
		var oPage = new sap.m.Page({
		    id: "user_" + UserDataModel.oData.user.id,
			icon: "{img>/icon/UI5}",
			title: UserData.role + " " + UserData.name + " " + UserData.last_name ,
			content: [oListStandard]
		});
		
		if(!sap.ui.Device.system.phone){
			//Footer is added to show the switch between SplitApp modes.
			oPage.setFooter(new sap.m.Toolbar({
				content: [
					new sap.m.ToolbarSpacer(),
					new sap.m.Select({
						items: [new sap.ui.core.Item({
							key: "showhide",
							text: "ShowHideMode"
						}), new sap.ui.core.Item({
							key: "stretch",
							text: "StretchCompressMode"
						}),new sap.ui.core.Item({
							key: "hide",
							text: "HideMode"
						}),new sap.ui.core.Item({
							key: "popover",
							text: "PopoverMode"
						})],
						change: function(oControlEvent) {
							oController.onSelectChange(oControlEvent);
						}
					}),
					new sap.m.ToolbarSpacer()
				]
			}));
		}
		
		return oPage;
	}
});