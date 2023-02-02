import React from "react";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { HomeScreen, CompletedScreen } from "../screens";

interface Route {
  name: string;
  component: React.ComponentType,
  options?: BottomTabNavigationOptions
}

type Routes = Array<Route>;

const commonOptions = {
  headerShown: false,
  tabBarShowLabel: false,
}

export const useRoutes = (): Routes => {

  return [
    {
      name: 'Home',
      component: HomeScreen,
      options: { 
        ...commonOptions,
        tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={24} />
      }
    },
    {
      name: 'Completed',
      component: CompletedScreen,
      options: { 
        ...commonOptions,
        tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'list' : 'list-outline'} size={24} />
      }
    }
  ]
}