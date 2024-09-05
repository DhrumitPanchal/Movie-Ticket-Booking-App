import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { wp, hp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import Icon from "../../assets/icons";
import { MoviesData } from "../../constants/MoviesData";
const Movies = () => {
  const languages = [
    "English",
    "Hindi",
    "Marathi",
    "Tamil",
    "Telugu",
    "Bengali",
    "Gujarati",
    "Punjabi",
    "Kannada",
    "Malayalam",
    "Oriya",
  ];
  return (
    <ScreenWrapper bg={theme.colors.dark}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.h2}>Now Showing</Text>
            <Text
              style={[
                styles.h2,
                { marginLeft: 1.6, fontSize: wp(3.6), fontWeight: "light" },
              ]}
            >
              Ahmedabad | 33 Movies
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push("profile")}
            style={styles.imageContainer}
          >
            <Icon
              name="search"
              size={wp(7)}
              color={theme.colors.text}
              strokeWidth={1.6}
            />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} style={styles.optionsContainer}>
          {languages?.map((item, index) => {
            return (
              <View key={index} style={styles.option}>
                <Text style={styles.optionText}>{item}</Text>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.moviesContainer}>
          {MoviesData?.map((item, index) => {
            return (
              <View key={index} style={styles.card}>
                <Image source={{ uri: item?.url }} style={styles.Image} />
                <View style={styles.moviesDetailsContainer}>
                  <View style={styles.moviesDetails}>
                    <View style={styles.details}>
                      <Icon
                        name={"star"}
                        size={12}
                        color={theme.colors.text}
                        strokeWidth={1.6}
                      />
                      <Text style={styles.detailsText}>8.9</Text>
                    </View>
                    <View style={styles.details}>
                      <Text style={styles.detailsText}>308.4k</Text>
                      <Text style={styles.detailsText}>Votes</Text>
                    </View>
                  </View>

                  <Text style={styles.movieTitle}>{item?.title}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Movies;

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
  optionsContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: wp(1.8),
    paddingBottom: hp(0.2),
  },
  option: {
    height: hp(3.6),
    marginRight: wp(1.8),
    justifyContent: "center",
    paddingHorizontal: wp(4),
    borderWidth: 0.7,
    borderRadius: theme.radius.md,
    borderColor: theme.colors.primaryDark,
  },
  optionText: {
    color: theme.colors.text,
    fontSize: hp(1.4),
  },

  moviesContainer: {
    marginVertical: hp(2),
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: wp(4),
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: wp(43),
  },
  Image: {
    width: wp(43),
    height: hp(32),
    borderRadius: theme.radius.xs,
  },
  moviesDetails: {
    marginTop: hp(0.6),
    paddingHorizontal: wp(2),
    height: hp(3),
    backgroundColor: theme.colors.darkLight,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: wp(43),
    borderRadius: theme.radius.xs,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(1),
  },
  detailsText: {
    fontSize: hp(1.6),
    color: theme.colors.text,
  },
  detailsText: {
    fontSize: hp(1.6),
    color: theme.colors.text,
  },
  movieTitle: {
    marginTop: 2,
    paddingLeft: wp(1),
    fontSize: hp(1.4),
    color: theme.colors.text,
  },
});
