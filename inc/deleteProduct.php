<?php
//not tested
   include "connect.php";
   $conn = getDBConnection();
   
   $sql = "DELETE FROM senators WHERE senId = :id";
   
   $stmt = $conn->prepare($sql);
   $data = array(":id" => $_POST['id']);
   $stmt->execute($data);
   
   header("Location: admin.php");
?>

