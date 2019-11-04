<?php
	header("Access-Control-Allow-Origin: *");
	// read the data.json file in the same folder
	$file = file_get_contents('./data.json');
	echo '[' . $file . ']';
?>