<?php
header('Content-Type: application/json');
include '../db.php';

$result = $conn->query("SELECT * FROM serviceprovidertypes");
$types = [];
while($row = $result->fetch_assoc()) $types[] = $row;

echo json_encode($types);
?>