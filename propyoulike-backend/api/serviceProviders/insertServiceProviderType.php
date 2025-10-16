<?php
require_once '../cors.php';
header("Content-Type: application/json");
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$stmt = $conn->prepare("INSERT INTO serviceprovidertypes (name, description) VALUES (?, ?)");
$stmt->bind_param("ss", $data['name'], $data['description']);

if($stmt->execute()){
    echo json_encode(['success'=>true,'id'=>$stmt->insert_id]);
}else{
    echo json_encode(['success'=>false,'error'=>$stmt->error]);
}
?>