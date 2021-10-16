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
  &kaga { background: url(../icons/polaris.png) -120px -40px; }
  &hipper_mu { background: url(../icons/polaris.png) -40px 0; }
  &gascogne_mu { background: url(../icons/polaris.png) -80px -40px; }
  &sheffield_mu { background: url(../icons/polaris.png) 0 -80px; }
  &cleveland_mu { background: url(../icons/polaris.png) -160px 0; }
  &columbia { background: url(../icons/polaris.png) -200px 0; }
  &montpelier { background: url(../icons/polaris.png) -160px -40px; }
  &denver { background: url(../icons/polaris.png) 0 -40px; }
  &eugen { background: url(../icons/polaris.png) -200px -40px; }
  &spee { background: url(../icons/polaris.png) 0 0; }
  &deutschland { background: url(../icons/polaris.png) -40px -40px; }
  &belfast { background: url(../icons/polaris.png) -120px 0; }
  &shoukaku { background: url(../icons/polaris.png) -40px -80px; }
  &zuikaku { background: url(../icons/polaris.png) -80px -80px; }

}
</style>