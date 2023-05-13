<html lang="en">
<head>
    <title>Вводи пароль</title>
    <meta charset="utf-8"/>
</head>
<body>
<p>Привет, <?php echo $_SESSION['logged_user']; ?>, ты
    на секретной странице!!! :)</p>

<?php
session_start();

// проверяем, авторизован ли пользователь
if(!isset($_SESSION['logged_user'])) {
    header("Location: index.php");
    exit;
}
?>
</body>
</html>
