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
    .directive('countryTile', countryTile);


function countryTile() {
    var directive = {
        restrict: 'EA',
        templateUrl: '../../views/template/country-tile.directive.html',
        transclude:true,
        scope: {
            country: '='
        },
  /*      controller: ExampleController,
        controllerAs: 'map',
        bindToController: true // because the scope is isolated*/
    };

    return directive;
}
/*
ExampleController.$inject = ['$scope'];

function ExampleController($scope) {
    // Injecting $scope just for comparison
    var vm = this;

    vm.min = 3;
}*/


})();