app.controller('localidadesCtrl', function($scope, $http){

	$http.get('./json/All-estados.json').success(function(data) {
		$scope.estados = data.estados;
	}).error(function(error) {
		console.error(error)
	});

	$scope.cidade = function(id) {
		if(id){

			// Por uma questão de performace, foi separado os arquivos
			// por id do estado, por tanto, ficará fácil fazer uma função como
			// essa abaixo

			// Mas na pasta json, contém também uma lista de todas as cidades com os id
			// dos estados no mesmo objeto

			// Use-o ;)	
			$http.get('./json/cidade-' + id + '.json').success(function(data) {
				$scope.cidades = data.cidades;
			}).error(function(error) {
				console.error(error)
			});
		}else{
			
			// Exibe a lista inteira de cidades, o que deixa mais pesado
			// Tendo que carregar 292kb, sendo que com cada arquivo será necessário
			// carregar 1kb
			$http.get('./json/All-cidades.json').success(function(data) {
				$scope.cidades = data.cidades;
			}).error(function(error) {
				console.error(error)
			});
		}
	}
});