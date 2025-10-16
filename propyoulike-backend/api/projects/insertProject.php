<?php
require_once '../db.php';
require_once '../cors.php';
header("Content-Type: application/json");

// Get POST data
$builder_id = $_POST['builder_id'] ?? '';
$name = $_POST['name'] ?? '';
$description = $_POST['description'] ?? '';
$rera = $_POST['rera_number'] ?? '';
$total_area = $_POST['total_area_sqft'] ?? 0;
$status = $_POST['status'] ?? 'Planning';

if(empty($builder_id) || empty($name)){
    die(json_encode(["error"=>"Builder ID and project name are required"]));
}

$stmt = $conn->prepare("INSERT INTO projects (builder_id, name, rera_number, total_area, total_units, location, city, config_details, gallery, master_plan, floor_plans, payment_schedule, loan_approvals, appreciation_potential, valuation_report) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

$stmt->bind_param("issdiisssssssss",
$data['builder_id'], $data['name'], $data['rera_number'], $data['total_area'], $data['total_units'], $data['location'], $data['city'], $data['config_details'], $data['gallery'], $data['master_plan'], $data['floor_plans'], $data['payment_schedule'], $data['loan_approvals'], $data['appreciation_potential'], $data['valuation_report']);

if($stmt->execute()){
    echo json_encode(["success"=>true, "project_id"=>$stmt->insert_id]);
} else {
    echo json_encode(["success"=>false, "error"=>$stmt->error]);
}

$stmt->close();
?>