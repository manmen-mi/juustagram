<template>
  <div class="form-control gap-2 px-4 overflow-y-auto text-sm">
    <div class="flex" :class="{'mb-4': altmode}">
      <kansen v-if="altmode" :name="name"></kansen>
      <p class="whitespace-pre-line w-full" :class="{'py-2': altmode}">
        <span class="font-bold mr-2">{{ getAccount(name) }}</span>
        {{ article[lang] }}
      </p>
    </div>

    <router-link :to="{name: 'post', params: {pid}}"><span v-if="!altmode" class="text-gray-400">show all comments...</span></router-link>

    <div v-for="c in filteredComments" class="flex" :class="{'ml-12': c.depth}">
      <kansen v-if="altmode" :name="c.name"></kansen>
      <p class="whitespace-pre-line w-full" :class="{'py-2': altmode}">
        <span class="font-bold mr-2">{{ getAccount(c.name) }}</span>
        {{ c.comment[lang] }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import Kansen from "./Kansen.vue";
import useLang from "../lang";
import { getAccount } from "../name";

const props = defineProps([
  'pid',
  'name',
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
