<template>
      <PostPageContent v-if="data" :allPosts="data" />
      <span v-if="pending">Загрузка</span>
      <span v-if="error">{{ error.data }}</span>
</template>

<script setup lang="ts">
import { useGetPosts } from "~/composables/useGetPosts";

const { data, pending, error } = await useGetPosts();

</script>
