import React from "react";

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
