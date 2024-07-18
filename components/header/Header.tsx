import { useEffect } from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { MainContext, useContext } from "@/store";

const Header = () => {
  const [state, dispatch] = useContext<any>(MainContext);

  const { auth } = state;

  useEffect(() => {
    console.log("auth", auth);
  }, [auth]);

  return (
    <ThemedView style={styles.nav}>
      <ThemedView>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </ThemedView>

      <ThemedView style={styles.navigationActions}>
        {!auth && (
          <TouchableOpacity
            style={styles.button}
            accessibilityLabel="Learn more about this purple button"
            onPress={() =>
              dispatch({
                type: "TOGGLE_AUTH",
              })
            }
          >
            <ThemedText style={styles.buttonText}>Giriş Yap</ThemedText>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.buttonCircle}
          accessibilityLabel="Profile"
          onPress={() =>
            dispatch({
              type: "TOGGLE_AUTH",
            })
          }
        >
          <View style={auth && styles.isLogin}></View>
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
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  isLogin: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 12,
    backgroundColor: "#009639",
  },
  buttonText: {
    color: "white",
  },
});
