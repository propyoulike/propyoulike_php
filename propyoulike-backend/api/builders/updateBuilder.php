<?php
require_once '../db.php';
require_once '../cors.php';
header("Content-Type: application/json");

function updateBuilder($conn, $data) {
    if(empty($data['id']) || empty($data['name'])){
        return json_encode(["error"=>"Builder ID and name are required"]);
    }

    if (!filter_var($data['contact_email'], FILTER_VALIDATE_EMAIL)) {
        return json_encode(["error"=>"Invalid email format"]);
    }

    $stmt = $conn->prepare("UPDATE builders SET name=?, description=?, email=?, phone=?, logo_url=?, website=? WHERE id=?");
    $stmt->bind_param("ssssssi", $data['name'], $data['description'], $data['contact_email'], $data['contact_phone'], $data['logo_url'], $data['website'], $data['id']);

    if($stmt->execute()){
        return json_encode(["success"=>true]);
    } else {
        return json_encode(["success"=>false, "error"=>$stmt->error]);
    }
}

$data = $_POST;
echo updateBuilder($conn, $data);
?>