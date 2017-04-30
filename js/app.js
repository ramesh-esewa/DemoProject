var app = angular.module('demoApp',['ui.router', 'angular.filter','ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home',{
			url : '/home',
			templateUrl : 'home.html'

	})

	.state('userRegister',{
			url : '/userRegister',
			templateUrl : 'registerForm.html',
			controller : 'registerController'
		})

	
})