import React, { useState, useRef } from "react";

import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import usePromotions from "@/hooks/usePromotions";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "@/components/CarouselCardItem";

const Promotions = () => {
  const isCarousel = useRef<Carousel<any>>(null);
  const { promotions, loading, error } = usePromotions();

  const [index, setIndex] = useState<number>(0);

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
    <>
      <View>
        <Carousel
          slideStyle={styles.carousel}
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={promotions}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
        />

        <Pagination
          containerStyle={styles.pagination}
          dotsLength={promotions.length}
          activeDotIndex={index}
          carouselRef={isCarousel.current as any}
          dotStyle={{
            width: 19,
            height: 8,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: promotions[index]?.ListButtonTextBackGroudColor,
          }}
          inactiveDotStyle={{
            width: 8,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    </>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    marginBottom: 50,
  },
  pagination: {
    marginTop: 10,
  },
});
