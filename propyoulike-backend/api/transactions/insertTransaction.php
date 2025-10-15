<?php
header('Content-Type: application/json');
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$stmt = $conn->prepare("INSERT INTO transactions (property_id, project_unit_id, buyer_id, seller_id, agent_id, channel_partner_id, transaction_type, price, status, transaction_date, payment_status) VALUES (?,?,?,?,?,?,?,?,?,?,?)");

$stmt->bind_param("iiiiiiisdss",
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
    $data['payment_status']
);

if($stmt->execute()){
    echo json_encode(['success'=>true,'id'=>$stmt->insert_id]);
}else{
    echo json_encode(['success'=>false,'error'=>$stmt->error]);
}
?>