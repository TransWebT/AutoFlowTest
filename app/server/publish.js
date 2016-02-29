Meteor.publish('forms', function (/* args */) {
    return Forms.find();
});


