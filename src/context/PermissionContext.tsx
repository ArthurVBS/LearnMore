import React, { ReactNode, createContext, useContext, useState } from 'react';
import { User } from '../types/user';
import PERMISSIONS from '../constants/PermissionsConstant';

type PermissionContextProps = {
  children: ReactNode;
};

type PermissionContextType = {
  permission: User;
  setPermission: React.Dispatch<React.SetStateAction<User>>;
};

const initialValue = {
  permission: {
    username: '',
    password: '',
    permission: PERMISSIONS.EXTERNAL_USER
  } as User,
  setPermission: () => {}
};

const PermissionContext = createContext<PermissionContextType>(initialValue);

export const usePermission = () => useContext(PermissionContext);

export const PermissionProvider: React.FC<PermissionContextProps> = ({
  children
}) => {
  const [permission, setPermission] = useState<User>(initialValue.permission);

  return (
    <PermissionContext.Provider value={{ permission, setPermission }}>
      {children}
    </PermissionContext.Provider>
  );
};
