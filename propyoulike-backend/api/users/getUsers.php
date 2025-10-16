<?php
require_once '../db.php';

require_once '../cors.php';
header("Content-Type: application/json");

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

echo json_encode($users, JSON_PRETTY_PRINT);
?>