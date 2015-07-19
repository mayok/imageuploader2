<?php
#$file = file_get_contents("php://input");
$file = $_POST["data"];
$filename = md5_file($file);

file_put_contents(dirname(__FILE__).'/images/'.$filename, $file);
?>
