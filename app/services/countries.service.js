(function() {

  /**
   * Sample factory
   *
   * You can fetch here some data from API and the use them
   * in controller
   * 
   */

angular
    .module('app')
    .factory('countriesservice', countriesservice);

countriesservice.$inject = ['restfulservice' ];


function countriesservice(restfulservice) {
    var countries = [];

    return {
        initialize : initialize,
        getCountries : getCountries,
        setCountries : setCountries,
        getCountryByIndex : getCountryByIndex 
    };

    function initialize(){     
        restfulservice.get('../../data/countries.json')
            .then(function(d){
                countries = d;
            });
    }

    function getCountries() {
        return countries;
    }

    function setCountries(countries){
        countries = countries;
    }

    function getCountryByIndex(index){
        return countries[index];
    }
}

})();
