import users from '../data/users.json';
import { User } from '../types/user';

type checkUserPermissionType = (username: string, password: string) => User;

export const checkUserPermission: checkUserPermissionType = (
  username,
  password
) => {
  const user = users.data.find(
    user => user.username === username && user.password === password
  );
  const defaultUser = { username: '', password: '', permission: 0 };
  return user ? user : defaultUser;
};

type getUserPermissionType = (username: string) => number;

export const getUserPermission: getUserPermissionType = username => {
  const user = users.data.find(user => user.username === username);
  return user ? user.permission : 0;
};
