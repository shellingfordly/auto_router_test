<script setup lang="ts">
import { ref } from "vue";

const path = ref("");
</script>

<template>
  <div>
    home index
  </div>

  <div>
    <input
      type="text"
      v-model="path"
      style="width: 60px; margin-right: 10px;"
    />
    <a :href="`/home/${path}`">go</a>
  </div>
  <div>
    <a href="/">back index</a>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
