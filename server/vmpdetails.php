<?PHP
header("Access-Control-Allow-Origin: *");
$mysqli = new mysqli("localhost", "DMD", "MUa2UmQearE6sWfHpNj9", "DMD");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$vpidparam = htmlspecialchars($_GET["vpid"]);
if($vpidparam != ''){
	if (!($mysqli->query("SET @vpid:=$vpidparam;"))) {
		echo "Execute failed: (" . $mysqli->errno . ") " . $mysqli->error;
	}

	if (!($result = $mysqli->query("SELECT VPID AS ID, NM AS NAME FROM VMP WHERE VPID=@vpid;"))) {
		echo "Execute failed: (" . $mysqli->errno . ") " . $mysqli->error;
	}
	$json_result = array();
	while($row = $result->fetch_array(MYSQLI_BOTH)){
		$json_result[]=array('ID' => $row['ID'],'NAME' => $row['NAME'],'DESC' => '');
	}
	echo json_encode($json_result);
}else{
	echo json_encode(array());
}



?>