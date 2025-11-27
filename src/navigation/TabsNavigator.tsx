import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@react-native-vector-icons/ionicons';

import HomeScreen from "../features/home/HomeScreen";
import SearchScreen from "../features/search/SearchScreen";
import ReelsScreen from "../features/reels/ReelsScreen";
import ProfileScreen from "../features/profile/ProfileScreen";

export type TabsParamList = {
    Home: undefined;
    Search: undefined;
    Reels: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#000",
                    borderTopColor: "#333",
                    height: 60,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "";

                    switch (route.name) {
                        case "Home":
                            iconName = focused ? "home" : "home-outline";
                            break;
                        case "Search":
                            iconName = focused ? "search" : "search-outline";
                            break;
                        case "Reels":
                            iconName = focused ? "play-circle" : "play-circle-outline";
                            break;
                        case "Profile":
                            iconName = focused ? "person" : "person-outline";
                            break;
                    }

                    return <Ionicons name={iconName} size={28} color={focused ? "#fff" : "#999"} />;
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Reels" component={ReelsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
