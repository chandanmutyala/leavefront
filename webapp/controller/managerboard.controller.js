// 


sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast"
], function (Controller, ODataModel, MessageToast) {
    "use strict";

    return Controller.extend("leaverequestui5.controller.managerboard", {
        onInit: function () {
            // Initialize the OData model
            this.oDataModel = new ODataModel({
                serviceUrl: "/odata/v2/leavesrv/",
                synchronizationMode: "None"
            });

            // Set model to view
            this.getView().setModel(this.oDataModel);
        },

        _disableActionButtons: function(oHBox) {
            // Get all buttons inside the HBox and disable them
            var aButtons = oHBox.getItems();
            aButtons.forEach(function(oItem) {
                if (oItem instanceof sap.m.Button) {
                    oItem.setEnabled(false);
                }
            });
        },

        onApproveLeave: function (oEvent) {
            var oButton = oEvent.getSource();
            const context = oButton.getParent().getBindingContext();
            const leaveId = context.getProperty("ID");

            const payload = {
                leaveId: leaveId,
                approve: true
            };

            this.oDataModel.create("/approveLeave", payload, {
                method: "POST",
                success: function (oData) {
                    MessageToast.show(oData.message || "Leave approved successfully");
                    // Refresh the table
                    this.getView().byId("leaveTable").getBinding("items").refresh();
                    // Disable action buttons after approval
                    this._disableActionButtons(oButton.getParent());
                }.bind(this),
                error: function (oError) {
                    let errorMessage = "Error approving leave";
                    if (oError.responseJSON && oError.responseJSON.error && oError.responseJSON.error.message) {
                        errorMessage = oError.responseJSON.error.message;
                    }
                    MessageToast.show(errorMessage);
                    console.error(oError);
                }
            });
        },

        onRejectLeave: function (oEvent) {
            var oButton = oEvent.getSource();
            const context = oButton.getParent().getBindingContext();
            const leaveId = context.getProperty("ID");

            const payload = {
                leaveId: leaveId,
                approve: false
            };

            this.oDataModel.create("/approveLeave", payload, {
                method: "POST",
                success: function (oData) {
                    MessageToast.show(oData.message || "Leave rejected successfully");
                    // Refresh the table
                    this.getView().byId("leaveTable").getBinding("items").refresh();
                    // Disable action buttons after rejection
                    this._disableActionButtons(oButton.getParent());
                }.bind(this),
                error: function (oError) {
                    let errorMessage = "Error rejecting leave";
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
