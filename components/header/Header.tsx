import { Image, StyleSheet, Alert, TouchableOpacity } from "react-native";

import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

const Header = () => {
  return (
    <ThemedView style={styles.nav}>
      <ThemedView>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </ThemedView>
      <ThemedView style={styles.navigationActions}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Learn more about this purple button"
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <ThemedText style={styles.buttonText}>Giriş Yap</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonCircle}
          accessibilityLabel="Profile"
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Image source={require("@/assets/images/profile.png")} />
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default Header;

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    height: 40,
    width: 81,
  },
  navigationActions: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "#F40000",
    width: 91,
    height: 40,
    borderRadius: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});
