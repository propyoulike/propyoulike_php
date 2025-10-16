<?php
require_once '../cors.php';
header("Content-Type: application/json");
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

// Hash password
$password_hash = password_hash($data['password'], PASSWORD_BCRYPT);

$stmt = $conn->prepare("INSERT INTO users (role_id, name, email, phone, password_hash, profile_image, status) VALUES (?,?,?,?,?,?,?)");
$stmt->bind_param("issssss", 
    $data['role_id'], 
    $data['name'], 
    $data['email'], 
    $data['phone'], 
    $password_hash, 
    $data['profile_image'], 
    $data['status']
);

if($stmt->execute()){
    echo json_encode(['success'=>true,'id'=>$stmt->insert_id]);
}else{
    echo json_encode(['success'=>false,'error'=>$stmt->error]);
}
?>