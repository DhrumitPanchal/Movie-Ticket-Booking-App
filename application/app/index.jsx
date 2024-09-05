import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "./screen/home";
import WelcomeScreen from "./screen/welcome";
import LoginScreen from "./screen/login";
import ProfileScreen from "./screen/profile";
import MainScreen from "./screen/main";
import Icon from "../assets/icons";
import { theme } from "../constants/theme";
import { hp, wp } from "../helpers/common";
import Movies from "./screen/Movies";
import LiveEvents from "./screen/LiveEvents";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Main Tabs for Home and Profile
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: styles.bottomNavigation }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon
                  name={"home"}
                  size={26}
                  strokeWidth={1.6}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
                <Text
                  style={[
                    styles.iconText,
                    {
                      color: focused ? theme.colors.primary : theme.colors.text,
                    },
                  ]}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabIconContainer}>
                <Icon
                  name={"camera"}
                  size={26}
                  strokeWidth={1.6}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
                <Text
                  style={[
                    styles.iconText,
                    {
                      color: focused ? theme.colors.primary : theme.colors.text,
                    },
                  ]}
                >
                  Movies
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="LiveEvents"
        component={LiveEvents}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabIconContainer}>
                <Icon
                  name={"ticket"}
                  size={26}
                  strokeWidth={1.6}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
                <Text
                  style={[
                    styles.iconText,
                    {
                      color: focused ? theme.colors.primary : theme.colors.text,
                    },
                  ]}
                >
                  Live
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabIconContainer}>
                <Icon
                  name={"user"}
                  size={26}
                  strokeWidth={1.6}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
                <Text
                  style={[
                    styles.iconText,
                    {
                      color: focused ? theme.colors.primary : theme.colors.text,
                    },
                  ]}
                >
                  Profile
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigator for the App
function AppNavigator() {
  // Mock user authentication status
  const isLoggedIn = false; // Set this to `true` to simulate a logged-in user

  return (
    <Stack.Navigator>
      {/* {!isLoggedIn ? (
        <>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      )} */}

      <>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </>
    </Stack.Navigator>
  );
}

// Root App Component
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    // paddingVertica: hp(1),
    // paddingBottom: hp(1),
    backgroundColor: theme.colors.darkLight,
    bottom: 0,
    height: hp(8),
    alignItems: "center",
  },
  tabIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.darkLight,
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  iconText: {
    fontSize: hp(1.1),
    marginTop: hp(0.5),
    fontWeight: theme.fonts.semibold,
    textTransform: "uppercase",
  },
});
