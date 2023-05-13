<?php
session_start();

// Add a timestamp session variable
if (!isset($_SESSION['last_attempt_time'])) {
    $_SESSION['last_attempt_time'] = time();
}

// Add an attempt counter session variable
if (!isset($_SESSION['attempt_count'])) {
    $_SESSION['attempt_count'] = 0;
}

if (isset($_POST['Submit'])) {
    // Check if the time since the last attempt is more than 60 seconds
    if (time() - $_SESSION['last_attempt_time'] > 60) {
        $_SESSION['attempt_count'] = 0;
    } else {
        header("Location: index.php?error=2");
        exit;
    }

    if (($_POST['user_name'] == "cleo") && ($_POST['user_pass'] == "password")) {
        $_SESSION['logged_user'] = $_POST['user_name'];
        header("Location: secretplace.php");
        exit;
    }
    // Increment the attempt counter
    $_SESSION['attempt_count']++;
    $_SESSION['last_attempt_time'] = time();

    if ($_SESSION['attempt_count'] >= 3) {
        header("Location: index.php?error=2");
        exit;
    }
    header("Location: index.php?error=1");
}

