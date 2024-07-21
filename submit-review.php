<?php
// Establish connection to your database
$servername = "localhost";
$username = "u605670967_Csad1905";
$password = "Csad1155@";
$dbname = "u605670967_reviews";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get values from the form submission
$reviewerName = $_POST['reviewerName'];
$rating = $_POST['rating'];
$description = $_POST['description'];

// Store the review in the database
$sql = "INSERT INTO reviews (reviewerName, rating, description) VALUES ('$reviewerName', '$rating', '$description')";

if ($conn->query($sql) === TRUE) {
    echo "Review submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>