
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";
 
    return Controller.extend("leaverequestui5.controller.dashboard", {
        onInit: function () {
 
        },
        pressHolidays:function(){
            var route=this.getOwnerComponent().getRouter();
            route.navTo("RouteHolidays")
 
        },
        onApplyLeave:function(){
            var route1 = this.getOwnerComponent().getRouter();
            route1.navTo("RouteApplyLeave")
        },
        myleavespress:function(){
            var route2 = this.getOwnerComponent().getRouter();
            route2.navTo("RouteMyLeaves")
        },
        pressLeavePolicy:function(){
            var route1 = this.getOwnerComponent().getRouter();
            route1.navTo("RouteLeavePolicy")
        }
        
    });
});
 