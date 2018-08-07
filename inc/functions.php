<?php
   include "connect.php";
   
   $conn = getDBConnection();
   
   //gets the avg price of  all senators
   //returns just the average, not the array
   function getAvgProductPrice()
   {
       global $conn;
       
       $sql = "SELECT AVG(price) as avg FROM senators";
       $stmt = $conn->prepare($sql);
       $stmt->execute();
       $avg = $stmt->fetch(PDO::FETCH_ASSOC);
       
       return $avg[avg];
   }
   
   //gets the party count for each party- not fully tested-is it getting all the parties
   //returns the array
   function getPartyCount()
   {
       global $conn;
       
       $sql = "SELECT party, COUNT(senId) as count 
               FROM senators 
               GROUP BY party";
       $stmt = $conn->prepare($sql);
       $stmt->execute();
       $partyCnt = $stmt->fetch(PDO::FETCH_ASSOC);
 
       return $partyCnt;
   }
   
   //calculates which senator is most expensive
   //returns the array
   function getMostExpensiveSen()
   {
       global $conn;
       
       $sql = "SELECT sen_firstName, sen_lastName, MAX(price) as max FROM senators";
       $stmt = $conn->prepare($sql);
       $stmt->execute();
       $max = $stmt->fetch(PDO::FETCH_ASSOC);
       
       return $max;
   }
   

?>

