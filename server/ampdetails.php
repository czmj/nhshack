<?PHP
header("Access-Control-Allow-Origin: *");
$mysqli = new mysqli("localhost", "DMD", "MUa2UmQearE6sWfHpNj9", "DMD");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$apidparam = htmlspecialchars($_GET["apid"]);
if($apidparam != ''){
	if (!($mysqli->query("SET @apid:=$apidparam;"))) {
		echo "Execute failed: (" . $mysqli->errno . ") " . $mysqli->error;
	}

	if (!($result = $mysqli->query("SELECT APID AS ID, NM AS NAME, DESCRIPTION FROM AMP WHERE APID=@apid;"))) {
		echo "Execute failed: (" . $mysqli->errno . ") " . $mysqli->error;
	}
	$json_result = array();
	while($row = $result->fetch_array(MYSQLI_BOTH)){
		$json_result[]=array('ID' => $row['ID'],'NAME' => $row['NAME'],'DESC' => $row['DESCRIPTION']);
	}
	echo json_encode($json_result);
}else{
	echo json_encode(array());
}



?>