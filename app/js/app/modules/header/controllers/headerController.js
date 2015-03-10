define(['app/app'], function(app){
	console.group('Loading controller HeaderController');

	app.controller('HeaderController', function HeaderController($scope, $http) {
		$scope.headerTitle = 'AngularJS Boilerplate';
	});

	console.groupEnd();
});