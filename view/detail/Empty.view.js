sap.ui.jsview("view.detail.Empty", {
		
	createContent : function(oController) {
	    var AppointmentsModel = new sap.ui.model.json.JSONModel();
    	AppointmentsModel.loadData("model/worklist.json",false,false);
    	sap.ui.getCore().setModel(AppointmentsModel, "AppointmentsModel");
	    var Appointments = AppointmentsModel.oData.worklist;
	
	//tabla oTableAppointments
		var oTableAppointments = new sap.m.Table("tableAppointments", "ds");
					
	//oTableAppointments.setModel(AppointmentsModel);
    //oTableAppointments.bindAggregation("items","/appointments" , elementotabla);

        var oPage = new sap.m.Page({
		    id: "pageAppointments",
		    icon: "{img>/icon/UI5}",
		    title: "Rubicon",
			content: [oTableAppointments]
		});
		
		return oPage;
		
		/*return new sap.m.Page({
			content: [
				/*new sap.m.Text({
					text: "This demo application shows you how to use the sap.m.SplitApp control with basic route based navigation handling."
				}).addStyleClass("welcomeText")
			]
		});*/
	}
});

	

