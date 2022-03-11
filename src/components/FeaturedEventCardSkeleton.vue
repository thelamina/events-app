<template>
  <div class="block bg-white rounded-lg p-4 w-full m-auto">
    <div
      class="bg-gray-200 h-48 w-full object-cover rounded-lg animate-pulse"
    />
    <div class="bg-white w-full mt-4">
      <div class="bg-gray-200 h-5 rounded w-8/12 animate-pulse" />
      <div class="flex flex-wrap justify-between items-end mt-4">
        <div class="">
          <div class="w-52 h-5 mb-3 rounded bg-gray-200 animate-pulse" />
          <div class="w-44 h-5 mb-3 rounded bg-gray-200 animate-pulse" />
        </div>
        <div class="bg-gray-200 h-10 w-24 animate-pulse py-3 px-5 rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeaturedEventCardSkeleton",
});
</script>
