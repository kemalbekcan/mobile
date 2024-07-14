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

interface IDetails {
  ImageUrl: string;
  Title: string;
  Description: string;
}

interface PromotionDetailsProps {
  details?: IDetails | null;
  loading: boolean;
}

const PromotionDetails: FC<PromotionDetailsProps> = ({ details, loading }) => {
  if (!details || loading == true) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.details}>
      <Image style={styles.images} source={{ uri: details?.ImageUrl }} />
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

export default PromotionDetails;

const styles = StyleSheet.create({
  details: {
    height: "100%",
  },
  title: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  images: {
    width: "100%",
    height: 315,
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
