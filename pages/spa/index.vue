<template>
  <div class="text-xl">SPA demo</div>
  <div>{{ time }}</div>
  <div class="flex flex-wrap justify-evenly">
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg my-3"
      v-for="(todo, index) in todos?.slice(0, 5)"
      :key="`card-${index}`"
    >
      <img
        class="w-full"
        :src="`https://picsum.photos/seed/${Date.now() + index}/400/300`"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ todo.title }}</div>
        <p class="text-gray-700 text-base">
          {{ todo.title }}
        </p>
      </div>

      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#photography</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#travel</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#winter</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Todo } from "@/server/api/todos";
const todo = await $fetch("/api/todos/5");
const { data: time } = await useFetch<Todo[]>("/api/time");
const { data: todos } = await useFetch<Todo[]>("/api/todos");
</script>
