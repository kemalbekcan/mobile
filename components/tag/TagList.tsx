import React from "react";

import { Image, StyleSheet, View, Text } from "react-native";

type ItemProps = { title: string; img: string };

const TagList = ({ title, img }: ItemProps) => {
  return (
    <>
      <View style={styles.item}>
        <Image style={styles.itemImg} src={img} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

export default TagList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffffff",
    width: "auto",
    height: 36,
    marginVertical: 8,
    marginRight: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 6,
    overflow: "visible",
    borderWidth: 1.5,
    borderColor: "#ECEEEF",
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
  },
  itemImg: {
    width: 24,
    height: 24,
  },
});
