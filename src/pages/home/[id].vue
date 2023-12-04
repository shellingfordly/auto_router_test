<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router/auto";

const route = useRoute();
const id = computed(() => route.params);
</script>

<template>
  <div>hello [{{ id }}]</div>
  <div>
    <a href="/">back index</a>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
