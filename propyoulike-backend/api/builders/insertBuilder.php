<?php
require_once '../db.php';
require_once '../cors.php';
header("Content-Type: application/json");

// Get POST data
$name = $_POST['name'] ?? '';
$description = $_POST['description'] ?? '';
$email = $_POST['contact_email'] ?? '';
$phone = $_POST['contact_phone'] ?? '';
$logo = $_POST['logo_url'] ?? '';
$website = $_POST['website'] ?? '';

if(empty($name)){
    die(json_encode(["error"=>"Builder name is required"]));
}

// Insert into database
$stmt = $conn->prepare("INSERT INTO builders (name, description, email, phone, logo_url, website, testimonials, brand) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssss", $data['name'], $data['description'], $data['email'], $data['phone'], $data['logo_url'], $data['website'], $data['testimonials'], $data['brand']);

if($stmt->execute()){
    echo json_encode(["success"=>true, "builder_id"=>$stmt->insert_id]);
} else {
    echo json_encode(["success"=>false, "error"=>$stmt->error]);
}

$stmt->close();
?>