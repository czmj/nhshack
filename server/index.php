<?PHP
header("Access-Control-Allow-Origin: *");
$mysqli = new mysqli("localhost", "DMD", "MUa2UmQearE6sWfHpNj9", "DMD");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$searchparam = htmlspecialchars($_GET["search"]);
if (!($mysqli->query("SET @search:='%$searchparam%';"))) {
	echo "Execute failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
if (!($result = $mysqli->query("SELECT VMP.VPID, VMP.NM AS VNAME, MIN(APID) AS APID, AMP.NM AS ANAME FROM VMP INNER JOIN AMP ON VMP.VPID = AMP.VPID WHERE VMP.NM like @search OR AMP.NM like @search OR AMP.DESCRIPTION like @search GROUP BY VMP.VPID, VMP.NM,AMP.NM ORDER BY VMP.ItemCount DESC, AMP.ItemCount DESC, VMP.NM, AMP.NM LIMIT 100;"))) {
	echo "Execute failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
$json_result = array();
while($row = $result->fetch_array(MYSQLI_BOTH)){
	$json_result[]=array('VPID' => $row['VPID'],'VNAME' => $row['VNAME'],'APID' => $row['APID'],'ANAME' => $row['ANAME']);
}
echo json_encode($json_result);
?>