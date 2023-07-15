import { ROLE, User } from '../interfaces/user.interface';

export const UsersMock: User[] = [
  {
    username: 'admin',
    password: 'admin',
    role: ROLE.ADMIN,
  },
  {
    username: 'guest',
    password: 'guest',
    role: ROLE.GUEST,
  },
];
