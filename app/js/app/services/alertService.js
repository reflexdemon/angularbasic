define(['app/app'], function(app){
	console.group('Loading Service AlertService');

	app.factory('AlertService', function ($window){
		return {
			log: function(text){
				$window.alert(text);
			}
		};
	});

	console.groupEnd();
});