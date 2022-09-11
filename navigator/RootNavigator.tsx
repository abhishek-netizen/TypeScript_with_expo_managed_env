import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

export type RootStackParmaList = {
  Main: undefined;
  MyModal:{ userId: string; name: string }
  Order: {order: any}
}


const RootStack = createNativeStackNavigator<RootStackParmaList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
