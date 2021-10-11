<template>
  <main v-if="posts" class="pt-7 w-full lg:max-w-[975px] bg-white mx-auto my-0 py-10 grid grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
    <div class="form-control col-span-2 mx-[8%] lg:mx-0">

      <!-- article -->
      <article v-for="post in posts" class="form-control py-1 gap-2 w-full border-[#dddddd] border-solid border">
        <post-head :kansen="post.kansen" :icon="post.icon" ></post-head>

        <img class="mx-auto" width="512" height="512" :src="`/assets/juu/${post.pid}.png`">

        <post-action :pid="post.pid"></post-action>

        <post-articles v-bind="post"></post-articles>

      </article>
    </div>

    <div class="hidden lg:flex card card-side shadow-2xl h-[fit-content]">
      <div class="card-body p-5 gap-4 flex-row justify-start">
        <div class="avatar">
          <div class="rounded-full w-16 h-16 border-[#dddddd] border-solid border-[0.5px]">
            <img src="/assets/kansen/commander.png">
          </div>
        </div>
        <div class="form-control my-auto">
          <span class="font-bold">commander__</span>
          <span class="text-gray-400">Shiki-kan</span>
        </div>
      </div>
    </div>
  </main>

  <!-- detail -->
  <div v-if="current" class="modal" :class="{'modal-open': pid}" @click.self="$router.push('/')">
    <div class="modal-box p-0 flex flex-col lg:flex-row rounded-none w-full max-w-[512px] lg:max-w-[975px]">
      <img class="w-[512px] max-w-[512px] m-0" width="512" height="512" :src="`/assets/juu/${current.pid}.png`">

      <div class="form-control gap-3 max-h-[512px] w-full">
        <post-head :kansen="current.kansen" :icon="current.icon"></post-head>

        <post-articles v-bind="current" :altmode="true"></post-articles>

        <post-action :pid="current.pid"></post-action>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";

import PostHead from "./component/PostHead.vue";
import PostAction from "./component/PostAction.vue";
import PostArticles from "./component/PostArticles.vue";
import axios from "axios";

const prop = defineProps({
  pid: String,
});

const {query} = useRoute();
const posts = ref<any>(null);
const current = ref<any>();

const allowedGroup = ['polaris'];
const group = ref<string>(allowedGroup.includes(String(query.group)) ? String(query.group) : 'polaris');

const {replace} = useRouter();
watchEffect(async () => {
  const localCache = localStorage.getItem(group.value);

  if (localCache) {
    posts.value = JSON.parse(localCache);
  } else {
    const {data} = await axios.get(`/assets/post/${group.value}.json`);
    localStorage.setItem(group.value, JSON.stringify(data.default));
    posts.value = data.default;
  }

  if (!prop.pid) return;
  if (!Object.keys(posts.value).includes(prop.pid)) replace('/');

  current.value = posts.value[+prop.pid];
});

</script>
