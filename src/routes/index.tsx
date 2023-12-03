import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tab.routes';
import PERMISSIONS from '../constants/PermissionsConstant';
import Login from '../screens/Login';
import { usePermission } from '../context/PermissionContext';

export default function Routes() {
  const { permission } = usePermission();

  return (
    <NavigationContainer>
      {permission.permission == PERMISSIONS.EXTERNAL_USER ? (
        <Login />
      ) : (
        <TabRoutes />
      )}
    </NavigationContainer>
  );
}
