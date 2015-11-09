/**
 * Created by meyacine on 09/11/2015.
 */
app.controller('autreCtrl', function($scope){
    $scope.nom = '';
    $scope.listeNom = [];
    $scope.message='';
    $scope.ajoutePersonne = function(nom){
        if (nom==''){
            $scope.message="Oops you can''t add a person without name :)";
            $('#alerteDialog').modal('show');
        } else {
            if (!isNaN(nom)){
                $scope.message="Your shure O.o have you seen a person called : "+nom+" !";
                $('#alerteDialog').modal('show');
            } else  {
                if ($scope.listeNom.indexOf(nom) < 0) {
                    $scope.listeNom.push(nom);
                    nom='';
                } else {
                    $scope.message='Oops seems like this person is already added';
                    $('#alerteDialog').modal('show');
                }
            }
        }
    };
});
