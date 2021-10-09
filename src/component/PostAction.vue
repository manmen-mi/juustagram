<template>
  <div class="px-4 gap-4 flex flex-row justify-start">
    <div class="flex gap-2">
      <button class="w-6" :class="{'text-red-500': favored}" @click="favored ? unFavorite(+pid) : favorite(+pid)">
        <span class="material-icons">{{ favored ? 'favorite' : 'favorite_border' }}</span>
      </button>
      <router-link :to="`/post/${pid}`" class="w-6" ><span class="material-icons">chat_bubble_outlined</span></router-link>
      <span class="ml-1 text-gray-400">e-ne 999+</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import useFavo from "../favo";

const props = defineProps({
  pid: {
    type: String,
    required: true,
  },
});

const { favList, favorite, unFavorite } = useFavo();

const favored = computed(() => favList.value.includes(+props.pid));

</script>
