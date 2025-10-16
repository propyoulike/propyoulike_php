<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");
require_once '../db.php';

header('Content-Type: application/json');

$sql = "SELECT * FROM builders";
$result = $conn->query($sql);

$builders = [];
while ($row = $result->fetch_assoc()) {
    $builders[] = $row;
}

echo json_encode($builders, JSON_PRETTY_PRINT);
?>