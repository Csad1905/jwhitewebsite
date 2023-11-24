if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "coreysadler811@gmail.com"; // Replace with the recipient's email address
    $subject = "New Contact Form Submission";
    $messageBody = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
}