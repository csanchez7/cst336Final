<?php
 function addPurchase()
 {
    include "connect.php";
    $conn = getDBConnection();
    
    $senId = $_POST['Id'];
    $purchaseCost = $_POST['cost'];
    $purchaseDate = $_POST['date'];
    
    $sql = "INSERT INTO purchase 
               (purchaseId, senId, purchaseCost, purchaseDate)
               VALUES ( DEFAULT, :senId, :purchaseCost, :purchaseDate)";
            
    $namedParameters = array();
    $namedParameters[':senId'] = $senId;
    $namedParameters[':purchaseCost'] = $purchaseCost;
    $namedParameters[':purchaseDate'] = $purchaseDate;
    
    $res = new stdClass();
    $res->okay = "";
    
    try {
       $statement = $conn->prepare($sql);
       $statement->execute($namedParameters);
       $res->okay = "okay";
    }

     catch(Exception $e) {
      $res->okay = "error";
   }

   echo json_encode($res);
 }
?>