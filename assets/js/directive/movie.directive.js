angular.module("myApp").directive("movie", function() {
    return {
        templateUrl : './assets/js/directive/movie.html',
        scope    : {
        info	 : '=' // = : Pass by Reference (<!-- change2 : dont pass {{}} -->trick to remember - object)
        }
}
});
