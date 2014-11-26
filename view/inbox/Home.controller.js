sap.ui.controller("view.inbox.Home", {
	
	onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		

	},
	
	onLoadUserData : function () {
		var UserDataModel = new sap.ui.model.json.JSONModel();
		UserDataModel.loadData("model/user.json",false,false);
		sap.ui.getCore().setModel(UserDataModel, "UserDataModel");
		var UserData = UserDataModel.oData.user;
		return UserData;
	},
	
	onLoadWorklist : function () {
		var WorklistModel = new sap.ui.model.json.JSONModel();
		debugger
		WorklistModel.loadData("model/worklist.json",false,false);
		sap.ui.getCore().setModel(WorklistModel, "WorklistModel");
		return WorklistModel;
    },
	onPressWorklistItem : function (event, id) {
        debugger
    },

	onListItemTap: function(oEvent){
		var sTitle = oEvent.getSource().getTitle(), 
			sFilterProperty;
		if(sTitle === "Unread"){
			sFilterProperty = "unread";
		} else if (sTitle === "Important"){
			sFilterProperty = "important";
		}
		
		this.router.navTo("inbox", {inboxType:sFilterProperty});
	}

});