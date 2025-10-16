<?php
require_once '../db.php'; 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

// Fetch properties along with builder and project_unit info
$sql = "SELECT pr.*, b.name AS builder_name
        FROM properties pr
        LEFT JOIN builders b ON pr.builder_id = b.id
        LEFT JOIN projects pu ON pr.project_id = pu.id";

$result = $conn->query($sql);

$properties = [];
while ($row = $result->fetch_assoc()) {
    $properties[] = $row;
}

header('Content-Type: application/json');
echo json_encode($properties, JSON_PRETTY_PRINT);
?>