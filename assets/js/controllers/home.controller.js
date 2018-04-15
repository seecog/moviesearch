angular.module("myApp").controller('HomeController',function($scope,$http,MovieService){
	
	$scope.popular_movies = MovieService.getPopularKidsMovies().then(function(res){
		console.log('The net response is ',res)
		$scope.popular_movies =  res;
		
	})
	.catch(function(err){
		console.log('The error is ',err)
	})
	
	
});