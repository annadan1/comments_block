const getDate = (date = "") => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const currentDate = new Date();
  
  if (date === "" || isNaN(Date.parse(date))) {
    date = currentDate;
  };

  if (
    `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}` ===
    `${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    } ${currentDate.getFullYear()}`
  ) {
    return `Сегодня в ${currentDate.getHours()}:${String(
      currentDate.getMinutes()
    ).padStart(2, 0)}`;
  } else if (
    `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}` ===
    `${currentDate.getDate() - 1} ${
      months[currentDate.getMonth()]
    } ${currentDate.getFullYear()}`
  ) {
    return `Вчера в ${currentDate.getHours()}:${String(
      currentDate.getMinutes()
    ).padStart(2, 0)}`;
  } else {
    return `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()} ${currentDate.getHours()}:${String(
      currentDate.getMinutes()
    ).padStart(2, 0)}`;
  }
};

export default getDate;
