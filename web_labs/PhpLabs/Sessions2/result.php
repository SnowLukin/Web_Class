<?php
session_start();
$answer5 = $_POST['answer5'];
$_SESSION['answer5'] = $answer5;

$correct_answers = array('TS', '25', 'Cascading Style Sheets', 'Kotlin', 'SQL');
$score = 0;

for ($i = 1; $i <= 5; $i++) {
    if (strcasecmp($_SESSION["answer{$i}"], $correct_answers[$i - 1]) == 0) {
        $score++;
    }
}

echo "Your score: $score/5";
session_destroy();
