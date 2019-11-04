<?php
	// It will save the received content in the current folder
	file_put_contents('./data.json', file_get_contents('php://input'))
?>