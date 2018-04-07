angular.module("myApp").config(function($routeProvider){
	
	$routeProvider
	.when('/',{
		templateUrl : './home.html' ,
		controller : 'HomeController'
		
	})
	.when('/info/:id',{
		templateUrl : './info.html',
		controller : 'InfoController'
	})
	
});