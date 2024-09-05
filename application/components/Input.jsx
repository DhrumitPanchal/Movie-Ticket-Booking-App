import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { hp, wp } from "../helpers/common";
const Input = (props) => {
  return (
    <View
      style={[styles.container, props.containerStyle && props.containerStyle]}
    >
      {props.icon && props.icon}
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.gray}
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: wp(0.5),
    borderColor: "#464343",
    backgroundColor: "#140f0f",
    borderRadius: theme.radius.lg,
    elevation: 2,
    gap: wp(5),
  },
  input: {
    color: theme.colors.textLight,
    placeholder: "white",
    width: wp(70),
    fontSize: hp(2),
  },
});
