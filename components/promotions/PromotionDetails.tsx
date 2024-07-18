import React, { FC } from "react";

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import HTMLView from "react-native-htmlview";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";

interface IDetails {
  ImageUrl: string;
  Title: string;
  Description: string;
  BrandIconUrl: string;
}

interface PromotionDetailsProps {
  details?: IDetails | null;
}

const PromotionDetails: FC<PromotionDetailsProps> = ({ details }) => {
  if (!details) {
    return <Text>Err</Text>;
  }

  const oneDay = 24 * 60 * 60 * 1000;

  const today = new Date();
  const endDate = new Date(details.EndDate);
  console.log("today", today);

  console.log("endDATE", endDate);

  const diffDays = Math.round(Math.abs((today - endDate) / oneDay));

  console.log("diff", diffDays);

  return (
    <View style={styles.details}>
      <View style={styles.imagesContent}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Image source={require("@/assets/images/back.png")} />
        </TouchableOpacity>
        <Image style={styles.images} source={{ uri: details?.ImageUrl }} />
        <Image
          style={styles.brandIcon}
          source={{ uri: details?.BrandIconUrl }}
        />
        <View style={styles.dayContent}>
          <Text style={styles.day}>son 12 gün</Text>
        </View>
      </View>

      <Text style={styles.title}>
        <HTMLView value={details.Title} stylesheet={styles} />
      </Text>
      <Text style={styles.description}>
        <HTMLView value={details.Description} stylesheet={styles} />
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Learn more about this purple button"
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <ThemedText style={styles.buttonText}>Hemen Katıl</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(PromotionDetails);

const styles = StyleSheet.create({
  details: {
    height: "100%",
  },
  imagesContent: {
    position: "relative",
    zIndex: 5,
    elevation: 5,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 15,
    zIndex: 10,
    elevation: 10,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#1D1E1C",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  dayContent: {
    position: "absolute",
    zIndex: 1,
    elevation: 1,
    bottom: 10,
    right: 15,
    width: 100,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#1D1E1C",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  day: {
    color: "white",
    fontSize: 12,
  },
  title: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  images: {
    width: "100%",
    height: 305,
    borderBottomLeftRadius: 120,
  },
  brandIcon: {
    position: "absolute",
    bottom: 0,
    left: 10,
    width: 55,
    height: 55,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 55,
  },
  description: {
    color: "black",
    marginTop: 10,
    marginHorizontal: 15,
  },
  p: {
    fontSize: 14,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  button: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#F40000",
    width: "100%",
    height: 40,
    borderRadius: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});
