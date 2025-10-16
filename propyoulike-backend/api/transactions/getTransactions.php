<?php
require_once '../cors.php';
header("Content-Type: application/json");
include '../db.php';

$result = $conn->query("SELECT * FROM transactions");
$transactions = [];
while($row = $result->fetch_assoc()) $transactions[] = $row;

echo json_encode($transactions);
?>