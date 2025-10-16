<?php
require_once '../db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

$builder_id = $_POST['builder_id'] ?? '';
$project_unit_id = $_POST['project_unit_id'] ?? NULL;
$unit_number = $_POST['unit_number'] ?? '';
$type = $_POST['type'] ?? 'Flat';
$bedrooms = $_POST['bedrooms'] ?? NULL;
$bathrooms = $_POST['bathrooms'] ?? NULL;
$area_sqft = $_POST['area_sqft'] ?? 0;
$price = $_POST['price'] ?? 0.0;
$status = $_POST['status'] ?? 'Available';

if(empty($builder_id) || empty($type)){
    die(json_encode(["error"=>"Builder ID and property type are required"]));
}

$stmt = $conn->prepare("INSERT INTO properties (project_id, builder_id, type, floor, facing, view_type, furnishing, balcony_count, price, sqft, floor_plan, gallery, vastu, payment_schedule, faq, loan_details, valuation) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

$stmt->bind_param("iisssssiiddsssss",
$data['project_id'], $data['builder_id'], $data['type'], $data['floor'], $data['facing'], $data['view_type'], $data['furnishing'], $data['balcony_count'], $data['price'], $data['sqft'], $data['floor_plan'], $data['gallery'], $data['vastu'], $data['payment_schedule'], $data['faq'], $data['loan_details'], $data['valuation']);

if($stmt->execute()){
    echo json_encode(["success"=>true, "property_id"=>$stmt->insert_id]);
} else {
    echo json_encode(["success"=>false, "error"=>$stmt->error]);
}

$stmt->close();
?>