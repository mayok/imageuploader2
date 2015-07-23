<?php
$file = file_get_contents("php://input");
$tmpfile = '/tmp/imageuploader2';
file_put_contents($tmpfile, $file);
$filename = md5_file($tmpfile);

// get file extension
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime_type = finfo_file($finfo, $tmpfile);
$file_type = explode("/", $mime_type);

$fqn = dirname(__FILE__).'/images/'.$filename.".".$file_type[1];

if($file_type[0] == "image"){
  if(!file_exists($fqn)) {
    file_put_contents($fqn, $file);
    chmod($fqn, 0644);
  }
  else {
    http_response_code(500);
  }
}

unlink($tmpfile);
?>
