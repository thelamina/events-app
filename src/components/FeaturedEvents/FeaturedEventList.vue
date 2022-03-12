<template>
  <section class="mb-5">
    <h3 class="font-bold text-base text-black pb-5">Featured Events</h3>

    <div
      v-if="props.isLoading"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 overflow-x-visible"
    >
      <FeaturedEventCardSkeleton v-for="e in [...Array(2).keys()]" :key="e" />
    </div>
    <Carousel
      :settings="carouselConfig.settings"
      :wrap-around="carouselConfig.wrapAround"
      :autoplay="carouselConfig.autoplay"
      :breakpoints="carouselConfig.breakpoints"
      :transition="carouselConfig.transition"
      v-else
    >
      <Slide v-for="slide in props.events" :key="slide.id" class="gap-6">
        <div class="w-full px-2">
          <FeaturedEventCard :event="slide" :error="error" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script lang="ts" setup>
import { IEvent } from "@/types";
import FeaturedEventCard from "./FeaturedEventCard.vue";
import FeaturedEventCardSkeleton from "./FeaturedEventCardSkeleton.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

interface IEventListProps {
  events: IEvent[];
  isLoading: boolean;
  error: string | undefined;
}

const props = withDefaults(defineProps<IEventListProps>(), {
  isLoading: false,
  error: "",
});

const carouselConfig = {
  settings: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  breakpoints: {
    // 700px and up
    700: {
      itemsToShow: 2,
      snapAlign: "start",
    },
    // 1024 and up
    1024: {
      itemsToShow: 2,
      snapAlign: "start",
    },
  },
  autoplay: 4000,
  wrapAround: true,
  transition: 800,
};
</script>

<style>
.carousel__prev,
.carousel__next {
  background: #fff;
  box-shadow: 0px 4px 10px rgba(36, 79, 190, 0.1);
}
.carousel__icon {
  fill: #372aa4;
}
</style>
