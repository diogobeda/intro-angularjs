var app = angular.module('palestrasApp',['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/lista', {
			controller: 'PalestraController',
			templateUrl: 'partials/lista.html'
		})
		.when('/tabela', {
			controller: 'PalestraController',
			templateUrl: 'partials/tabela.html'
		})
		.otherwise({ redirectTo: '/lista' });
});

app.factory('palestraFactory', function () {
	var factory = {},
		palestras = [
			{
				nome: 'YOLO',
				palestrante: 'W00T'
			}, {
				nome: 'Long Johnson',
				palestrante: 'FOSS'
			}
		];
	factory.list = function () {
		return palestras;
	};
	return factory;
});

app.controller('PalestraController', function ($scope, palestraFactory) {
	debugger;
	$scope.palestras = palestraFactory.list();

	$scope.incluir = function () {
		$scope.palestras.push({ 
			nome: $scope.novaPalestra.nome, 
			palestrante: $scope.novaPalestra.palestrante 
		});
	}
});