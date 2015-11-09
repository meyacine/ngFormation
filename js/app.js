/**
 * Created by meyacine on 09/11/2015.
 * Angular Application for formation
 */
var app = angular.module('ngFormationApp',['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html'
    }).when('/autres', {
        templateUrl: 'partials/other.html'
    }).otherwise({
        redirectTo: '/home'
    });
}]);
