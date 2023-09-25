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

function isWeekend(key: DayOfWeek): boolean {
  return key === DayOfWeek.Saturday || key === DayOfWeek.Sunday;
}
isWeekend(DayOfWeek.Saturday);
