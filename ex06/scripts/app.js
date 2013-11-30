var app = angular.module('palestrasApp',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'PalestraController',
			templateUrl: 'partials/lista.html'
		});
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