import React from "react";

import { StyleSheet, FlatList } from "react-native";
import { ThemedView } from "../ThemedView";
import useTags from "@/hooks/useTags";
import TagList from "./TagList";

const Tags = () => {
  const { tags, error, loading } = useTags();

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
  tags: {
    marginBottom: 25,
  },
  items: {
    marginHorizontal: 15,
  },
});
