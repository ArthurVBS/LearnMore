import Login from '../screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import PERMISSIONS from '../constants/PermissionsConstant';
import StackRoutes from './stack.routes';
import { usePermission } from '../context/PermissionContext';

export default function Routes() {
  const { permission } = usePermission();

  const isExternalUser = () => {
    return permission.permission == PERMISSIONS.EXTERNAL_USER;
  };

  return (
    <NavigationContainer>
      {isExternalUser() ? <Login /> : <StackRoutes />}
    </NavigationContainer>
  );
}
