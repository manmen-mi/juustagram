<template>
  <div class="form-control gap-2 px-4 overflow-y-auto">
    <div class="flex" :class="{'mb-4': altmode}">
      <div v-if="altmode && icon" class="avatar p-3">
        <div class="rounded-full w-12 h-12 border-[#888] border-solid border-[0.5px]">
          <img :src="`/asset/kansen/${icon}.png`">
        </div>
      </div>
      <p class="whitespace-pre-line">
        <span class="font-bold">{{ kansen }}</span>
        {{ article }}
      </p>
    </div>

    <span v-if="!altmode" class="text-gray-400">show all comments...</span>

    <div v-for="c in comments" class="flex w-full">
      <div v-if="altmode && c.icon" class="avatar p-3">
        <div class="rounded-full w-12 h-12 border-[#888] border-solid border-[0.5px]">
          <img :src="`/asset/kansen/${c.icon}.png`">
        </div>
      </div>
      <p class="whitespace-pre-line">
        <span class="font-bold">{{ c.kansen }}</span>
        {{ c.comment }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

defineProps([
  'kansen',
  'icon',
  'article',
  'comments',
  'altmode'
]);

// interface Comment {
//   depth: number,
//   kansen: string,
//   comment: string,
// }

</script>
