<?php
session_start();
$answer2 = $_POST['answer2'];
$_SESSION['answer2'] = $answer2;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Task 3</title>
</head>
<body>
<h1>Question 3:</h1>
<p>What does 'CSS' stand for?</p>
<form action="task4.php" method="post">
    <input type="text" name="answer3"/>
    <input type="submit"/>
</form>
</body>
</html>
