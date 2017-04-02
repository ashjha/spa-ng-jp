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
    .run(runBlock);

runBlock.$inject = ['countriesservice'];

function runBlock(countriesservice) {
    countriesservice.initialize();        
}

})();
