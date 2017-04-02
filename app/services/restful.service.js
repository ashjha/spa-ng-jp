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
    .factory('restfulservice', restfulservice);

restfulservice.$inject = ['$http','$log'];


function restfulservice($http,$log) {
    return {
        get: get
    };

    function get(url) {
        return $http.get(url)
            .then(getCountries)
            .catch(getCountriesFailed);

        function getCountries(response) {
            return response.data;
        }

        function getCountriesFailed(error) {
            $log.error('XHR Failed for getAvengers.' + error.data);
        }
    }
}

})();
