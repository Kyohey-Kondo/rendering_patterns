<template>
  <div class="bg-gray-100">
    <div class="text-xl mx-2 py-1">AS dept. Workshop</div>
  </div>

  <div class="mx-3">
    <div class="flex justify-center gap-5">
      <NuxtLink class="underline" to="/spa"> SPA demo </NuxtLink>
      <NuxtLink class="underline" to="/ssr"> SSR demo </NuxtLink>
      <NuxtLink class="underline" to="/ssg"> SSG demo (SPA) </NuxtLink>
      <a
        href="https://yluzl2qrtdudeixk4olm4mo2ve0ktzbm.lambda-url.ap-northeast-1.on.aws/ssg"
        >SSG demo (static)</a
      >
    </div>

    <div>
      <div>アウトライン</div>
      <li>レンダリングについて考えるのはなぜ重要か (Web Vitals)</li>
      <li>基本的なレンダリングパターン (SPA, SSR, SSG)</li>
      <li>応用的なレンダリングパターン (ISR, ISG)</li>
      <li>Nuxt.js の Route Rules</li>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
