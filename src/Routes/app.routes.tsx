import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import  {Resume}  from "../screens/Resume"; // named import, porque usamos `export function Resume`
import { AppTabRoutesParamList } from "../@types/navigation";

const { Navigator, Screen } = createBottomTabNavigator<AppTabRoutesParamList>();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
        id={undefined}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: "beside-icon"
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="format-list-bulleted" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="dollar-sign" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="pie-chart" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  );
}
