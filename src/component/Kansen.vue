<template>
  <div class="avatar p-3 pt-0">
    <div class="rounded-full w-[40px] h-[40px] border-[#888] border-solid border-[0.5px]" :class="`icon-${name}`"></div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  name: { type: String, required: true },
})

</script>

<style lang="scss" scoped>
.icon- {
  &commander {
    background: url(../icons/commander.png) 0 0 no-repeat; // 46px
    background-position: center;
  }

  // polaris
  &akagi_mu { background: url(../icons/polaris.png) -80px 0; }
  &hipper_mu { background: url(../icons/polaris.png) -40px 0; }


}
</style>