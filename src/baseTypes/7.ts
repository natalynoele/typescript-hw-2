/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

type WeekDays = keyof typeof DayOfWeek;

function isWeekend(key: WeekDays): boolean {
  const day = DayOfWeek[key];
  return day <= DayOfWeek.Saturday ? false : true;
}

isWeekend("Sunday");
