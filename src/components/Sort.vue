<script setup>
import { ref, defineProps } from "vue";

defineProps({
  sortList: Object,
  sortByUpDown: Object
});

const filters = ref("yearProfit");
</script>
<template>
  <div>
    <form class="max-w-sm mx-auto pb-5">
      <label for="sort" class="block mb-2 text-sm font-medium text-gray-90">{{
        sortList.title
      }}</label>
      <select
        @change="$emit('changeSort', filters)"
        v-model="filters"
        id="sort"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
      >
        <option
          v-for="(item, i) in sortList.options"
          :key="i"
          :value="i"
          :selected="i == 'yearProfit'"
        >
          {{ item }}
        </option>
      </select>
    </form>
    <div class="text-center text-3xl font-medium m-5">{{ filters }}</div>
  </div>
  <div class="flex justify-center gap-3">
    <p class="text-sm font-medium text-gray-90">{{ sortByUpDown.title }}</p>
    <div
      class="cursor-pointer"
      @click="$emit('changeByUpDown')"
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="20.000000pt"
        height="20.000000pt"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M577 4305 c-125 -250 -227 -457 -227 -460 0 -3 54 -5 120 -5 l120 0
0 -1280 0 -1280 -120 0 c-66 0 -120 -2 -120 -5 0 -3 104 -213 231 -467 l232
-463 232 465 233 465 -118 3 -117 3 -6 562 c-4 309 -7 885 -7 1280 l0 717 124
0 123 0 -231 460 c-127 253 -233 460 -236 460 -3 0 -107 -205 -233 -455z"
          />
          <path
            d="M1830 4081 c-68 -21 -114 -59 -144 -118 -21 -41 -22 -218 -3 -266 18
-41 84 -101 128 -116 24 -7 409 -11 1264 -13 1386 -3 1286 -9 1360 73 49 55
55 75 55 190 0 139 -29 192 -130 238 -45 20 -58 21 -1275 20 -676 0 -1241 -4
-1255 -8z"
          />
          <path
            d="M1775 2300 c-33 -13 -66 -50 -86 -94 -25 -55 -27 -257 -3 -314 21
-51 61 -90 103 -102 51 -14 1571 -13 1608 1 38 14 71 46 96 94 18 34 21 57 22
160 0 106 -3 126 -23 167 -13 27 -38 58 -55 70 l-32 23 -805 2 c-443 1 -814
-2 -825 -7z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>
