<template>
  <div class="flex gap-4 px-3 py-2 border-[#dddddd] border-solid border-b-[0.5px]">
    <kansen :name="icon ?? ''"></kansen>
    <span class="font-bold my-auto">{{ kansen }}</span>
  </div>
</template>

<script lang="ts" setup>
import Kansen from "./Kansen.vue";

defineProps({
  kansen: String,
  icon: String,
});

</script>
