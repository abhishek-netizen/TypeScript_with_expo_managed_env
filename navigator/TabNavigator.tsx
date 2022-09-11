import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomersScreen from "../screens/CustomersScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

export type TabStackParamsList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamsList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator screenOptions={({route})=>({
            tabBarActiveTintColor:"#59C1CC",
            tabBarInactiveTintColor:"gray",
            tabBarIcon : ({focused, color, size}) =>{
                  if(route.name === 'Orders'){
                    return (
                      <Icon 
                        name="users"
                        type="entypo"
                        color={focused ? "#59C1CC" : "gray"}
                      />
                    )
                  }else if(route.name === 'Customers'){
                    return (
                      <Icon
                        name="box"
                        type="entypo"
                        color={focused ? "#59C1CC" : "gray"}
                      />
                    );
                  }
            }
    })}>
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
