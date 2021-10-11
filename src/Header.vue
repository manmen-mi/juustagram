<template>
  <header class="w-full h-[54px] sticky top-0 left-0 flex justify-center bg-white border-[#dddddd] border-solid border-b z-50">
    <div class="w-full max-w-[975px] flex items-center justify-center px-5 text-lg">
      <div class="min-w-[40px] flex-1"><router-link to="/">Juustagram</router-link></div>
      <input type="text" class="input w-[215px] min-w[125px] input-bordered input-sm rounded-none flex-initial" placeholder="search">
      <div class="flex-1 flex gap-4 justify-end items-center">
        <label class="form-control my-auto ml-auto mr-0">
          <span class="label-text text-xs">JP</span>
          <input type="checkbox" @change="changeLang" class="toggle toggle-xs mx-auto" :checked="lang === 'jp'">
        </label>
        <router-link to="/" class="w-6 h-6"><span class="material-icons">home</span></router-link>
        <router-link to="/about" class="w-6 h-6"><span class="material-icons">help_outlined</span></router-link>
        <a href="https://github.com/manmen-mi/juustagram" class="github w-6 h-6"></a>
      </div>
    </div>
  </header>
</template>

<script setup>
import useLang from "./lang";

const { lang } = useLang();
const changeLang = ev => lang.value = ev.target.checked ? 'jp': 'ko';

</script>

<style lang="scss" scoped>
.github {
  background-image: url(./GitHub-Mark-64px.png);
  background-repeat: no-repeat;
  background-size: contain;
}
</style>