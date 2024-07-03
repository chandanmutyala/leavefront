sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/odata/v2/ODataModel"
], function(Controller, ODataModel) {
  "use strict";

  return Controller.extend("leaverequestui5.controller.myleaves", {
      onInit: function() {
          console.log("Controller initialized");
          // Initialize the OData model
          this.oDataModel = new ODataModel({
              serviceUrl: "/odata/v2/leavesrv/",
              synchronizationMode: "None"
          });

          // Set model to view
          this.getView().setModel(this.oDataModel);
      },

      onBeforeRendering: function() {
          console.log("Before rendering");
          // Refresh the table data
          this.getView().byId("leaveTable").getBinding("items").refresh();
      }
  });
});
