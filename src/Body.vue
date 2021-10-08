<template>
  <main class="pt-7 w-full lg:max-w-[975px] bg-white mx-auto my-0 grid grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
    <div class="form-control col-span-2 mx-[8%] lg:mx-0">

      <!-- article -->
      <article class="form-control gap-2 w-full border-[#dddddd] border-solid border">
        <div class="flex gap-4 p-3">
          <div class="avatar">
            <div class="rounded-full w-12 h-12 border-[#dddddd] border-solid border-[0.5px]">
              <img src="/asset/Fusou_METAChibi.png">
            </div>
          </div>
          <span class="font-bold my-auto">fusou</span>
        </div>

        <img class="mx-auto" width="512" height="512" src="/asset/Fusou_METAChibi.png">

        <div class="px-4 gap-4 flex flex-row justify-start">
          <div class="flex gap-2">
            <span class="material-icons w-6">favorite_border</span>
            <span class="material-icons w-6">chat_bubble_outlined</span>
            <span class="ml-1 text-gray-400">e-ne 999+</span>
          </div>
        </div>

        <p class="px-4 whitespace-pre-line">
          <span class="font-bold">fusou</span>
          article articlearticlearticlearticle
        </p>

        <div class="form-control gap-0.5 px-4">
          <span class="text-gray-400">show all comments...</span>
          <span>
            <span class="font-bold">fusou</span>
            comment article Lorem ipsum dolor sit
          </span>
        </div>

        <div class="px-4 py-2 border-[#dddddd] border-opacity-60 border-solid border-t-[0.5px]">
          <div class="dropdown dropdown-top dropdown-hover w-full">
            <div class="input input-sm w-full text-gray-400 cursor-text">comment...</div>
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li> 
              <li>
                <a>Item 2</a>
              </li> 
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>

    <div class="hidden lg:flex card card-side shadow-2xl h-[fit-content]">
      <div class="card-body p-5 gap-4 flex-row justify-start">
        <div class="avatar">
          <div class="rounded-full w-16 h-16 border-[#dddddd] border-solid border-[0.5px]">
            <img src="/asset/Fusou_METAChibi.png">
          </div>
        </div>
        <div class="form-control my-auto">
          <span class="font-bold">commander__</span>
          <span class="text-gray-400">Shiki-kan</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

</script>
