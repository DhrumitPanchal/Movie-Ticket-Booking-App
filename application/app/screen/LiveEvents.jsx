import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { hp, wp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import Icon from "../../assets/icons";

const LiveEvents = () => {
  return (
    <ScreenWrapper bg={theme.colors.dark}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.h2}>Experience Live Events</Text>
            <Text
              style={[
                styles.h2,
                { marginLeft: 1.6, fontSize: wp(3.6), fontWeight: "light" },
              ]}
            >
              Ahmedabad
            </Text>
          </View>
        </View>
        <View style={styles.ComingSoonContainer}>
          <Text style={styles.text}>Coming Soon</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LiveEvents;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
  },
  header: {
    paddingTop: hp(2),
    paddingVertical: hp(2),
    marginBottom: hp(1.4),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    color: theme.colors.text,
    gap: 4,
  },
  h2: {
    color: theme.colors.text,
    fontSize: wp(5),
    fontWeight: theme.fonts.bold,
  },

  ComingSoonContainer: {
    width: wp(92),
    height: hp(80),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.text,
    fontSize: wp(6),
    fontWeight: theme.fonts.semibold,
  },
});
