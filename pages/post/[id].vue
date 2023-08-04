<template>
   <div style="text-align: center">
      <PostCard v-if="data" :post="data" />
      <span v-if="pending">Загрузка</span>
      <span v-if="error">{{ error.data }}</span>
   </div>
</template>

<script lang="ts" setup>

const route = useRoute();

const { data, pending, error } = await useGetPost(String(route.params.id));

</script>
