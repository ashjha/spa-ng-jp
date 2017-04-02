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
    .controller('CountryMapController', CountryMapController);

  CountryMapController.$inject = ['$log','$location' ,'$routeParams','countriesservice'];


  function CountryMapController($log, $location, $routeParams, countriesservice) {
/*
    var vm = this;
    vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    vm.country = countriesservice.getCountryByIndex($routeParams.id);
    
    if('undefined' == typeof vm.country){
      $location.path('/');
    }*/

   // 'controller as' syntax
    var self = this;
      self.isCordinates=false;
         self.cities = [
              {
                  city : 'India',
                  desc : 'This is the best country in the world!',
                  lat : 23.200000,
                  long : 79.225487
              },
              {
                  city : 'New Delhi',
                  desc : 'The Heart of India!',
                  lat : 28.500000,
                  long : 77.250000
              },
              {
                  city : 'Mumbai',
                  desc : 'Bollywood city!',
                  lat : 19.000000,
                  long : 72.90000
              },
              {
                  city : 'Kolkata',
                  desc : 'Howrah Bridge!',
                  lat : 22.500000,
                  long : 88.400000
              },
              {
                  city : 'Chennai  ',
                  desc : 'Kathipara Bridge!',
                  lat : 13.000000,
                  long : 80.250000
              }
          ];

              // show map 

             
                  var mapOptions = {
                    zoom: 4,
                    center: new google.maps.LatLng(25,80),
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }
              self.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
             
              self.map = new google.maps.Map(document.getElementById('map'), mapOptions);   


               var showMap = function(info) {
              
                var info=JSON.parse(info);

                removeOldPosition();
                 
                  var marker = new google.maps.Marker({
                      map: self.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.city
                  });
                  self.isCordinates=true;

                  self.lat=info.lat;
                  self.log=info.long;
        
                  marker.content = '<div class="infoWindowContent">'+info.desc+'</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open(self.map, marker);
                  });
                  
                  self.markers.push(marker);

              }

              

              var generatemapMarks = function() {

                for (i = 0; i < cities.length; i++){
                  createMarker(cities[i]);
              }

              } 

             
              self.change = function(log,lat) {
                removeOldPosition();
                 var marker = new google.maps.Marker({
                      map: self.map,
                      position: new google.maps.LatLng(lat,log),
                  });
                 self.markers.push(marker);
              } 

              
              

              self.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

              self.start = function(val){
                showMap(val);
              }

              var removeOldPosition = function() {

                for(i=0; i<self.markers.length; i++){
                    self.markers[i].setMap(null);
                }

              } 


  }


})();