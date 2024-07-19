import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { Link } from "expo-router";
import HTMLView from "react-native-htmlview";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export const colorStyles = (colorText: any) => {
  return {
    color: colorText,
  };
};

const CarouselCardItem = ({ item, index }: any) => {
  const bgColorStyles = (colorText: any) => {
    return {
      backgroundColor: colorText || "black",
    };
  };

  return (
    <View style={styles.card}>
      <View style={styles.container} key={index}>
        <Image source={{ uri: item.ImageUrl }} style={styles.image} />
        <Image style={styles.brandIcon} source={{ uri: item?.BrandIconUrl }} />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            <HTMLView value={item.Title} stylesheet={styles} />
          </Text>

          <Link
            style={[
              styles.more,
              colorStyles(item?.ListButtonTextBackGroudColor),
            ]}
            href={{
              pathname: "/[id]",
              params: { id: item.Id },
            }}
          >
            Daha Daha
          </Link>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      </View>

      <View
        style={[
          styles.bgCard,
          bgColorStyles(item.ListButtonTextBackGroudColor),
        ]}
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
    position: "relative",
    width: ITEM_WIDTH,
  },
  bgCard: {
    borderRadius: 30,
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: -26,
    height: 100,
    transform: "skewY(4deg)",
    zIndex: 1,
    elevation: 1,
  },
  container: {
    borderWidth: 1,
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
    elevation: 7,
    zIndex: 7,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  image: {
    width: "auto",
    height: 300,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 100,
    borderWidth: 1,
  },
  brandIcon: {
    position: "absolute",
    left: 15,
    bottom: "38%",
    width: 55,
    height: 55,
    borderRadius: 55,
  },
  dayContent: {
    position: "absolute",
    bottom: "38%",
    right: 15,
    width: 100,
    height: 30,
    borderRadius: 30,
    marginBottom: 10,
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
  headerContainer: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
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
