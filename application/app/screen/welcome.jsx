import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import Button from "../../components/Button";
import { useRouter } from "expo-router";

function Welcome() {
  const router = useRouter();
  return (
    <ScreenWrapper bg={theme.colors.dark}>
      <StatusBar style="dark" />
      <View style={style.container}>
        {/* <Image
          style={style.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        /> */}

        <View style={{ gap: 20 }}>
          <Text style={style.title}>LinkUp!</Text>
          <Text style={style.punchline}>
            Where every thought finds a home and every image tells story,
          </Text>
        </View>

        <View style={style.footer}>
          <Button
            title="Getting Started"
            onPress={() => router.push("signup")}
          />

          <View style={style.bottomTextContainer}>
            <Text style={style.loginText}>Already have an account!</Text>
            <Pressable onPress={() => router.push("login")}>
              <Text
                style={[
                  style.loginText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Welcome;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: wp(4),
    paddingTop: hp(10),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignItems: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extrabold,
  },
  punchline: {
    color: theme.colors.text,
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    textAlign: "center",
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
