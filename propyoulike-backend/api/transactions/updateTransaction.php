<?php
require_once '../cors.php';
header("Content-Type: application/json");
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$sql = "UPDATE transactions SET property_id=?, project_unit_id=?, buyer_id=?, seller_id=?, agent_id=?, channel_partner_id=?, transaction_type=?, price=?, status=?, transaction_date=?, payment_status=? WHERE id=?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iiiiiiisdssi",
    $data['property_id'],
    $data['project_unit_id'],
    $data['buyer_id'],
    $data['seller_id'],
    $data['agent_id'],
    $data['channel_partner_id'],
    $data['transaction_type'],
    $data['price'],
    $data['status'],
    $data['transaction_date'],
    $data['payment_status'],
    $data['id']
);

if($stmt->execute()){
    echo json_encode(['success'=>true]);
}else{
    echo json_encode(['success'=>false,'error'=>$stmt->error]);
}
?>