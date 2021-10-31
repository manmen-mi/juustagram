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

  // 20설날
  &suruga { background: url(../icons/shouga.png) 0 -160px; }
  &kongo { background: url(../icons/shouga.png) -160px -80px; }
  &kasumi { background: url(../icons/shouga.png) -80px -200px; }
  &nagato { background: url(../icons/shouga.png) -80px -40px; }
  &ark_royal { background: url(../icons/shouga.png) -80px -120px; }
  &ayanami { background: url(../icons/shouga.png) -40px -160px; }
  &hibiki { background: url(../icons/shouga.png) -40px -200px; }
  &inazuma { background: url(../icons/shouga.png) -80px -80px; }
  &ikazuchi { background: url(../icons/shouga.png) -160px -120px; }
  &akatsuki { background: url(../icons/shouga.png) -160px -200px; }
  &fubuki { background: url(../icons/shouga.png) -40px -80px; }
  &noshiro { background: url(../icons/shouga.png) -200px -160px; }
  &agano { background: url(../icons/shouga.png) 0 0; }
  &kirishima { background: url(../icons/shouga.png) -200px -120px; }
  &ryuhou { background: url(../icons/shouga.png) -80px -160px; }
  &yubari { background: url(../icons/shouga.png) -200px -200px; }
  &unicorn { background: url(../icons/shouga.png) -120px -80px; }
  &z23 { background: url(../icons/shouga.png) -240px 0; }
  &friedrich { background: url(../icons/shouga.png) -120px -40px; }
  &atago { background: url(../icons/shouga.png) -40px 0; }
  &azuma { background: url(../icons/shouga.png) -120px -120px; }
  &dunkerque { background: url(../icons/shouga.png) -120px 0; }
  &trento { background: url(../icons/shouga.png) -200px -80px; }
  &i58 { background: url(../icons/shouga.png) -160px -40px; }
  &i26 { background: url(../icons/shouga.png) -120px -120px; }
  &i25 { background: url(../icons/shouga.png) -160px 0; }
  &shoho { background: url(../icons/shouga.png) -120px -200px; }
  &z35 { background: url(../icons/shouga.png) -240px -40px; }
  &z36 { background: url(../icons/shouga.png) -240px -80px; }
  &saratoga { background: url(../icons/shouga.png) -200px -40px; }
  &shiranui { background: url(../icons/shouga.png) 0 -80px; }
  &myoko { background: url(../icons/shouga.png) -120px -160px; }
  &kinu { background: url(../icons/shouga.png) 0 -120px; }
  &isuzu { background: url(../icons/shouga.png) -200px 0; }
  &nagara { background: url(../icons/shouga.png) -240px -120px; }
  &abukuma { background: url(../icons/shouga.png) -240px -160px; }
  &birmingham { background: url(../icons/shouga.png) -80px 0; }
  &edinburgh { background: url(../icons/shouga.png) 0 -40px; }
  &southampton { background: url(../icons/shouga.png) 0 -200px; }
  &glorius { background: url(../icons/shouga.png) -40px -120px; }
}
</style>