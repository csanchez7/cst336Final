<?php
function showAllProducts()
{
   include "connect.php";
   $conn = getDBConnection();
   
   $sql = "SELECT senId, sen_firstName, sen_lastName, state, imgURL, price, party
           FROM senators JOIN party_affiliation ON senators.partyId = party_affiliation.partyId";
           
   
   $stmt = $conn->prepare($sql);
   $stmt->execute();
   $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

   echo json_encode($products);
}
?>