<?php

/* https://api.telegram.org/bot5260988826:AAH8XC2_SeUzz4BCjdvAt1_bh2QciMP3_EI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['first-form__name'];
$phone = $_POST['first-form__phone'];
$option = $_POST['first-form__option'];
$name2 = $_POST['second-form__name'];
$phone2 = $_POST['second-form__phone'];
$option2 = $_POST['second-form__option'];
$name3 = $_POST['third-form__name'];
$phone3 = $_POST['third-form__phone'];
$option3 = $_POST['third-form__option'];
$device = $_POST['device'];
$token = '5260988826:AAH8XC2_SeUzz4BCjdvAt1_bh2QciMP3_EI';
$chat_id = '-1001779391261';

if ($name !== "" || $phone !== "") {
  $arr = array(
  'Заявка из первой формы' => '',
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Услуга: ' => $option,
  'Устройство: ' => $device,
  'Заявка номер: ' => rand(100000, 999999),
  'Дата заявки: ' => date("d.m.Y")
  );
};

if (!empty($name2) || !empty($phone2)) {
  $arr = array(
  'Заявка из второй формы' => '',
  'Имя: ' => $name2,
  'Телефон: ' => $phone2,
  'Услуга: ' => $option2,
  'Устройство: ' => $device,
  'Заявка номер: ' => rand(100000, 999999),
  'Дата заявки: ' => date("d.m.Y")
  );
};

if (!empty($name3) || !empty($phone3)) {
  $arr = array(
  'Заявка из третьей формы' => '',
  'Имя: ' => $name3,
  'Телефон: ' => $phone3,
  'Услуга: ' => $option3,
  'Устройство: ' => $device,
  'Заявка номер: ' => rand(100000, 999999),
  'Дата заявки: ' => date("d.m.Y")
  );
};


foreach ($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
