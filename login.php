<?php
ob_start();
$user = 'b211210074@sakarya.edu.tr';
$pass =  'b211210074';

if(isset($_POST['username']))
{
    $username = $_POST['username'];
    $password = $_POST['sifre'];

    if($username == $user && $password == $pass)
    {
        header('location:index.html');

    }
    else
    {
    header('location:login.html');
    }
}
?>
