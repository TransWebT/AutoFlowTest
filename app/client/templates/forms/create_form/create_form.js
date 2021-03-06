
/*
Tracker.autorun(function (e) {
    editor = AceEditor.instance("formDefEditor", {
        theme:"terminal",
        mode:"json"
    });
    if(editor.loaded!==undefined){
        e.stop();
        editor.insert("Live long and prosper.");
        editor.$blockScrolling = "Infinity";
    }
});
*/

/*****************************************************************************/
/* CreateForm: Event Handlers */
/*****************************************************************************/

Template.CreateForm.events({
    'click #save': function(e, tmpl) {
        //var editorContent = tmpl.find('#EditorContent').value;
        var editorContent = getEditorContent("formDefEditor")
        console.log("in event handler: " + editorContent);
    }
});



function getJsonEditor(editorName) {
    // var aceEditor = Session.get("aceEditorInstance_" + editorName);
    var aceEditor;

    if (window.ace) {
        aceEditor = window.ace.edit(editorName);
    }
    if (aceEditor===undefined) {
        aceEditor = AceEditor.instance(editorName, {
            theme: "terminal",
            mode: "json"
        }, function (editor) {
            editor.setValue('{"myKey": "this is a sample json value"}');
            editor.gotoLine(1);
            editor.$blockScrolling = Infinity;
            editor.session.getLength();
        });
        // Session.set("aceEditorInstance_" + editorName, aceEditor);
    }
    return aceEditor;
}

function getEditorContent(editorName) {
    var jsonEditor = getJsonEditor(editorName);
    var editorContent = jsonEditor.getValue();
    if (editorContent===undefined) {
        return "NO EDITOR CONTENT";
    } else {
        return editorContent;
    }
}

/*****************************************************************************/
/* CreateForm: Helpers */
/*****************************************************************************/
Template.CreateForm.helpers({
    jsonEditor: function() {
        return getJsonEditor("formDefEditor");
    },
    editorContent: function() {
        return getEditorContent("formDefEditor");

    }
    /* ,
    editorContent: function() {
        editor = AceEditor.instance("formDefEditor");
        if(editor.loaded!==undefined) {
            return editor.getValue();
        } else {
            return "NO CONTENT";
        }
    }
    */
});

/*****************************************************************************/
/* CreateForm: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateForm.onCreated(function () {
});

Template.CreateForm.onRendered(function () {
});

Template.CreateForm.onDestroyed(function () {
});

