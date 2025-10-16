<?php
require_once '../db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

$id = $_POST['id'] ?? '';
$builder_id = $_POST['builder_id'] ?? '';
$name = $_POST['name'] ?? '';
$description = $_POST['description'] ?? '';
$rera = $_POST['rera_number'] ?? '';
$total_area = $_POST['total_area_sqft'] ?? 0;
$status = $_POST['status'] ?? 'Planning';

if(empty($id) || empty($builder_id) || empty($name)){
    die(json_encode(["error"=>"Project ID, Builder ID and name are required"]));
}

$stmt = $conn->prepare("UPDATE projects SET builder_id=?, name=?, rera_number=?, total_area=?, total_units=?, location=?, city=?, config_details=?, gallery=?, master_plan=?, floor_plans=?, payment_schedule=?, loan_approvals=?, appreciation_potential=?, valuation_report=?, updated_at=NOW() WHERE id=?");

$stmt->bind_param("issdiisssssssss",
'builder_id', 'name', 'rera_number', 'total_area', 'total_units', 'location', 'city', 'config_details', 'gallery', 'master_plan', 'floor_plans', 'payment_schedule', 'loan_approvals', 'appreciation_potential', 'valuation_report']);

if($stmt->execute()){
    echo json_encode(["success"=>true]);
} else {
    echo json_encode(["success"=>false, "error"=>$stmt->error]);
}

$stmt->close();
?>