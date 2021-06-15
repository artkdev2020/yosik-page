<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
   // $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'imap.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'yosik.page@gmail.com';                 // SMTP username
    $mail->Password = 'yosik.pageVasilyKrol';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

	$mail->SMTPOptions = array(
    	'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    		)
	);

    //Recipients
    $mail->setFrom('yosik.page@gmail.com', 'Test');
    $mail->addAddress('artkdev2020@gmail.com');     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = "Contact data";

    $body = '<h1>Yosik this is new contact data</h1>';

    if(trim(!empty($_POST['name']))) {
        $body .='<p><strong>Name : </strong>' .$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))) {
        $body .='<p><strong>Email : </strong>' .$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['phone']))) {
        $body .='<p><strong>Phone : </strong>' .$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['text']))) {
        $body .='<p><strong>Message : </strong>' .$_POST['text'].'</p>';
    }

    $mail->Body = $body;
    if(!$mail->send()) {
        $message = "Error";
    } else {
        $message = "mail send";
    }

    $response = ['message' => $message ];

    header('Content-type: application/json');
    echo json_encode($response);

} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

?>