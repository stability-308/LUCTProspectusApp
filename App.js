import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Faculty from "./components/faculty";
import Course from "./components/course";
import Quiz from "./components/Quiz";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {

            let icon;

            if (route.name === "Faculties") icon = "school";
            if (route.name === "Courses") icon = "book";
            if (route.name === "Quiz") icon = "help-circle";

            return <Ionicons name={icon} size={size} color={color} />;
          },
 headerTitle: "LIMKOKWING PROSPECTUS 2026", 
          headerStyle: { backgroundColor: "black" }, 
          headerTintColor: "white", 
          tabBarActiveTintColor: "black", 
          tabBarInactiveTintColor: "black",
          tabBarStyle: { backgroundColor: "white" }
         
          
        })}
      >
        <Tab.Screen name="Faculties" component={Faculty} />
      <tab.Screen name = "courses" component={Course} />
        <Tab.Screen name="Quiz" component={Quiz} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}