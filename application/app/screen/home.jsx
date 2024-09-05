import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { theme } from "../../constants/theme";
import { wp, hp } from "../../helpers/common";
import { useRouter } from "expo-router";
import Input from "../../components/Input";
import Icon from "../../assets/icons";
import MoviesCarousel from "../../components/MoviesCarousel";
import ComingMovieCard from "../../components/ComingMovieCard";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg={theme.colors.dark}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.h2,
                { marginLeft: 1.6, fontSize: wp(3.8), fontWeight: "light" },
              ]}
            >
              Welcome cinema 👋🏻
            </Text>
            <Text style={styles.h2}> Let’s relax and watch a movie.</Text>
          </View>

          <TouchableOpacity
              onPress={() => router.push("profile")}
              style={styles.imageContainer}
            >
              <Image
                style={styles.profileImage}
                source={{
                  uri: "https://img.freepik.com/premium-photo/young-man-with-curly-hair-wearing-blue-orange-striped_879987-71733.jpg?size=626&ext=jpg&ga=GA1.1.582193248.1711637755&semt=ais_hybrid",
                }}
              />
            </TouchableOpacity>
          </View>

        <Input
          placeholder="Search movie, cinema, genre..."
          icon={<Icon name={"search"} size={26} strokeWidth={1.6} />}
        />

        <View style={styles.moviesContainer}>
          <View style={styles.moviesContainerHeader}>
            <Text style={styles.moviesContainerTitle}>Now Playing</Text>
            <Pressable onPress={() => router.push("movies")}>
              <Text style={styles.seeAllBtn}>See All</Text>
            </Pressable>
          </View>

          <MoviesCarousel />
        </View>

        <View style={styles.moviesContainer}>
          <View style={styles.moviesContainerHeader}>
            <Text style={styles.moviesContainerTitle}>Coming Soon</Text>
            <Pressable onPress={() => router.push("movies")}>
              <Text style={styles.seeAllBtn}>See All</Text>
            </Pressable>
          </View>
          <ComingMovieCard />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default HomeScreen;

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
    fontSize: wp(4.6),
    fontWeight: theme.fonts.bold,
  },
  imageContainer: {
    height: hp(5),
    width: hp(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.darkLight,
    overflow: "hidden",
  },
  profileImage: {
    height: hp(5),
    width: hp(5),
  },
  moviesContainer: {
    marginTop: hp(1),
  },
  moviesContainerHeader: {
    paddingHorizontal: wp(1),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(1.5),
  },

  moviesContainerTitle: {
    fontSize: hp(2.2),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },

  seeAllBtn: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    color: theme.colors.primary,
    fontSize: hp(1.8),
    fontWeight: theme.fonts.semibold,
  },
});
