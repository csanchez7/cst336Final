<?php
    session_start();
    if(!isset($_SESSION['username']) && $_SESSION['valid'] != "true" ){
        header('Location: /cst336Final/login.php');
    }
?>

<!DOCTYPE html>
<html>

<head>
    <title>Admin Panel</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        @import url("css/global.css");
        @import url("css/admin.css");
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" defer></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" defer></script>
    <script src="js/global.js" defer></script>
    <script src="js/admin.js" defer></script>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="index.html"><img src="/cst336Final/img/logos/logo.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link" href="index.html"><i class="fa fa-home"></i> Home</a>
                <a class="nav-item nav-link" href="login.html"><i class="fa fa-sign-out"></i> Log Out</a>
            </div>
        </div>
    </nav>
    <div class="wrapper">
        <header>
            <h1></span>Admin Panel</h1>
            <hr>
        </header>
        <div class="main-content" id="admin-panel">
            <h4>Product:</h4>
                <table id="product-admin-table">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>State</th>
                        <th>Party</th>
                        <th>Img URL</th>
                        <th>Price</th>
                    </tr>
                </table>
            <h4>Reporting:</h4>
            <button>Get Average Product Price</button>
            <button>Get Party Affiliation Count</button>
            <button>Get Last Purchases</button>
        </div>
    </div>
</body>
</html>