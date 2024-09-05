import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../components/Button";
const Main = ({ navigation, route, options, back }) => {
  return (
    <View style={styles.container}>
      <Button
        title={"Welcome"}
        onPress={() => navigation.navigate("Welcome")}
      />
      <Button title={"Login"} onPress={() => navigation.navigate("Login")} />
      <Button
        title={"Home"}
        onPress={() => navigation.navigate("MainTabs", { screen: "Home" })}
      />
      <Button
        title={"Movies"}
        onPress={() => navigation.navigate("MainTabs", { screen: "Movies" })}
      />
      <Button
        title={"Live Events"}
        onPress={() =>
          navigation.navigate("MainTabs", { screen: "LiveEvents" })
        }
      />
      <Button
        title={"Profile"}
        onPress={() => navigation.navigate("MainTabs", { screen: "Profile" })}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    gap: 6,
  },
});
