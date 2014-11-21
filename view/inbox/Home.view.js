// This is the first view in master area and tapping on the list items leads to a page navigation in master area.
// The tap event handler is called when user taps the list item.
sap.ui.jsview("view.inbox.Home", {
	getControllerName: function(){
		return "view.inbox.Home";
	},
	createContent : function(oController) {
	   debugger
	    
		var oInboxList = new sap.m.List({
			inset: true,
			headerText: "Lista de trabajo",
			items: [
				new sap.m.StandardListItem({
					title : "{ids>/ids/USER_DATA}",
					icon : "{img>/icon/INBOX}",
					activeIcon: "{img>/icon/INBOX_ACTIVE}",
					type : sap.m.ListType.Active,
					counter: 3,
					press : [oController.onListItemTap, oController]
				})
			]
		});
		
		var oRestList = new sap.m.List({
			inset: true,
			items: [
				new sap.m.StandardListItem({
					title : "Drafts (Inactive)",
					type : sap.m.ListType.Inactive,
					counter: 8
				}),
				new sap.m.StandardListItem({
					title : "Sent Items (Inactive)",
					type : sap.m.ListType.Inactive
				}),
				new sap.m.StandardListItem({
					title : "Deleted Items (Inactive)",
					type : sap.m.ListType.Inactive
				})
			]
		});

		var oPage = new sap.m.Page({
		    id: "user_data",
			icon: "{img>/icon/UI5}",
			title: "{userData>/user/name}",
			content: [oInboxList, oRestList]
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