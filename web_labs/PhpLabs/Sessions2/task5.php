<?php
session_start();
$answer4 = $_POST['answer4'];
$_SESSION['answer4'] = $answer4;
?>

    <!DOCTYPE html>
    <html>
    <head>
        <title>Task 5</title>
    </head>
    <body>
    <h1>Question 5:</h1>
    <p>What is the acronym of 'Structured Query Language'?</p>
    <form action="result.php" method="post">
        <input type="text" name="answer5"/>
        <input type="submit"/>
    </form>
    </body>
    </html>
<?php
