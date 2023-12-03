import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { PermissionProvider } from './src/context/PermissionContext';

export default function App() {
  return (
    <PermissionProvider>
      <StatusBar style="light" />
      <Routes />
    </PermissionProvider>
  );
}
