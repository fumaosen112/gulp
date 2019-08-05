<?php
header('content-type:application/json;charest=utf-8');
// 读取json文件  
$jsonString=file_get_contents('..\json\shou.json');
// 返回读取内容
echo $jsonString;
?>