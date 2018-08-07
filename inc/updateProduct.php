<?php
//not tested-does not include imageurl fields
      include "connect.php";
      $conn = getDBConnection();
      
      $firstName = $_POST['firstName'];
      $lastName = $_POST['lastName'];
      $state = $_POST['state'];
      $party = $_POST['party'];
      $price = $_POST['price'];
      $id = $_POST['id'];
    
      $sql = "UPDATE senators
              SET sen_firstName = :firstName, sen_lastName = :lastName, state = :state,
                  party = :party, price = :price
              WHERE senId = :id";
                  
      $namedParameters = array();
      $namedParameters[':firstName'] = $firstName;
      $namedParameters[':lastName'] = $lastName;
      $namedParameters[':state'] = $state;
      $namedParameters[':party'] = $party;
      $namedParameters[':price'] = $price;
      $namedParameters[':id'] = $id;
      
      $statement = $conn->prepare($sql);
      $statement->execute($namedParameters);

?>


       