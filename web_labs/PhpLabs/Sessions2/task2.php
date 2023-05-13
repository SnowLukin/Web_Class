<?php
session_start();
$answer1 = $_POST['answer1'];
$_SESSION['answer1'] = $answer1;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Task 2</title>
</head>
<body>
<h1>Question 2:</h1>
<p>5 * 5 =</p>
<form action="task3.php" method="post">
    <input type="text" name="answer2"/>
    <input type="submit"/>
</form>
</body>
</html>
