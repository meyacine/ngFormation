/**
 * Created by meyacine on 09/11/2015.
 */
app.controller('autreCtrl', function($scope){
    $scope.nom = '';
    $scope.listeNom = [];
    $scope.message='';
    $scope.ajoutePersonne = function(nom){
        if ($scope.listeNom.indexOf(nom) < 0) {
            $scope.listeNom.push(nom);
            //TODO : lancer un appel au serveur pour percister les données
            nom='';
        } else {
            $scope.message='Oops seems like this person is already added';
            $('#alerteDialog').modal('show');
        }
    };
});
