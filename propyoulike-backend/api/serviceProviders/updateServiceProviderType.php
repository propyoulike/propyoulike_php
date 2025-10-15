<?php
header('Content-Type: application/json');
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$stmt = $conn->prepare("UPDATE serviceprovidertypes SET name=?, description=? WHERE id=?");
$stmt->bind_param("ssi", $data['name'], $data['description'], $data['id']);

if($stmt->execute()){
    echo json_encode(['success'=>true]);
}else{
    echo json_encode(['success'=>false,'error'=>$stmt->error]);
}
?>