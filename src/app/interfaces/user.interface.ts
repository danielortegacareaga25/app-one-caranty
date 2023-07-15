export enum ROLE {
  ADMIN = 'ADMIN',
  GUEST = 'GUEST',
}

export interface User {
  username: string;
  password: string;
  role: ROLE;
}
