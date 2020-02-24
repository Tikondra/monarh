<?php
$to      = 'info@bzcekh.ru, makarovt_t@mail.ru, tikondra47@gmail.com';
$subject = 'Заказ с сайта "Колхети"';
$phone = $_POST['phone'];
$headers = 'From: info@bzcekh.ru' . "\r\n" .
    'Reply-To: info@bzcekh.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (isset($_POST['name']))     $message  = "Имя: {$_POST['name']}\r\n";
if (isset($_POST['phone']))    $message .= "Телефон: {$_POST['phone']}\r\n";

mail($to, $subject, $message, $headers);

?>
