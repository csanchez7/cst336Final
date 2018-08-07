<?php
session_start();

include 'connect.php';
$connect = getDBConnection();

//Checking credentials in database
$sql = "SELECT * FROM users
        WHERE username = :username
        AND password = :password";
$stmt = $connect->prepare($sql);
$data = array(":username" => $_POST['username'], ":password" => sha1($_POST['password']));
$stmt->execute($data);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

//redirecting user to quiz if credentials are valid
if(isset($user['username'])){
    $_SESSION['username'] = $user['username'];
    //header('Location: index.php');
    echo "You have successfully logged in.";
    echo "<a href='logout.php'>Logout</a><br>";
    echo "<a href='index.php'>Return to homepage</a>";
} 
else {
    echo "The values you entered were incorrect.";
    echo "<a href='index.php'>Try Again</a>";
}
?>


