/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

type WeekDays = keyof typeof Days;

function isWeekend(key: WeekDays) {
  const day = Days[key];
  return day <= Days.Friday ? true : false;
}

isWeekend("Friday");
