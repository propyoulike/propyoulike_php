<?php
require_once '../db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

// Get POST data
$id = $_POST['id'] ?? '';
$name = $_POST['name'] ?? '';
$description = $_POST['description'] ?? '';
$email = $_POST['contact_email'] ?? '';
$phone = $_POST['contact_phone'] ?? '';
$logo = $_POST['logo_url'] ?? '';
$website = $_POST['website'] ?? '';

if(empty($id) || empty($name)){
    die(json_encode(["error"=>"Builder ID and name are required"]));
}

$stmt = $conn->prepare("UPDATE builders SET name=?, description=?, email=?, phone=?, logo_url=?, website=?, testimonials=?, brand=? WHERE id=?");
$stmt->bind_param("ssssssssi", 'name', 'description', 'email', 'phone', 'logo_url', 'website', 'testimonials', 'brand', 'id');

if($stmt->execute()){
    echo json_encode(["success"=>true]);
} else {
    echo json_encode(["success"=>false, "error"=>$stmt->error]);
}

$stmt->close();
?>