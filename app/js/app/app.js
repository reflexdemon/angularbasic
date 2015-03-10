define(['angular'], function(){

	var dependances = [];


	console.group('Initialisation of \'application');
	app = angular.module("app", dependances);
	console.groupEnd();

	return app;
});