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

		var oWorklist = new sap.m.List({ 
		    inset : true, 
		    headerText: "Lista de trabajo"
		});
		var item = new sap.m.StandardListItem({
              title : "{name}",
              iconInset: false,
              type : sap.m.ListType.Active,
              id  : "worklist" + WorkList[0].id,
              press: function(evt){
                  alert("press id ");
                        }
          });

        oWorklist.setModel(WorklistModel);
        oWorklist.bindAggregation("items","/worklist" , item);
		
		var oPage = new sap.m.Page({
		    id: "user_" + UserDataModel.oData.user.id,
			icon: "{img>/icon/UI5}",
			title: UserData.role + " " + UserData.name + " " + UserData.last_name ,
			content: [oWorklist]
		});

		if(!sap.ui.Device.system.phone){
			//Footer is added to show the switch between SplitApp modes.
			oPage.setFooter(new sap.m.Toolbar({
				content: [
					new sap.m.ToolbarSpacer(),
					new sap.m.Select({
						items: [new sap.ui.core.Item({
							key: "spanish",
							text: "Español"
						}),new sap.ui.core.Item({
							key: "english",
							text: "English"
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