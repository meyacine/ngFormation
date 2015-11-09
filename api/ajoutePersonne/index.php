<?php
    header('Content-Type: application/json');
    $data = json_decode(file_get_contents('php://input'), true);
    $nom = $data['nom'];
    if (!is_numeric($nom)){
        $dbh = new PDO('mysql:host=127.0.0.1;port=3306;dbname=ng_formation', 'root', '');
        $stmt = $dbh->prepare("INSERT INTO personnes VALUES (:nom)");
        $stmt->bindParam(':nom', $nom, PDO::PARAM_STR);
        // call the stored procedure
        $stmt->execute();
    } else {
        echo "{\"mistake\":\"Une personne ne peut avoir un nom numerique! C'est un robot\"}";
    }

?>