angular.module("myApp").controller('InfoController',function($scope,$routeParams,$http){
	
	
	console.log('Inside info controller ',$routeParams.id)
	$http.get("https://api.themoviedb.org/3/movie/"+$routeParams.id+"?api_key=8301a21598f8b45668d5711a814f01f6").then(function(res){
		console.log('Movie detal is ',JSON.stringify(res))
		$scope.movie = res.data;
		
	})
	.catch(function(err){
		console.log('The error is ',err)
		
	});
	
});