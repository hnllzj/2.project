<?php
    include('./conn.php');
    $uname=$_REQUEST['uname'];
    $pwd=$_REQUEST['pwd'];
    $sql1 = "select * from project_users where uname='$uname'";
    $sql2 = "INSERT INTO project_users (uname, pwd) VALUES ( '$uname', '$pwd');";
    $res1 = $mysqli->query($sql1);
    if($res1->num_rows>0){
        echo '{"hasname":true,"msg":"用户名已存在"}';
    }else{
        $mysqli->query($sql2);
        echo '{"hasname":false,"msg":"注册成功"}';
    }
    $mysqli->close();
?>