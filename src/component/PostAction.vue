<template>
  <div class="px-4 pb-2 gap-4 flex flex-row justify-start">
    <div class="flex gap-2">
      <button class="w-6" :class="{'text-red-500': favored}" @click="favored ? unFavorite(+pid) : favorite(+pid)">
        <span class="material-icons align-middle">{{ favored ? 'favorite' : 'favorite_border' }}</span>
      </button>
      <router-link custom :to="{name: 'post', params: {pid}}" v-slot="{ navigate }">
        <button class="w-6" @click="navigate"><span class="material-icons align-middle">chat_bubble_outlined</span></button>
      </router-link>
      <span class="ml-1 my-auto text-gray-400">{{ getCommon('fav') }} 999+</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import useFavo from "../favo";
import useLang from "../lang";

const props = defineProps({
  pid: {
    type: String,
    required: true,
  },
});

const { favList, favorite, unFavorite } = useFavo();
const { getCommon } = useLang();

const favored = computed(() => favList.value.includes(+props.pid));

</script>
