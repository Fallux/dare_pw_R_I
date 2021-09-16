<?php 
// echo "Hello world";
$pointer = fopen('../../assets/js/library.json', 'r');
if(flock($pointer, LOCK_SH)){ // will block execution until the write lock is released
    $content = fread($pointer, filesize('../../assets/js/library.json')); // will return the correct content
    clearstatcache('../../assets/js/library.json'); // clear the file cache for the next function
    $size = filesize('../../assets/js/library.json'); // will return the correct size
}
fclose($pointer);
$array = json_decode($content, true);

if (!$array || $content=="")
{
    $array = json_decode('{"knopRed":false,"knopGreen":false,"knopBlue":false}', true);
}
if (isset($_GET['knopRed', 'knopGreen', 'knopBlue']))
{
    $array["knopRed","knopGreen","knopBlue"] = $_GET['knopRed', 'knopGreen', 'knopBlue'];
}
$result = file_put_contents("data.json", json_encode($array), LOCK_EX);
?>