import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import SearchResultsScreen from "../screens/SearchResults";
import searchResultsTabNavigator from "./SearchResultsTabNavigator";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={"SearchResults"}
        component={searchResultsTabNavigator}
        options={{
          title: "Search your destination",
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;