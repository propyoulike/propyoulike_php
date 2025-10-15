<?php
header('Content-Type: application/json');
include '../../db.php';

$result = $conn->query("
    SELECT usp.*, spt.name AS service_type_name, p.name AS project_name, prop.type AS property_type
    FROM userserviceprovider usp
    LEFT JOIN serviceprovidertypes spt ON usp.service_provider_type_id = spt.id
    LEFT JOIN projects p ON usp.project_id = p.id
    LEFT JOIN properties prop ON usp.property_id = prop.id
");

$uspList = [];
while($row = $result->fetch_assoc()) $uspList[] = $row;

echo json_encode($uspList);
?>