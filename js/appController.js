/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojknockout'],
  function(oj, ko) {
     function ControllerViewModel() {
       var self = this;

       // Router setup
       self.router = oj.Router.rootInstance;
       self.router.configure({
         'dashboard': {label: 'Dashboard', isDefault: true},
         'incidents': {label: 'Incidents'},
         'customers': {label: 'Customers'},
         'about': {label: 'About'}
       });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      // Navigation setup
      self.navData = [
      {name: 'Dashboard', id: 'dashboard'},
      {name: 'Incidents', id: 'incidents'},
      {name: 'Customers', id: 'customers'},
      {name: 'About', id: 'about'}
      ];

      self.goTo = function(data, event){
        console.log(data);
        self.router.go(data.id);
      }

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("App Name");
     }

     return new ControllerViewModel();
  }
);
