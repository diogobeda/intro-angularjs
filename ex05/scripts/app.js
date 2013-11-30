angular.module('palestrasApp',[])
	.controller('PalestraController', function ($scope) {
		$scope.palestras = [
			{
				nome: 'YOLO',
				palestrante: 'W00T'
			},
			{
				nome: 'Long Johnson',
				palestrante: 'FOSS'
			}
		]
	});