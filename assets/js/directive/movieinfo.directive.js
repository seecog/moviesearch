angular.module("myApp").directive("movieinfo", function() {
    return {
        templateUrl : './assets/js/directive/movieinfo.html',
        scope    : {
        movie	 : '=', // = : Pass by Reference (<!-- change2 : dont pass {{}} -->trick to remember - object)
        
        }
}
});