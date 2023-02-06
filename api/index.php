<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConn.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM data_survey";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;

    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO data_survey(id, no_pel, jenis, ulasan, created) VALUES(null, :no_pel, :jenis, :ulasan, :created)";
        $stmt = $conn->prepare($sql);
        $created = date('Y-m-d H:i:s');
        $stmt->bindParam(':no_pel', $user->formNomorPelanggan);
        $stmt->bindParam(':jenis', $user->selectedItem);
        $stmt->bindParam(':ulasan', $user->formText);
        $stmt->bindParam(':created', $created);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

        case "PUT":
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE data_survey SET name= :name, email =:email, telp =:telp, updated =:updated WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $updated = date('Y-m-d');
            $stmt->bindParam(':id', $user->id);
            $stmt->bindParam(':no_pel', $user->formNomorPelanggan);
            $stmt->bindParam(':jenis', $user->selectedItem);
            $stmt->bindParam(':ulasan', $user->formText);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    
            case "DELETE":
                $sql = "DELETE FROM data_survey WHERE id = :id";
                $path = explode('/', $_SERVER['REQUEST_URI']);
        
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $path[3]);
        
                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                }
                echo json_encode($response);
                break;
}