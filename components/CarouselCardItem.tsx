import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { Link } from "expo-router";
import HTMLView from "react-native-htmlview";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export const colorStyles = (colorText: any) => {
  return {
    color: colorText,
  };
};

const CarouselCardItem = ({ item, index }: any) => {
  const bgColorStyles = (colorText: any) => {
    return {
      backgroundColor: colorText,
    };
  };
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.ImageUrl }} style={styles.image} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          <HTMLView value={item.Title} stylesheet={styles} />
        </Text>
        <Text
          style={[styles.more, colorStyles(item.ListButtonTextBackGroudColor)]}
          onPress={() => console.log("tiklandi")}
        >
          <Link
            href={{
              pathname: "/[id]",
              params: { id: item.Id },
            }}
          >
            Daha Daha
          </Link>
        </Text>
      </View>

      <Text style={styles.body}>{item.body}</Text>
      <View
        style={[styles.card, bgColorStyles(item.ListButtonTextBackGroudColor)]}
      ></View>
    </View>
  );
};

export default CarouselCardItem;

const styles = StyleSheet.create({
  p: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: 10,
  },
  span: {
    color: "black",
  },
  card: {
    borderRadius: 8,
    position: "absolute",
    width: ITEM_WIDTH,
    left: 0,
    bottom: -30,
    height: "100%",
    transform: "skewY(5deg)",
    zIndex: -999,
    elevation: 2,
  },
  container: {
    position: "relative",
    height: 462,
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 1,
    zIndex: 7,
    marginHorizontal: -40,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerContainer: {
    position: "relative",
    zIndex: 10,
    elevation: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: "39%",
    backgroundColor: "white",
  },
  header: {
    marginTop: 10,
    backgroundColor: "white",
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: "auto",
    textAlign: "center",
  },
  more: {
    textAlign: "center",
    marginTop: 10,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
