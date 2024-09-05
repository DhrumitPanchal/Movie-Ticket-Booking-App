import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { wp, hp } from "../helpers/common";
import { theme } from "../constants/theme";
import { MoviesData } from "../constants/MoviesData";
const MoviesCarousel = () => {
  return (
    <Carousel
      data={MoviesData}
      loop={true}
      autoplay={true}
      renderItem={({ item, index }) => <MovieCard item={item} index={index} />}
      sliderWidth={wp(92)}
      firstItem={0}
      autoplayInterval={4000}
      itemWidth={wp(54)}
      slideStyle={styles.Carousel}
    />
  );
};

const MovieCard = ({ item, index }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item?.url }} style={styles.Image} />
      <Text style={styles.title}>{item?.title}</Text>
    </View>
  );
};

export default MoviesCarousel;

const styles = StyleSheet.create({
  Carousel: { marginVertical: hp(2), display: "flex", alignItems: "center" },
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: wp(50),
    height: hp(32),
    borderRadius: theme.radius.sm,
  },
  title: {
    color: theme.colors.text,
    fontWeight: "bold",
    marginTop: 10,
  },
});
