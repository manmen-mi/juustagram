<template>
  <div class="flex gap-4 px-3 py-2 border-[#dddddd] border-solid border-b-[0.5px]">
    <div class="avatar">
      <div class="rounded-full w-12 h-12 border-[#888] border-solid border-[0.5px]">
        <img :src="`/asset/kansen/${icon}.png`">
      </div>
    </div>
    <span class="font-bold my-auto">{{ kansen }}</span>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  kansen: String,
  icon: String,
});

</script>
