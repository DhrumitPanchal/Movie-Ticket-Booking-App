import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/theme";
import React from "react";
import Home from "./Home";
import Search from "./Search";
import User from "./User";
import CameraVideo from "./Camera";
import TicketStar from "./Ticket";
import Star from "./Star";

const icons = {
  home: Home,
  search: Search,
  user: User,
  camera: CameraVideo,
  ticket: TicketStar,
  star: Star,
};

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.9}
      color={props.color || theme.colors.text}
      {...props}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({});
