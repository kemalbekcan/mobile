import { Stack, useLocalSearchParams } from "expo-router";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import PromotionDetails from "@/components/promotions/PromotionDetails";
import { StatusBar } from "expo-status-bar";
import usePromotionDetails from "@/hooks/usePromotionDetails";

export default function Page() {
  const { id } = useLocalSearchParams();

  const { details, loading, error } = usePromotionDetails(id);

  return (
    <ThemedSafeAreaView>
      <StatusBar style="auto" />
      <Stack.Screen
        options={{
          title: "Promotion Details",
        }}
      />

      <PromotionDetails details={details} loading={loading} />
    </ThemedSafeAreaView>
  );
}
