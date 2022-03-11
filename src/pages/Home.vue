<template>
  <div class="container mx-auto p-4">
    <div
      class="my-10 mt-20 flex items-center rounded-md w-full bg-white border border-[#E8E8E8] placeholder:text-[#6C757D] max-w-md"
    >
      <span class="px-4">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.77339 0.166656C2.67688 0.166656 0.166656 2.62144 0.166656 5.64956C0.166656 8.67768 2.67688 11.1325 5.77339 11.1325C7.09775 11.1325 8.31486 10.6834 9.27421 9.93256L11.0965 11.71L11.145 11.7508C11.3142 11.8733 11.5541 11.8593 11.7072 11.7092C11.8756 11.5441 11.8752 11.2767 11.7064 11.1121L9.90549 9.35552C10.8212 8.37964 11.3801 7.07843 11.3801 5.64956C11.3801 2.62144 8.8699 0.166656 5.77339 0.166656ZM5.77333 1.0111C8.39289 1.0111 10.5165 3.08778 10.5165 5.64949C10.5165 8.2112 8.39289 10.2879 5.77333 10.2879C3.15376 10.2879 1.03018 8.2112 1.03018 5.64949C1.03018 3.08778 3.15376 1.0111 5.77333 1.0111Z"
            fill="#6C757D"
          />
        </svg>
      </span>

      <input
        v-model.trim="filter"
        @keyup="searchEvents"
        class="pr-4 py-3 w-full bg-transparent border-0 placeholder:text-[#6C757D] placeholder:text-sm placeholder:font-sans outline-none"
        placeholder="Search"
      />
    </div>

    <section class="mb-5">
      <h3 class="font-bold text-base text-[#2F2F2F] pb-5">Featured Events</h3>

      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 overflow-x-visible"
      >
        <FeaturedEventCardSkeleton
          v-for="e in [...Array(2).keys()]"
          :key="e"
          v-show="isLoading"
        />

        <FeaturedEventCard
          v-for="event in featuredEvents"
          :key="event.id"
          :event="event"
          v-show="!isLoading"
        />
      </div>
    </section>

    <section>
      <h3 class="font-bold text-base text-[#2F2F2F] pb-5">All Events</h3>
      <p v-show="filteredEvents.length === 0 && !isLoading">No events found</p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6"
      >
        <EventCardSkeleton
          v-for="e in [...Array(8).keys()]"
          :key="e"
          v-show="isLoading"
        />
        <EventCard
          v-for="event in filteredEvents"
          :key="event.id"
          :event="event"
          v-show="!isLoading"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FeaturedEventCard from "../components/FeaturedEventCard.vue";
import FeaturedEventCardSkeleton from "../components/FeaturedEventCardSkeleton.vue";
import EventCardSkeleton from "../components/EventCardSkeleton.vue";
import EventCard from "../components/EventCard.vue";
import { getAllEvents } from "../services";
import { IEvent } from "../types";

export default defineComponent({
  name: "HomePage",
  components: {
    FeaturedEventCard,
    FeaturedEventCardSkeleton,
    EventCardSkeleton,
    EventCard,
  },

  data() {
    return {
      events: [] as IEvent[],
      isLoading: false,
      error: "",
      filter: "",
      filteredEvents: [] as IEvent[],
    };
  },

  async mounted() {
    this.isLoading = true;
    try {
      const events = await getAllEvents();
      this.events = events;
      this.filteredEvents = events;
      console.log(events);
    } catch (error) {
      // this.error = error.message;
    }
    this.isLoading = false;
  },

  methods: {
    searchEvents() {
      const search = this.filter.toLowerCase();
      this.filteredEvents = [...this.events].filter(
        (event: IEvent) =>
          event.venue.name.toLowerCase().includes(search) ||
          event.lineup[0].toLowerCase().includes(search)
      );
    },
  },

  computed: {
    featuredEvents(): IEvent[] {
      return this.events.slice(0, 2);
    },
  },
});
</script>
