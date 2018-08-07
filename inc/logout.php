<?php 
   //user should be redirected here when they press the logout button
   session_start();
   
   session_destroy();
   
   header("Location: index.php"); //redirect to homepage
?>

