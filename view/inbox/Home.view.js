// This is the first view in master area and tapping on the list items leads to a page navigation in master area.
// The tap event handler is called when user taps the list item.
sap.ui.jsview("view.inbox.Home", {
	getControllerName: function(){
		return "view.inbox.Home";
	},
	createContent : function(oController) {
		var oInboxList = new sap.m.List({
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
		});
		
		// load user data into model
		var data = {
			user: {  	
			    "role": "Doctor",
  	            "id": 7068,
            	"name": "Jewell",
  	            "last_name": "Orr",
            	"department": "Traumatología",
            	"hospital": "La Paz",
            	"email": "jewellorr@zork.com",
  	            "telephone": "657565757"
	        }
		};
			
		// create a Model with this data
		var model = new sap.ui.model.json.JSONModel();
		model.setData(data);
		
		var model2 = new sap.ui.model.json.JSONModel();
		model2.loadData("model/user.json",false,false);
		//sap.ui.getCore().setModel(model2);
		
		
		
        //debugger;
		/*var oPage = new sap.m.Page({
		    id: "user_" + model.oData.user.id,
			icon: "{img>/icon/UI5}",
			title: model.oData.user.role + " " + model.oData.user.name + " " + model.oData.user.last_name,
			content: [oInboxList]
		});*/
		
		var oPage = new sap.m.Page({
		    id: "user_" + model.oData.user.id,
			icon: "{img>/icon/UI5}",
			title: "{/user/role}",
			content: [oInboxList]
		});
		oPage.setModel(model2);
		
		
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