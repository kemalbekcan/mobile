import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import PromotionDetails from "@/components/promotions/PromotionDetails";
import { StatusBar } from "expo-status-bar";
import usePromotionDetails from "@/hooks/usePromotionDetails";

export default function Page() {
  const { id } = useLocalSearchParams();

  const { details, loading, error } = usePromotionDetails(id);

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
    <ThemedSafeAreaView>
      <StatusBar style="auto" />
      <Stack.Screen
        options={{
          title: "Promotion Details",
        }}
      />

      <PromotionDetails details={details} />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
