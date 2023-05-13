<!DOCTYPE html>
<html>
<head>
    <title>Вводи пароль</title>
    <meta charset="utf-8"/>
</head>
<body>
<form action="authorize.php" method="post">
    Логин: <input type="text"
                  name="user_name"><br>
    Пароль: <input type="password"
                   name="user_pass"><br>
    <input type="submit" name="Submit">
</form>
<?php
if (isset($_GET['error'])) {
    if ($_GET['error'] == 1) {
        echo "<p style='color:red;'>Вы ввели неверный пароль!</p>";
    } elseif ($_GET['error'] == 2) {
        echo "<p style='color:red;'>Попытки авторизации исчерпаны на 1 минуту.</p>";
    }
}
?>
</body>
</html>
