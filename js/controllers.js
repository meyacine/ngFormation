/**
 * Created by meyacine on 09/11/2015.
 */
app.controller('autreCtrl', function($scope, $http){
    $scope.nom = '';
    $scope.listeNom = [];
    $scope.message='';
    $scope.ajoutePersonne = function(nom){
        if ($scope.listeNom.indexOf(nom) < 0) {

            $http({
                url: 'api/ajoutePersonne/',
                method: "POST",
                data: { 'nom' : nom }
            }).success(function(data){
                if (data.mistake!==undefined){
                    $scope.message=data.mistake;
                    $('#alerteDialog').modal('show');
                } else {
                    $scope.listeNom.push(nom);
                }
            }).error(function(data){
                $scope.message="Erreur de communication avec le serveur";
                $('#alerteDialog').modal('show');
            });
            //TODO : lancer un appel au serveur pour percister les données
            nom='';
        } else {
            $scope.message='Oops seems like this person is already added';
            $('#alerteDialog').modal('show');
        }
    };
});
