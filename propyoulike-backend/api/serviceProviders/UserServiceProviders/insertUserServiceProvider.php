<?php
require_once '../cors.php';
header("Content-Type: application/json");
include '../../db.php';

$data = json_decode(file_get_contents("php://input"), true);
$details_json = json_encode($data['details']);

$stmt = $conn->prepare("INSERT INTO userserviceprovider (user_id, service_provider_type_id, project_id, property_id, details) VALUES (?,?,?,?,?)");
$stmt->bind_param("iiiss",
    $data['user_id'],
    $data['service_provider_type_id'],
    $data['project_id'],
    $data['property_id'],
    $details_json
);

if($stmt->execute()){
    echo json_encode(['success'=>true,'id'=>$stmt->insert_id]);
}else{
    echo json_encode(['success'=>false,'error'=>$stmt->error]);
}
?>