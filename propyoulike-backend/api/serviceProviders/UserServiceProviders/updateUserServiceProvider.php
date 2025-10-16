<?php
require_once '../cors.php';
header("Content-Type: application/json");
include '../../db.php';

$data = json_decode(file_get_contents("php://input"), true);
$details_json = json_encode($data['details']);

$stmt = $conn->prepare("UPDATE userserviceprovider SET user_id=?, service_provider_type_id=?, project_id=?, property_id=?, details=? WHERE user_id=? AND service_provider_type_id=?");
$stmt->bind_param("iiissii",
    $data['user_id'],
    $data['service_provider_type_id'],
    $data['project_id'],
    $data['property_id'],
    $details_json,
    $data['user_id'],
    $data['service_provider_type_id']
);

if($stmt->execute()){
    echo json_encode(['success'=>true]);
}else{
    echo json_encode(['success'=>false,'error'=>$stmt->error]);
}
?>