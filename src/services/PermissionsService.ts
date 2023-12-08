import PERMISSIONS from '../constants/PermissionsConstant';
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
  const defaultUser = {
    id: -1,
    username: '',
    password: '',
    permission: PERMISSIONS.EXTERNAL_USER
  };
  return user ? user : defaultUser;
};

type getAllUsersPermissionType = () => User[];

export const getAllUsersPermission: getAllUsersPermissionType = () => {
  return users.data;
};
