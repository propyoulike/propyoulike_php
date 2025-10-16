<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");
include '../db.php';

$result = $conn->query("SELECT * FROM transactions");
$transactions = [];
while($row = $result->fetch_assoc()) $transactions[] = $row;

echo json_encode($transactions);
?>