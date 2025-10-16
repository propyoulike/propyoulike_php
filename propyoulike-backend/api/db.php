<?php
// db.php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";        // default XAMPP user
$password = "";            // default XAMPP password is empty

//$username = "propyb63_propyouadmin";
//$password = "Qwerpoiu12#"; // 
$dbname = "propyb63_propyoulike_main";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}
?>