/* global Firebase */

'use strict';

angular.module('<%= appname %>')
  .controller('MainCtrl', function ($scope, $firebase) {
  	// now we can use $firebase to synchronize data between clients and the server!
    var ref = new Firebase('https://<your-firebase>.firebaseio.com/');
    var sync = $firebase(ref);
    
    $scope.awesomeThings = <%= technologies %>;
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
