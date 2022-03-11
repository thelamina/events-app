<template>
  <nav class="fixed bg-[#F8F9FB] left-0 right-0">
    <Transition appear>
      <div
        class="container mx-auto px-4 py-6 flex justify-between items-center"
      >
        <router-link to="/"
          ><div class="font-bold text-2xl text-[#2F2F2F]">
            Events
          </div></router-link
        >

        <div class="flex items-center cursor-pointer">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            class="h-8 w-8 rounded-xl object-cover"
          />
          <p class="font-bold mx-4 hidden sm:inline-block">Bernice</p>
          <div
            class="bg-[#EAEDF7] h-5 w-5 flex items-center justify-center rounded-md ml-1 sm:ml-0"
          >
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3334 1.33334L6.00002 6.00001L1.66669 1.33334"
                stroke="black"
                stroke-linecap="square"
              />
            </svg>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>

<style scoped>
.v-enter-active {
  transition: all 0.6s ease-in;
}
.v-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-1vh);
}
</style>
