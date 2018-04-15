angular.module("myApp").service("MovieService",function($http,$q){
	
	this.getPopularKidsMovies = function(){
		var obj = $q.defer();
		$http.get("https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc").then(function(res){
		obj.resolve(res.data.results);
	})
	.catch(function(err){
		obj.reject(err)
	});
	return obj.promise;
	}
	
});