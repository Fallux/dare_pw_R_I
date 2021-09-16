<?php 
// echo "Hello world";
$pointer = fopen('library.json', 'r');
if(flock($pointer, LOCK_SH)){ // will block execution until the write lock is released
    $content = fread($pointer, filesize('library.json')); // will return the correct content
    clearstatcache('library.json'); // clear the file cache for the next function
    $size = filesize('library.json'); // will return the correct size
}
fclose($pointer);
$array = json_decode($content, true);

if (!$array || $content=="")
{
    $array = json_decode('{"knopRed":false,"knopGreen":false,"knopBlue":false}', true);
}
if (isset($_GET['color']))
{
    if ($_GET['color']=='green')
    {
    $array["knopGreen"] = !$array["knopGreen"];
    }
    if ($_GET['color']=='red')
    {
        $array["knopRed"] = !$array["knopRed"];   
    }
    if ($_GET['color']=='blue')
    {
        $array["knopBlue"] = !$array["knopBlue"];  
    }

}
$result = file_put_contents("library.json", json_encode($array), LOCK_EX);
?>