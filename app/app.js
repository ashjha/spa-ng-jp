/**
 * 
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 * 
 */
(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('app', [
      'ngRoute'
    ])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   * 
   */
  function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix(''); // to remove ! mark from url 

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/countries.html',
        controller: 'CountriesController',
        controllerAs: 'country'
      })
      .when('/country/:id', {
        templateUrl: 'views/country-map.html',
        controller: 'CountryMapController',
        controllerAs: 'map'
      })
      .otherwise({
        redirectTo: '/'
      });

  }

})();