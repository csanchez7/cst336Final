<?php

//susissssnjsjdkkTESRTTTTT
//not tested-does not include imageurl fields
    include "connect.php";
    $conn = getDBConnection();
   
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $state = $_POST['state'];
    $partyId = $_POST['partyId'];
    $price = $_POST['price'];
    $imgURL = $_POST['imgURL'];
    
    $sql = "INSERT INTO senators 
               (senId, sen_firstName, sen_lastName, state, partyId, imgURL, price)
               VALUES ( DEFAULT, :firstName, :lastName, :state, :partyId, :imgURL, :price)";
            
    $namedParameters = array();
    $namedParameters[':firstName'] = $firstName;
    $namedParameters[':lastName'] = $lastName;
    $namedParameters[':state'] = $state;
    $namedParameters[':partyId'] = $partyId;
    $namedParameters[':price'] = $price;
    $namedParameters[':imgURL'] = $imgURL;
    
    $statement = $conn->prepare($sql);
    $statement->execute($namedParameters);
?>