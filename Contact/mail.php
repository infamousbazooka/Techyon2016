<?php
	require '../phpmailer/PHPMailerAutoload.php';
	date_default_timezone_set('Asia/Calcutta');
	$name = $_POST['name'];
	$email = $_POST['email'];
	$contact = $_POST['contact'];
	$message = $_POST['message'];
	$tos = ["magnsfernandes1295@gmail.com"];
	for ($i=0; $i < 1; $i++) { 
		$body = "Hello Techyon!! I am " . $name . ", my email address is " . $email . " and my contact number is " . $contact . ". My message to you is :\n" . $message;
		$subject="Techyon Contact";
		$mail = new PHPMailer();
		$mail->IsHTML(true); 
		$mail->Host = "relay-hosting.secureserver.net";
		$mail->From = $email;
		$mail->Subject = $subject;
		$mail->Body = $body;
		$mail->WordWrap = 50;
		$mail->AddAddress($tos[$i]);
		if(!$mail->send()) {
			echo "error";
		} else{
			echo "done";
		}
	}
?>