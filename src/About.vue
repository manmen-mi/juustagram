<template>
  <main>
    <table class="table">
      <tr>
        <th>{{ getCommon('contact') }}</th>
        <td>dev@vichya.info</td>
      </tr>
      <tr>
        <th>{{ getCommon('refer') }}</th>
        <td>
          <ul>
            <li><a class="link link-primary link-hover" target="_blank" href="http://godrooklyn.egloos.com/">브룩없는 브룩갤</a></li>
            <li><a class="link link-primary link-hover" target="_blank" href="https://azurlane.wikiru.jp/index.php?%B4%CF%C1%A5%C4%CC%BF%AE">Jpn Wiki</a></li>
            <li>Eng Wiki : https://azurlane.koumakan.jp/</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>{{ getCommon('refresh') }}</th>
        <td><button @click="refresh" class="btn btn-ghost">Refresh</button></td>
      </tr>
    </table>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import useLang from "./lang";

const { getCommon } = useLang();

const { push } = useRouter();
const refresh = () => {
  localStorage.removeItem('asset_version');
  push('/');
}

</script>
