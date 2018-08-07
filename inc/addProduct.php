<?php
//susissssnjsjdkkTESRTTTTT
//not tested-does not include imageurl fields
    include "connect.php";
    $conn = getDBConnection();
   
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $state = $_POST['state'];
    $party = $_POST['party'];
    $price = $_POST['price'];
    
    $sql = "INSERT INTO senators 
               (sen_firstName, sen_lastName, state, party, price)
               VALUES ( :firstName, :lastName, :state, :party, :price)";
            
    $namedParameters = array();
    $namedParameters[':firstName'] = $firstName;
    $namedParameters[':lastName'] = $lastName;
    $namedParameters[':state'] = $state;
    $namedParameters[':party'] = $party;
    $namedParameters[':price'] = $price;
    
    $statement = $conn->prepare($sql);
    $statement->execute($namedParameters);
?>