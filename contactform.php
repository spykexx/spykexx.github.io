<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $telenum = $_POST['phone'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
}

$subject = "New Inquiry From Website!";
$mailTo = "olsena@lmtdefense.com, alyssa@essentialhealthdpc.com";
$headers = "From: contact@essentialhealthdpc.com";
$txt = "You have received a new email from ".$name.".\n\n".$message."\n\nThey Can be contacted at ".$mailFrom." or ".$telenum;
mail($mailTo, $subject, $txt, $headers);
header("Location: index.html");


?>