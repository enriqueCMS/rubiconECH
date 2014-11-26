sap.ui.jsview("view.detail.Empty", {
		
	createContent : function(oController) {
	    var AppointmentsModel = new sap.ui.model.json.JSONModel();
    	AppointmentsModel.loadData("model/appointments.json",false,false);
    	sap.ui.getCore().setModel(AppointmentsModel, "AppointmentsModel");
	    var Appointments = AppointmentsModel.oData.appointments;
	
	//tabla oTableAppointments
	//var oTableAppointments = new sap.m.Table("tableAppointments");
		
        var oTableAppointments = new sap.m.Table({
            columns: [
                new sap.m.Column({
                header: new sap.m.Label({text:"Time", design: sap.m.LabelDesign.Bold}),
                width: "14%"
                }),
                new sap.m.Column({
                header: new sap.m.Label({text:"Patient", design: sap.m.LabelDesign.Bold}),
                width: "20%"
                }),
                new sap.m.Column({
                header: new sap.m.Label({text:"Reason", design: sap.m.LabelDesign.Bold}),
                width: "10%"
                }),
                new sap.m.Column({
                header: new sap.m.Label({text:"Type", design: sap.m.LabelDesign.Bold}),
                width: "20%"
                }),
                new sap.m.Column({
                header: new sap.m.Label({text:"Payor", design: sap.m.LabelDesign.Bold}),
                width: "10%"
                }),
                new sap.m.Column({
                header: new sap.m.Label({text:"NHC", design: sap.m.LabelDesign.Bold}),
                width: "13%"
                }),
                new sap.m.Column({
                header: new sap.m.Label({text:"Status", design: sap.m.LabelDesign.Bold}),
                width: "13%"
                })
            ]
        });
        
        oTableAppointments.bindItems("/appointments", new sap.m.ColumnListItem({
            cells : [ 
                new sap.m.Text({ text : "{time}"}), 
                new sap.m.Text({ text : "{patient/name} {patient/last_name}"}), 
                new sap.m.Text({ text : "{reason}"}),
                new sap.m.Text({ text : "{type}"}),
                new sap.m.Text({ text : "{payor}"}),
                new sap.m.Text({ text : "{recordId}"}),
                new sap.m.Text({ text : "{status}"}) 
            ] 
        })); 
        
        oTableAppointments.setModel(AppointmentsModel);
        
        //oTableAppointments.setModel(AppointmentsModel);
        //oTableAppointments.bindAggregation("items","/appointments" , item);
					
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

	

