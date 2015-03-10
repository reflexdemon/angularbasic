define(['app/app',
	'app/services/alertService'
	], function(app, AlertService){
	
	console.group('Loading controller HomeController');
	app.controller('HomeController', function HomeController($scope, $http, AlertService) {
		$scope.alertService = function(text){
			AlertService.log(text);
		};

		$scope.test = 'World';
	});

	console.groupEnd();
});