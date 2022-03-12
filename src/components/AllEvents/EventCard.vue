<template>
  <Transition appear>
    <div class="block bg-white rounded-lg p-3 w-full m-auto">
      <div class="">
        <img
          alt="blog photo"
          :src="eventImagePlaceholder"
          class="max-h-32 z-10 w-full object-cover rounded-lg hover:skew-y-1 transition-all duration-300 ease-in-out"
        />
      </div>

      <div class="bg-white w-full mt-4">
        <div class="flex justify-between items-start">
          <p class="text-black text-xs font-bold w-8/12">
            {{ props.event.venue.name }}
          </p>
          <div
            class="relative w-12 text-center flex items-center justify-center"
          >
            <svg
              class="absolute right-0"
              width="50"
              height="30"
              viewBox="0 0 50 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 0H20.0933C19.953 2.19833 21.6845 4.25 24.0903 4.25H25.0756C27.4814 4.25 29.2128 2.19833 29.0726 0H44C47.3137 0 50 2.68629 50 6V24C50 27.3137 47.3137 30 44 30H29.073C29.2133 27.8017 27.4818 25.75 25.076 25.75H24.0907C21.6849 25.75 19.9534 27.8017 20.0937 30H6C2.68629 30 0 27.3137 0 24V6C0 2.68629 2.68629 0 6 0Z"
                fill="#ff6a2c14"
              />
            </svg>
            <span class="text-secondary text-xs text-center font-semibold">{{
              formatDate
            }}</span>
          </div>
        </div>
        <div class="w-full mt-4">
          <div class="mb-4">
            <div class="flex flex-wrap">
              <div class="flex items-center mr-7 pb-3">
                <span>
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 8.66656C7.10457 8.66656 8 7.77113 8 6.66656C8 5.562 7.10457 4.66656 6 4.66656C4.89543 4.66656 4 5.562 4 6.66656C4 7.77113 4.89543 8.66656 6 8.66656Z"
                      stroke="#6C757D"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.00005 1.33328C4.58556 1.33328 3.22901 1.89519 2.22881 2.89538C1.22862 3.89557 0.666718 5.25213 0.666718 6.66662C0.666718 7.92795 0.934717 8.75328 1.66672 9.66662L6.00005 14.6666L10.3334 9.66662C11.0654 8.75328 11.3334 7.92795 11.3334 6.66662C11.3334 5.25213 10.7715 3.89557 9.77129 2.89538C8.77109 1.89519 7.41454 1.33328 6.00005 1.33328V1.33328Z"
                      stroke="#6C757D"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p class="ml-3 text-xs text-ash">
                  {{ props.event.venue.city }}
                </p>
              </div>
            </div>
            <div class="flex pb-2">
              <div class="flex items-center mr-7">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.89743 1.69255C9.79196 1.58722 9.64899 1.52805 9.49993 1.52805C9.35087 1.52805 9.2079 1.58722 9.10243 1.69255L1.69243 9.10255C1.58709 9.20802 1.52793 9.35099 1.52793 9.50005C1.52793 9.64912 1.58709 9.79208 1.69243 9.89755L2.49418 10.6986C2.8862 10.4795 3.33898 10.3944 3.78376 10.4562C4.22854 10.5179 4.64102 10.7232 4.95854 11.0407C5.27607 11.3582 5.48129 11.7707 5.54304 12.2155C5.60479 12.6603 5.5197 13.113 5.30068 13.5051L6.10243 14.3076C6.15467 14.3598 6.21669 14.4013 6.28496 14.4296C6.35323 14.4579 6.42641 14.4724 6.50031 14.4724C6.57421 14.4724 6.64738 14.4579 6.71565 14.4296C6.78392 14.4013 6.84594 14.3598 6.89818 14.3076L14.3074 6.8983C14.4128 6.79283 14.4719 6.64987 14.4719 6.5008C14.4719 6.35174 14.4128 6.20877 14.3074 6.1033L13.5049 5.30005C13.1129 5.51907 12.6601 5.60417 12.2154 5.54241C11.7706 5.48066 11.3581 5.27544 11.0406 4.95792C10.723 4.64039 10.5178 4.22791 10.4561 3.78313C10.3943 3.33835 10.4794 2.88557 10.6984 2.49355L9.89743 1.69255ZM8.30743 0.897553C8.46413 0.740852 8.65016 0.61655 8.8549 0.531744C9.05964 0.446938 9.27907 0.403289 9.50068 0.403289C9.72229 0.403289 9.94173 0.446938 10.1465 0.531744C10.3512 0.61655 10.5372 0.740852 10.6939 0.897553L11.5722 1.77655C11.9554 2.15905 11.8872 2.6968 11.6937 3.02155C11.5873 3.20069 11.5436 3.41016 11.5696 3.61688C11.5955 3.8236 11.6896 4.01579 11.8369 4.16311C11.9842 4.31043 12.1764 4.40448 12.3831 4.43041C12.5898 4.45634 12.7993 4.41267 12.9784 4.3063C13.3032 4.11355 13.8409 4.04455 14.2234 4.4278L15.1024 5.30755C15.2591 5.46425 15.3834 5.65028 15.4682 5.85502C15.553 6.05976 15.5967 6.2792 15.5967 6.5008C15.5967 6.72241 15.553 6.94185 15.4682 7.14659C15.3834 7.35132 15.2591 7.53735 15.1024 7.69405L7.69393 15.1026C7.53723 15.2593 7.3512 15.3836 7.14646 15.4684C6.94173 15.5532 6.72229 15.5968 6.50068 15.5968C6.27907 15.5968 6.05964 15.5532 5.8549 15.4684C5.65016 15.3836 5.46413 15.2593 5.30743 15.1026L4.42843 14.2243C4.04593 13.8418 4.11343 13.3033 4.30693 12.9793C4.4133 12.8002 4.45697 12.5907 4.43104 12.384C4.40511 12.1773 4.31106 11.9851 4.16374 11.8377C4.01642 11.6904 3.82423 11.5964 3.61751 11.5704C3.41079 11.5445 3.20132 11.5882 3.02218 11.6946C2.69743 11.8873 2.15968 11.9556 1.77718 11.5723L0.897432 10.6933C0.740731 10.5366 0.616429 10.3506 0.531623 10.1458C0.446817 9.9411 0.403168 9.72166 0.403168 9.50005C0.403168 9.27845 0.446817 9.05901 0.531623 8.85427C0.616429 8.64953 0.740731 8.4635 0.897432 8.3068L8.30743 0.897553Z"
                      fill="#6C757D"
                    />
                  </svg>
                </span>
                <p class="ml-3 text-xs text-ash">
                  Starting from
                  <span class="text-primary text-sm font-semibold">
                    15,000
                  </span>
                </p>
              </div>
            </div>
          </div>
          <a
            :href="props.event.url"
            target="_blank"
            class="cursor-pointer inline-block mb-2 text-xs mr-2 py-2 px-4 text-primary font-semibold border border-primary rounded-lg hover:text-white hover:bg-primary transition-all duration-300 ease-in-out"
          >
            Buy Ticket
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { IEvent } from "@/types";
import eventImagePlaceholder from "@/assets/images/event.jpeg";
const props = defineProps<{ event: IEvent }>();

const formatDate = computed(() => {
  return new Date(props.event.datetime)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    })
    .replace(/ /g, " ");
});
</script>

<style scoped>
.v-enter-active {
  transition: all 0.8s ease-in-out;
}
.v-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
