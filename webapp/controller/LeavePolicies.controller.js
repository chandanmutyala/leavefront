sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("leaverequestui5.controller.LeavePolicies", {
        onInit: function () {
            var oModel = new JSONModel({
                leavePolicies: [
                    {
                        policyName: "Annual Leave Policy",
                        policyDetails: "20 days per year.\nCarry-forward up to 5 days.\nApply via HR portal."
                    },
                    {
                        policyName: "Sick Leave Policy",
                        policyDetails: "10 days per year.\nMedical certificate required after 2 days.\nNotify supervisor ASAP."
                    },
                    {
                        policyName: "Maternity/Paternity Leave Policy",
                        policyDetails: "Maternity: 12 weeks.\nPaternity: 2 weeks.\nApply 1 month in advance."
                    },
                    {
                        policyName: "Public Holiday Policy",
                        policyDetails: "10 public holidays per year.\nAdditional pay for working on holidays."
                    },
                    {
                        policyName: "Emergency Leave Policy",
                        policyDetails: "Up to 5 days per year.\nFor immediate family emergencies.\nInform HR immediately."
                    },
                    {
                        policyName: "Bereavement Leave Policy",
                        policyDetails: "5 days for immediate family.\n2 days for extended family.\nNotify HR and supervisor."
                    },
                    {
                        policyName: "Compensatory Leave Policy",
                        policyDetails: "Earned for overtime work.\nUse within 3 months.\nApproval from manager required."
                    },
                    {
                        policyName: "Unpaid Leave Policy",
                        policyDetails: "Up to 1 month per year.\nMust exhaust paid leave first.\nApproval required from HR."
                    },
                    {
                        policyName: "Sabbatical Leave Policy",
                        policyDetails: "Available after 5 years of service.\nUp to 6 months.\nApply 3 months in advance."
                    },
                    {
                        policyName: "Medical Leave of Absence Policy",
                        policyDetails: "Extended leave for serious health conditions.\nRequires medical documentation.\nCoordinate with HR for benefits."
                    },
                    {
                        policyName: "Study Leave Policy",
                        policyDetails: "Up to 10 days per year.\nFor professional development.\nApproval from HR and manager."
                    },
                    {
                        policyName: "Leave for Voting Policy",
                        policyDetails: "2 hours off on voting day.\nInform supervisor in advance."
                    },
                    {
                        policyName: "Jury Duty Leave Policy",
                        policyDetails: "Paid leave for duration of duty.\nProvide jury summons to HR."
                    },
                    {
                        policyName: "Religious Leave Policy",
                        policyDetails: "Up to 3 days per year.\nFor religious observances.\nApply 1 week in advance."
                    },
                    {
                        policyName: "Parental Leave Policy",
                        policyDetails: "Additional 4 weeks beyond maternity/paternity leave.\nApply 2 months in advance."
                    },
                    {
                        policyName: "Leave of Absence Policy",
                        policyDetails: "Up to 1 year for personal reasons.\nUnpaid, position held.\nRequires senior management approval."
                    }
                ]
            });
            this.getView().setModel(oModel);
        }
    });
});
