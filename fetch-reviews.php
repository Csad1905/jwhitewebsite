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

// Retrieve reviews from the database
$sql = "SELECT * FROM reviews";
$result = $conn->query($sql);

// Create XML output
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<reviews>';

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo '<review>';
        echo '<reviewerName>' . $row['reviewerName'] . '</reviewerName>';
        echo '<rating>' . $row['rating'] . '</rating>';
        echo '<description>' . $row['description'] . '</description>';
        echo '</review>';
    }
}

echo '</reviews>';

$conn->close();
?>
