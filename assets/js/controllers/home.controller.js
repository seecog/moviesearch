angular.module("myApp").controller('HomeController',function($scope,$http){
	
	
	console.log('Inside home controller ')
	$http.get("https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=8301a21598f8b45668d5711a814f01f6").then(function(res){
		console.log(JSON.stringify(res.data.results))
		$scope.popular_movies = res.data.results;
		
	})
	.catch(function(err){
		console.log('The error is ',err)
		
	});
	
});