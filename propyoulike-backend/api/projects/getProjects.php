<?php
require_once '../db.php'; // 🔹 include the centralized DB connection

header('Content-Type: application/json');

// Fetch projects along with builder name
$sql = "SELECT p.*, b.name AS builder_name
        FROM projects p
        LEFT JOIN builders b ON p.builder_id = b.id";

$result = $conn->query($sql);

$projects = [];
while ($row = $result->fetch_assoc()) {
    $projects[] = $row;
}

header('Content-Type: application/json');
echo json_encode($projects, JSON_PRETTY_PRINT);
?>