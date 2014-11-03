//On génère une config dédié à l'application pour pouvoir utiliser plusieurs APP sur une même page
appRequire = require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    angular: {
      exports: "angular"
    },
    
    bootstrap:{
      deps: ['jquery']
    },
    
    
    jquery: {
      exports: "$"
    }
    
    
  },

  paths: {
    // Librairies bower
    underscore:         '/js/vendor/underscore/underscore',
    angular:            '/js/vendor/angular/angular',
    
    bootstrap:          '/js/vendor/bootstrap/dist/js/bootstrap',
    
    
    jquery:             '/js/vendor/jquery/jquery',
    
    i18n :              '/js/vendor/requirejs-i18n/i18n',
    
    // Librairies incluse
    Console:            '/js/libs/console/console'
   
  },

  config : {
    // i18n : {
    //   locale: localStorage.getItem('locale') || 'en-us'
    // }
  }

});

appRequire([
  'angular',
  
  'bootstrap',
  
  'app/modules/header/HeaderModule',
  'app/pages/home/HomePage',
  'Console'
], function(){
    angular.bootstrap(document.getElementById('app'),['app']);
});