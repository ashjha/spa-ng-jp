/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
(function() {

  angular
    .module('app')
    .controller('CountriesController', CountriesController);

  CountriesController.$inject = ['$log','$location','countriesservice'];


  function CountriesController($log,$location,countriesservice) {
        
      var vm = this;

      vm.countries = countriesservice.getCountries();

      vm.getDetailsOfCountry = function (country , index){       
          $location.path(`/country/${index}`);
      }

  }


})();