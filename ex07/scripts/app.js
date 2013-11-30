var app = angular.module('palestrasApp',['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
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

		$locationProvider.html5Mode(true);
});

app.controller('PalestraController', function ($scope) {
	$scope.palestras = [
		{
			nome: 'YOLO',
			palestrante: 'W00T'
		},
		{
			nome: 'Long Johnson',
			palestrante: 'FOSS'
		}
	];

	$scope.incluir = function () {
		$scope.palestras.push({ 
			nome: $scope.novaPalestra.nome, 
			palestrante: $scope.novaPalestra.palestrante 
		});
	}
});