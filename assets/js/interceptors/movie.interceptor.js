angular.module('myApp').factory('MovieInterceptor',function(){
	
	var obj = {};
	obj.request = function(reqconfig){
		
		var ar = reqconfig.url.split(".");
		console.log('Split request is ',ar[1])
		if(ar[1]=='themoviedb'){
			reqconfig.url = reqconfig.url+"&api_key=8301a21598f8b45668d5711a814f01f6";
		}
		
		console.log('Inside request ',reqconfig)
		return reqconfig;
	}
	obj.requestError = function(config){
		console.log('Inside request error')
		return config;
	}
	
	obj.response = function(resconfig){
		console.log('Inside response')
		return resconfig;
	}
	
	obj.responseError = function(resconfig){
		console.log('Inside response')
		return resconfig;
	}
	return obj;
})

angular.module('myApp').config(function($httpProvider){
	$httpProvider.interceptors.push('MovieInterceptor');
});

