;(function(){
    debugger;
     angular
        .module('FirstApp', 
        ['ui.router'
        ]).config(['$stateProvider', '$urlRouterProvider', '$httpProvider', routeconfig]);
    
    function routeconfig($stateProvider, $urlRouterProvider, $httpProvider){
        $stateProvider
        .state('page1', {
            url:'/page1',
            templateUrl:'templates/Page1.html',
            controller: 'Page1Controller'
        }).state('page1.page2', {
            url:'/page2',
            templateUrl:'templates/Page2.html',
            controller: 'Page2Controller'
        });
        
      return $urlRouterProvider.otherwise('page1')
    }
    
    

 })();

// ; (function(){
//     angular
//         .module('FirstApp',[
//             'ui.router'           
//         ]).config(['$stateProvider', '$urlRouterProvider', '$httpProvider', routeConfiguration])
//     
//     function routeConfiguration($stateProvider, $urlRouterProvider, $httpProvider) {
//          $stateProvider
//             .state('page1', {
//                 url: '/page1',
//                 templateUrl: '/templates/Page1.html',
//                 controller: 'Page1Controller',
//             });
//          
//          return $urlRouterProvider.otherwise('page1')
//     }
// })();