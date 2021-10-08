<template>
  <header class="w-full h-[54px] fixed flex justify-center bg-white border-[#dddddd] border-solid border-b">
    <div class="w-full max-w-[975px] flex items-center justify-center px-5">
      <span class="text-lg min-w-[40px] flex-1">Juustagram</span>
      <input class="input w-[215px] min-w[125px] input-bordered input-sm rounded-none flex-initial" placeholder="search" v-model="a">
      <div class="text-lg flex-1 flex gap-2 justify-end items-center">
        <router-link to="/" class="w-6 h-6"><span class="material-icons">home</span></router-link>
        <router-link to="/about" class="w-6 h-6"><span class="material-icons">help_outlined</span></router-link>
        <a href="https://github.com/manmen-mi/juustagram" class="github w-6 h-6"></a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const a = ref('');

</script>

<style lang="scss" scoped>
.github {
  background-image: url(./GitHub-Mark-64px.png);
  background-repeat: no-repeat;
  background-size: contain;
}
</style>