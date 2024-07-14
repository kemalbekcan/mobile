import React from "react";

import { StyleSheet } from "react-native";

import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import Header from "@/components/header/Header";
import Tags from "@/components/tag/Tags";
import Promotions from "@/components/promotions/Promotions";

export default function HomeScreen() {
  return (
    <ThemedSafeAreaView>
      <Header />
      <Tags />
      <Promotions />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  carousel: {
    marginBottom: 50,
  },
  pagination: {
    marginTop: 10,
  },
});
