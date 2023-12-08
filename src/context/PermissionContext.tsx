import React, { ReactNode, createContext, useContext, useState } from 'react';
import { User } from '../types/user';
import PERMISSIONS from '../constants/PermissionsConstant';

type PermissionContextProps = {
  children: ReactNode;
};

type PermissionContextType = {
  permission: User;
  login: React.Dispatch<React.SetStateAction<User>>;
  logout: () => void;
};

const initialValue = {
  permission: {
    id: null,
    username: '',
    password: '',
    permission: PERMISSIONS.EXTERNAL_USER
  } as User,
  login: () => {},
  logout: () => {}
};

const PermissionContext = createContext<PermissionContextType>(initialValue);

export const usePermission = () => useContext(PermissionContext);

export const PermissionProvider: React.FC<PermissionContextProps> = ({
  children
}) => {
  const [permission, setPermission] = useState<User>(initialValue.permission);

  const stateValue = {
    permission,
    login: setPermission,
    logout: () => setPermission(initialValue.permission)
  };

  return (
    <PermissionContext.Provider value={stateValue}>
      {children}
    </PermissionContext.Provider>
  );
};
