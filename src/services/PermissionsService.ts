import users from '../data/users.json';

type checkPermissionType = (username: string, password: string) => boolean;

export const checkPermission: checkPermissionType = (username, password) => {
  return users.data.some(
    user => user.username === username && user.password === password
  );
};
