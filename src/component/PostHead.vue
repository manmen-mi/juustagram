<template>
  <div class="flex gap-4 px-3 py-2 border-[#dddddd] border-solid border-b-[0.5px]">
    <kansen :name="name"></kansen>
    <span class="font-bold my-auto">{{ getAccount(name) }}</span>
  </div>
</template>

<script lang="ts" setup>
import Kansen from "./Kansen.vue";
import { getAccount } from "../name";

defineProps({
  name: {
    type: String,
    required: true,
  },
});

</script>
