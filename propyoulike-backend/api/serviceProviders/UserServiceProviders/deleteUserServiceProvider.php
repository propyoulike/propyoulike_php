<?php
header('Content-Type: application/json');
include '../../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$stmt = $conn->prepare("DELETE FROM userserviceprovider WHERE user_id=? AND service_provider_type_id=?");
$stmt->bind_param("ii", $data['user_id'], $data['service_provider_type_id']);

if($stmt->execute()){
    echo json_encode(['success'=>true]);
}else{
    echo json_encode(['success'=>false,'error'=>$stmt->error]);
}
?>