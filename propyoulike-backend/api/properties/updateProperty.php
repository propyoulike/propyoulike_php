<?php
require_once '../db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

$id = $_POST['id'] ?? '';
$builder_id = $_POST['builder_id'] ?? '';
$project_unit_id = $_POST['project_unit_id'] ?? NULL;
$unit_number = $_POST['unit_number'] ?? '';
$type = $_POST['type'] ?? 'Flat';
$bedrooms = $_POST['bedrooms'] ?? NULL;
$bathrooms = $_POST['bathrooms'] ?? NULL;
$area_sqft = $_POST['area_sqft'] ?? 0;
$price = $_POST['price'] ?? 0.0;
$status = $_POST['status'] ?? 'Available';

if(empty($id) || empty($builder_id) || empty($type)){
    die(json_encode(["error"=>"Property ID, Builder ID, and Type are required"]));
}

$stmt = $conn->prepare("UPDATE properties SET builder_id=?, project_id=?, type=?, floor=?, facing=?, view_type=?, furnishing=?, balcony_count=?, price=?, sqft=?, floor_plan=?, gallery=?, vastu=?, payment_schedule=?, faq=?, loan_details=?, valuation=?, updated_at=NOW() WHERE id=?");

$stmt->bind_param("iisssssiiddsssss",
'project_id', 'builder_id', 'type', 'floor', 'facing', 'view_type', 'furnishing', 'balcony_count', 'price', 'sqft', 'floor_plan', 'gallery', 'vastu', 'payment_schedule', 'faq', 'loan_details', 'valuation');



if($stmt->execute()){
    echo json_encode(["success"=>true]);
} else {
    echo json_encode(["success"=>false, "error"=>$stmt->error]);
}

$stmt->close();
?>