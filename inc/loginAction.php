<?php
 session_start();
    loginCheck();
   
    function loginCheck(){
        echo "testt";
        if (!empty($_POST['uname']) && !empty($_POST['psw'])) {
    	    echo "testt";
           if ($_POST['uname'] == 'admin' && 
              $_POST['psw'] == '1234') {
              $_SESSION['valid'] = "true";
              $_SESSION['username'] = 'admin';
              header('Location: /cst336Final/admin.php');
            }else{
                $_SESSION['valid'] = "false";
                header('Location: /cst336Final/login.php');
            }
        }
    }
?>