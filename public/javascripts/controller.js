; (function() {
    angular
        .module('FirstApp')
        .controller('Page1Controller', function($scope) {
            $scope.name = "NM";
           // $scope.timeStamp = (new Date()).getTime();
        })
         .controller('Page2Controller', function($scope) {
            $scope.namem = "hello";
           // $scope.timeStamp = (new Date()).getTime();
        })
            
})();