export type User = {
  email: string;
  password: string;
  name: string;
  message: string;
};

export const USERS: User[] = [
  {
    email: 'sean@abc.com',
    password: 'sean123',
    name: 'sean',
    message: 'Hello Cookie',
  },
  {
    email: 'nicholas@abc.com',
    password: 'nicholas',
    name: 'nicholas',
    message: 'Hello Partner!',
  },
];
