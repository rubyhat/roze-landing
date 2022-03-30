<?php

$name = $_POST['first-form__name'];
$phone = $_POST['first-form__phone'];
$name2 = $_POST['second-form__name'];
$phone2 = $_POST['second-form__phone'];
$name3 = $_POST['third-form__name'];
$phone3 = $_POST['third-form__phone'];
$device = $_POST['device'];
$token = '5275316106:AAGtJ1Yak03WybGPJUd_3FwARf4j3fsYcNg';
$chat_id = '-650477682';

if ($name !== '' && $phone !== '') {
  $arr = array(
  'Заявка из первой формы' => '',
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Устройство: ' => $device,
  'Заявка номер: ' => rand(100000, 999999),
  'Дата заявки: ' => date("d.m.Y")
  );
} 

if (!empty($name2) && !empty($phone2)) {
  $arr = array(
  'Заявка из второй формы' => '',
  'Имя: ' => $name2,
  'Телефон: ' => $phone2,
  'Устройство: ' => $device,
  'Заявка номер: ' => rand(100000, 999999),
  'Дата заявки: ' => date("d.m.Y")
  );
}

if (!empty($name3) && !empty($phone3)) {
  $arr = array(
  'Заявка из третьей формы' => '',
  'Имя: ' => $name3,
  'Телефон: ' => $phone3,
  'Устройство: ' => $device,
  'Заявка номер: ' => rand(100000, 999999),
  'Дата заявки: ' => date("d.m.Y")
  );
}

foreach ($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: https://daesuhaggyo.ru/');
//   //echo '<h1> Thank you!</h1>';
// } else {
//   echo "Error";
// }