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

	if (!($result = $mysqli->query("SELECT VMP.VPID, VMP.NM AS VNAME, APID, AMP.NM AS ANAME FROM VMP INNER JOIN AMP ON VMP.VPID = AMP.VPID WHERE AMP.VPID = @vpid ORDER BY VMP.ItemCount, AMP.ItemCount, VMP.NM, AMP.NM;"))) {
		echo "Execute failed: (" . $mysqli->errno . ") " . $mysqli->error;
	}
	$json_result = array();
	while($row = $result->fetch_array(MYSQLI_BOTH)){
		$json_result[]=array('VPID' => $row['VPID'],'VNAME' => $row['VNAME'],'APID' => $row['APID'],'ANAME' => $row['ANAME']);
	}
	echo json_encode($json_result);
}else{
	echo json_encode(array());
}
?>