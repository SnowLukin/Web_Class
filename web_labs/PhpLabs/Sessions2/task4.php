<?php
session_start();
$answer3 = $_POST['answer3'];
$_SESSION['answer3'] = $answer3;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Task 4</title>
</head>
<body>
<h1>Question 4:</h1>
<p>Which language is used for creating Android applications?</p>
<form action="task5.php" method="post">
    <input type="text" name="answer4"/>
    <input type="submit"/>
</form>
</body>
</html>
