sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast"
], function (Controller, ODataModel, MessageToast) {
    "use strict";

    return Controller.extend("leaverequestui5.controller.ApplyLeaves", {
        onInit: function () {
            // Initialize the OData model
            this.oDataModel = new ODataModel({
                serviceUrl: "/odata/v2/leavesrv/",
                synchronizationMode: "None"
            });
        },

        onApplyLeave: function () {
            const employeeId = this.byId("employeeId").getValue();
            const startDate = this.byId("startDate").getDateValue();
            const endDate = this.byId("endDate").getDateValue();
            const description = this.byId("description").getValue();

            if (!employeeId || !startDate || !endDate || !description) {
                MessageToast.show("Please fill all fields");
                return;
            }

            const applyLeavePayload = {
                employeeId: parseInt(employeeId),
                startDate: startDate.toISOString().split('T')[0],
                endDate: endDate.toISOString().split('T')[0],
                description: description
            };

            // Call applyLeave action
            this.oDataModel.create("/applyLeave", applyLeavePayload, {
                method: "POST",
                success: function (oData) {
                    MessageToast.show(oData.message || "Leave applied successfully");
                },
                error: function (oError) {
                    let errorMessage = "Error applying leave";

                    
                    var responseText = oError.responseText;

                   
                    var responseObject = JSON.parse(responseText);

                    
                    var errorMessages = responseObject.error.message.value;

                    
                    console.log(errorMessages);


                    if (oError.responseJSON && oError.responseJSON.error && oError.responseJSON.error.message) {
                        errorMessage = oError.responseJSON.error.message;
                    }
                    MessageToast.show(errorMessages);
                    console.error(oError);
                }
            });
        },

        onLeaveBalance: function () {
            const employeeId = this.byId("employeeId").getValue();

            if (!employeeId) {
                MessageToast.show("Please enter Employee ID");
                return;
            }

            const getLeaveBalancePayload = { employeeId: parseInt(employeeId) };

            // Call getLeaveBalance action
            this.oDataModel.create("/getLeaveBalance", getLeaveBalancePayload, {
                method: "POST",
                success: function (oData) {
                    console.log("Response from getLeaveBalance:", oData);
                    if (oData) {
                        this.byId("leaveBalanceText").setText("Remaining Leaves: " + oData.getLeaveBalance.totalLeaves);
                    } else {
                        this.byId("leaveBalanceText").setText("Remaining Leaves: Data not available");
                    }
                }.bind(this),
                error: function (oError) {
                    let errorMessage = "Error fetching leave balance";
                    if (oError.responseJSON && oError.responseJSON.error && oError.responseJSON.error.message) {
                        errorMessage = oError.responseJSON.error.message;
                    }
                    MessageToast.show(errorMessage);
                    console.error(oError);
                }
            });
        }
    });
});
