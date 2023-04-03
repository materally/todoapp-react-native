import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useRoutes } from './hooks/useRoutes';
import { background } from './consts/ui';
import { FloatButton } from './components/FloatButton';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const routes = useRoutes();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: background.base, borderTopColor: background.base }
        }}
      >
        {
          routes.map(({ name, component, options }) => <Tab.Screen key={name} name={name} component={component} options={options} />)
        }
      </Tab.Navigator>
      <FloatButton />
    </NavigationContainer>
  );
}

export default App;
