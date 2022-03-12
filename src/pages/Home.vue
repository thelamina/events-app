<template>
  <div class="container mx-auto p-4">
    <div
      class="my-10 mt-20 flex items-center rounded-md w-full bg-white border border-[#E8E8E8] placeholder:text-ash max-w-md"
    >
      <span class="px-4 h-4">
        <img :src="SearchIcon" class="w-full h-full" />
      </span>

      <input
        v-model.trim="filter"
        class="pr-4 py-3 w-full bg-transparent border-0 placeholder:text-ash placeholder:text-sm placeholder:font-sans outline-none"
        placeholder="Search"
        :disabled="isLoading || error"
      />
    </div>

    <FeaturedEventList
      :events="featuredEvents"
      :isLoading="isLoading"
      :error="error"
    />
    <EventList :events="filteredEvents" :isLoading="isLoading" :error="error" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import FeaturedEventList from "@/components/FeaturedEvents/FeaturedEventList.vue";
import EventList from "@/components/AllEvents/EventList.vue";
import SearchIcon from "@/assets/icons/search.svg";
import { getAllEvents } from "../services";
import { IEvent } from "../types";

const events = ref<IEvent[]>([]);
const isLoading = ref<boolean>(false);
const error = ref<string | undefined>(undefined);
const filter = ref<string>("");

const fetchAllEvents = async () => {
  isLoading.value = true;
  try {
    const response = await getAllEvents();
    events.value = response;
    error.value = undefined;
  } catch (err) {
    error.value = (err as { message: string })?.message;
  }
  isLoading.value = false;
};

onMounted(() => {
  fetchAllEvents();
});

const filteredEvents = computed(() => {
  return events.value.filter(
    (event: IEvent) =>
      event.venue.name.toLowerCase().includes(filter.value.toLowerCase()) ||
      event.lineup[0].toLowerCase().includes(filter.value.toLowerCase())
  );
});
const featuredEvents = computed(() => {
  return events.value.slice(0, 4);
});
</script>
