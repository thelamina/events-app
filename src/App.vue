<template>
  <main class="bg-[#F8F9FB] min-h-screen">
    <Navbar />
    <div>
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
});
</script>
