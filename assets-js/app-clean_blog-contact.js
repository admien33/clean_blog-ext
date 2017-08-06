// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    // not; if baseUrl not defined, baseUrl is the path defined in meta script : data-main
    'paths': {
      // 'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
      'jquery': 'vendor/jquery.2.2.0.min',
      // 'lunr': 'vendor/lunr.min',
      // 'moment': 'vendor/moment-with-fr.2.12.0.min',
      // 'slick': '//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min',
      'picturefill': 'vendor/picturefill.min',
      // 'responsive-nav': 'vendor/responsive-nav.min',
      // 'slidebars': 'vendor/slidebars',
      // 'throttle-debounce': 'plugin/jquery.ba-throttle-debounce.min',
      // 'easing': 'plugin/jquery.easing.1.3.2',
      'bootstrap': 'vendor/bootstrap.3.3.7.min',
      'jqBootstrapValidation': 'plugin/jquery.bootstrap-validation'
      // 'classie': 'vendor/classie'
      
    },
    shim: {
        // 'throttle-debounce': {
        //   deps: ['jquery'],
        //   exports: 'throttle-debounce'
        // },
        'jqBootstrapValidation': {
          deps: ['jquery'],
          exports: 'jqBootstrapValidation'
        },
        // 'easing': {
        //   deps: ['jquery'],
        //   exports: 'easing'
        // },
        'bootstrap': {
          deps: ['jquery'],
          exports: 'bootstrap'
        }        
    }
});


requirejs(['app/common-clean_blog'], function () {
  requirejs(['app/main-clean_blog-contact']);
});