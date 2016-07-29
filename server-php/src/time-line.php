<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
header('Content-type: application/json');
include ("connection.php");

mysqli_set_charset($conn, "utf8");

$select = "SELECT * FROM timeLine ORDER BY id DESC";
$result = $conn->query($select);

$jsonData  = array();

if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		
	$jsonData[] = $row;

	
	}
}


echo json_encode($jsonData);




















?>