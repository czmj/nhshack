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
if (!($result = $mysqli->query("SELECT Practitioners.PractitionerCode, Practitioners.Name AS PractitionerName, Practices.PracticeCode, Practices.Name AS PracticeName, Practices.Address1, Practices.Address2, Practices.Address3, Practices.Address4, Practices.Address5, Practices.Postcode FROM Practitioners, Practices WHERE Practitioners.PracticeCode = Practices.PracticeCode AND ((Practitioners.PractitionerCode like @search) || (Practitioners.Name like @search) || (Practices.PracticeCode like @search) || (Practices.Name like @search) || (Practices.Address1 like @search) || (Practices.Address2 like @search) || (Practices.Address3 like @search) || (Practices.Address4 like @search) || (Practices.Address5 like @search) || (Practices.Postcode like @search))
 LIMIT 100;"))) {
	echo "Execute failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
$json_result = array();
while($row = $result->fetch_array(MYSQLI_BOTH)){
	$json_result[]=array('PractitionerCode' => $row['PractitionerCode'],'PractitionerName' => $row['PractitionerName'],'PracticeCode' => $row['PracticeCode'],'PracticeName' => $row['PracticeName'],'Address1' => $row['Address1'],'Address2' => $row['Address2'],'Address3' => $row['Address3'],'Address4' => $row['Address4'],'Address5' => $row['Address5'],'Postcode' => $row['Postcode']);
}
echo json_encode($json_result);
?>