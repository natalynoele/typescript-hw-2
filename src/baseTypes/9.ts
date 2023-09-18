/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
enum Status {
  open = "open",
  close = "close",
}

type PageInfo = {
  title: string;
  likes: number;
  accounts: string[];
  status: Status;
  details?: {
    createdAt: Date;
    updatedAt: Date;
  };
};
const page1: PageInfo = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: Status.open,
  details: {
    createdAt: new Date("2021-01-01"),
    updatedAt: new Date("2021-05-01"),
  },
};

const page2: PageInfo = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: Status.close,
};

export {};
