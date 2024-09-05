import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { wp, hp } from "../helpers/common";
import { theme } from "../constants/theme";

const ComingMovieCard = () => {
  const data = [
    {
      url: "https://plus.unsplash.com/premium_photo-1682125311959-a000535c0b19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Peacemaker (2023)",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682125311959-a000535c0b19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Wednesday (2023)",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682125311959-a000535c0b19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Pils - Adventures",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682125311959-a000535c0b19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Avengers: 4",
    },
  ];
  return (
    <View style={styles.container}>
      {data?.map((item, index) => {
        return (
          <View style={styles.itemContainer} key={index}>
            <Image style={styles.image} source={{ uri: item?.url }} />

            <View style={styles.details}>
              <Text style={styles.title}>{item?.title}</Text>
              <Text
                style={[
                  styles.title,
                  { fontWeight: "light", fontSize: hp(1.8) },
                ]}
              >
                Action, Adventure, Comedy
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ComingMovieCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: hp(1.4),
    marginBottom: hp(2.6),
    marginTop: hp(1),
  },

  itemContainer: {
    flexDirection: "row",
    gap: hp(3),
    padding: hp(1.6),
    backgroundColor: theme.colors.darkLight,
    borderRadius: theme.radius.xs,
  },
  image: {
    height: hp(10),
    width: hp(8),
    borderRadius: wp(1),
  },
  details: {
    gap: wp(0.6),
  },
  title: {
    fontSize: wp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
});
