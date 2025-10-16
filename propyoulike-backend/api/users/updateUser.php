<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$params = [];
$sql = "UPDATE users SET ";

if(isset($data['role_id'])) { $sql .= "role_id=?, "; $params[] = $data['role_id']; }
if(isset($data['name'])) { $sql .= "name=?, "; $params[] = $data['name']; }
if(isset($data['email'])) { $sql .= "email=?, "; $params[] = $data['email']; }
if(isset($data['phone'])) { $sql .= "phone=?, "; $params[] = $data['phone']; }
if(isset($data['password'])) { $sql .= "password_hash=?, "; $params[] = password_hash($data['password'], PASSWORD_BCRYPT); }
if(isset($data['profile_image'])) { $sql .= "profile_image=?, "; $params[] = $data['profile_image']; }
if(isset($data['status'])) { $sql .= "status=?, "; $params[] = $data['status']; }

$sql = rtrim($sql, ", ") . " WHERE id=?";
$params[] = $data['id'];

$stmt = $conn->prepare($sql);

// Dynamically bind parameters
$types = str_repeat('s', count($params));
$stmt->bind_param($types, ...$params);

if($stmt->execute()){
    echo json_encode(['success'=>true]);
}else{
    echo json_encode(['success'=>false,'error'=>$stmt->error]);
}
?>