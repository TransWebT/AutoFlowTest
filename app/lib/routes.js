Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});


Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/forms/create', {
    name: 'createForm',
    controller: 'FormsController',
    action: 'create',
    where: 'client'
});