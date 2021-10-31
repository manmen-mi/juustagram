<template>
  <main v-if="posts" class="pt-7 w-full lg:max-w-[975px] bg-white mx-auto my-0 py-10 grid grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
    <div class="form-control gap-8 col-span-2 mx-[8%] lg:mx-0">

      <!-- article -->
      <article v-for="post in posts" class="form-control pt-1 pb-3 gap-2 w-full border-[#dddddd] border-solid border">
        <post-head :name="post.name" ></post-head>

        <img loading="lazy" class="mx-auto" width="512" height="512" :src="`/assets/juu/${post.pid}.png`">

        <post-action :pid="'' + post.pid"></post-action>

        <post-articles v-bind="post"></post-articles>

      </article>
    </div>

    <div class="hidden lg:flex card card-side shadow-2xl h-[fit-content]">
      <div class="card-body p-5 gap-4 flex-row justify-start">
        <kansen name="commander" />
        <div class="form-control my-auto">
          <span class="font-bold">commander__</span>
          <span class="text-gray-400">Shiki-kan</span>
        </div>
      </div>
    </div>
  </main>

  <!-- detail -->
  <div v-if="current" class="modal" :class="{'modal-open': pid}" @click.self="$router.push('/')">
    <div class="modal-box p-0 flex flex-col lg:flex-row rounded-none w-full  max-w-[512px] lg:max-w-[975px]">
      <button class="absolute lg:hidden right-0 top-0" @click="$router.push('/')"><span class="material-icons text-4xl">close</span></button>

      <img class="w-[512px] max-w-[384px] lg:max-w-[512px] mx-auto my-0" width="512" height="512" :src="`/assets/juu/${current.pid}.png`">

      <div class="form-control gap-3 max-h-[calc(100vh-384px)] lg:max-h-[512px] w-full">
        <post-head :name="current.name"></post-head>

        <post-articles v-bind="current" :altmode="true"></post-articles>

        <post-action :pid="'' + current.pid"></post-action>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

import PostHead from "./component/PostHead.vue";
import PostAction from "./component/PostAction.vue";
import PostArticles from "./component/PostArticles.vue";
import Kansen from "./component/Kansen.vue";
import axios from "axios";

const prop = defineProps({
  pid: String,
});

const {query} = useRoute();
const posts = ref<any>(null);
const current = ref<any>();

const allowedGroup = ['polaris', 'shouga'];
const group = ref<string>('polaris');
onBeforeRouteUpdate((to) => group.value = allowedGroup.includes(String(to.query.group)) ? String(to.query.group) : 'polaris');

const newVersion = Number(import.meta.env.VITE_ASSET_VERSION);
if (+(localStorage.getItem('asset_version') ?? 0) < newVersion) {
  allowedGroup.forEach(v => localStorage.removeItem(v));
  localStorage.setItem('asset_version', ''+newVersion);
}

watchEffect(async () => {
  const localCache = localStorage.getItem(group.value);

  if (localCache) {
    posts.value = JSON.parse(localCache);
  } else {
    const {data} = await axios.get(`/assets/post/${group.value}.json`);
    localStorage.setItem(group.value, JSON.stringify(data));
    posts.value = data;
  }
});

watchEffect(() => {
  if (!prop.pid) return current.value = null;
  current.value = posts.value[+prop.pid];
})

</script>
