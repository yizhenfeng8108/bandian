<?php


if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $result = array("msg" => "不支持get请求", "status" => -1);
    print_r(json_encode($result));
    return;
}

if (!(isset($_POST["uname"]) && isset($_POST["upwd"]))) {
    $result = array("msg" => "参数不完整", "status" => -2);
    print_r(json_encode($result));
    return;
}

include "DBhelper.php";

//准备sql语句
$uname=$_POST["uname"];
$upwd=$_POST["upwd"];


$sql=" INSERT INTO `zhanghu` (`u_name`,`u_pwd`) VALUES('".$uname."','".$upwd."')";



$resultData=sqlQuery($sql);
if ($resultData==1){
    $result = array("msg" => "注册成功", "status" => 1);
    print_r(json_encode($result));
}else{
    $result = array("msg" => "注册失败", "status" => -3);
    print_r(json_encode($result));
}




