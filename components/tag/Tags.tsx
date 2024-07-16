import React from "react";

import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { ThemedView } from "../ThemedView";
import useTags from "@/hooks/useTags";
import TagList from "./TagList";

const Tags = () => {
  const { tags, error, loading } = useTags();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <ThemedView style={styles.tags}>
      <FlatList
        style={styles.items}
        horizontal
        data={tags}
        renderItem={({ item }) => (
          <TagList title={item.Name} img={item.IconUrl} />
        )}
        keyExtractor={(item) => item.Id}
      />
    </ThemedView>
  );
};

export default Tags;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tags: {
    marginBottom: 25,
  },
  items: {
    marginHorizontal: 15,
  },
});
