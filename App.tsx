import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

export default function App() {
  const [hasAccess, setHasAccess] = useState(false);

  return (
    <>
      <StatusBar style="light" />

      {hasAccess && <Home setHasAccess={setHasAccess} />}

      {!hasAccess && <Login setHasAccess={setHasAccess} />}
    </>
  );
}
