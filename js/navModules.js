var app = angular.module('navRoutes', ['ngRoute']);
app.controller('navController', function($scope){
	$scope.hello = "Hello World!";
});

app.controller('locationsCtrl', function($scope){
	$scope.hello = "Test Locations!";	
});

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.when('/locations', {
			templateUrl: 'templates/locations.html',
			controller: 'locationsCtrl'	
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		})
		.when('/contact', {
			templateUrl: 'templates/contact.html',
			controller: 'contactCtrl'
		})
		.when('/settings', {
			templateUrl: 'templates/settings.html',
			controller: 'settingsCtrl'
		})
		.otherwise('/');
});
