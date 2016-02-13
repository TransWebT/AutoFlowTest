/*****************************************************************************/
/* ExecForm: Event Handlers */
/*****************************************************************************/
Template.ExecForm.events({
});

/*****************************************************************************/
/* ExecForm: Helpers */
/*****************************************************************************/
Template.ExecForm.helpers({
    flowDef: [
        {
            "formId": "form1",
            "collectionName": "Forms",
            "collectionId": "_id",
            "nextForm": "form2",
            "schemaFormat": "SimpleSchema",
            "schema": {
                "name": {
                    "type": "String",
                    "label": "Your name",
                    "max": 50
                },
                "address": {
                    "type": "String",
                    "label": "Address",
                    "max": 100
                },
                "email": {
                    "type": "String",
                    "label": "E-mail"
                }
            }
        },
        {
            "formId": "form2",
            "collectionName": "Forms",
            "collectionId": "_id",
            "nextForm": "form1",
            "schemaFormat": "SimpleSchema",
            "schema": {
                "color": {
                    "type": "String",
                    "label": "Favorite color",
                    "defaultValue": "Orange",
                    "allowedValues": [
                        "Purple",
                        "Blue",
                        "Orange",
                        "Green"
                    ]
                }
            }
        }
    ]
});

/*****************************************************************************/
/* ExecForm: Lifecycle Hooks */
/*****************************************************************************/
Template.ExecForm.onCreated(function () {
});

Template.ExecForm.onRendered(function () {
});

Template.ExecForm.onDestroyed(function () {
});
