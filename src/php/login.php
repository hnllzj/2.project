<?php
    include('./conn.php');

    $uname= $_REQUEST['uname'];

    $pwd= $_REQUEST['pwd'];
    
    $sql = "select * from project_users where uname='$uname' and pwd='$pwd'";

    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        echo'{"msg":true}';
    }else{
        echo'{"msg":false}';
    }
    $mysqli->close();
?>