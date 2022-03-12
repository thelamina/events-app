<template>
  <section>
    <h3 class="font-bold text-base text-black pb-5">All Events</h3>

    <div
      v-if="props.isLoading"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6"
    >
      <EventCardSkeleton v-for="e in [...Array(8).keys()]" :key="e" />
    </div>

    <div
      v-else-if="props.events.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6"
    >
      <EventCard v-for="event in props.events" :key="event.id" :event="event" />
    </div>
    <p v-if="props.events.length === 0 && !props.isLoading">No events found</p>
    <p v-else>{{ props.error }}</p>
  </section>
</template>

<script lang="ts" setup>
import { IEvent } from "@/types";
import EventCard from "./EventCard.vue";
import EventCardSkeleton from "./EventCardSkeleton.vue";

interface IEventListProps {
  events: IEvent[];
  isLoading: boolean;
  error: string | undefined;
}

const props = withDefaults(defineProps<IEventListProps>(), {
  isLoading: false,
  error: "",
});
</script>
