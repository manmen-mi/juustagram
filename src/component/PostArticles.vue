<template>
  <div class="form-control gap-2 px-4 overflow-y-auto text-sm">
    <div class="flex" :class="{'mb-4': altmode}">
      <div v-if="altmode" class="avatar p-3 pt-0">
        <div class="rounded-full w-12 h-12 border-[#888] border-solid border-[0.5px]">
          <img :src="`/asset/kansen/${icon}.png`">
        </div>
      </div>
      <p class="whitespace-pre-line w-full" :class="{'py-2': altmode}">
        <span class="font-bold mr-2">{{ kansen }}</span>
        {{ article[lang] }}
      </p>
    </div>

    <router-link :to="{name: 'post', params: {pid}}"><span v-if="!altmode" class="text-gray-400">show all comments...</span></router-link>

    <div v-for="c in filteredComments" class="flex" :class="{'ml-12': c.depth}">
      <div v-if="altmode" class="avatar p-3 pt-0">
        <div class="rounded-full w-12 h-12 border-[#888] border-solid border-[0.5px]">
          <img :src="`/asset/kansen/${c.icon}.png`">
        </div>
      </div>
      <p class="whitespace-pre-line w-full" :class="{'py-2': altmode}">
        <span class="font-bold mr-2">{{ c.kansen }}</span>
        {{ c.comment[lang] }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import useLang from "../lang";

const props = defineProps([
  'pid',
  'kansen',
  'icon',
  'article',
  'comments',
  'altmode'
]);

const { lang } = useLang();

// @ts-ignore
const filteredComments = computed(() => props.comments.filter((c, i) => props.altmode || i < 2));

// interface Comment {
//   depth: number,
//   kansen: string,
//   comment: string,
// }

</script>
