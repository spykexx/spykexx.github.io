<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $telenum = $_POST['telenum'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
}

$mailTo = "olsena@lmtdefense.com";
$headers = "From: olsenaaronm@gmail.com";
$txt = "You have received a new email from ".$name.".\n\n".$message."\n\nYou can reach them at ".$mailFrom." and ".$telenum.".";
$subject = "New inquiry from the website from ".$name
mail($mailTo, $subject, $txt, $headers);
header("Location: http://essentialhealthdpc.com/Test/index.html");

?>