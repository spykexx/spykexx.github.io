<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
}

$mailTo = "olsena@lmtdefense.com";
$headers = "From: My Website";
$txt = "You have received a new email from ".$name.".\n\n".$message;
mail($mailTo, $subject, $txt, $headers);
header("Location: index.html");

?>