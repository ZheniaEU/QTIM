<template>
   <article class="hentry">
      <div>
         <!-- имеджи отдаются не корректно, я их мокнул -->
         <img :src="generateRandomImageUrl()" :alt=post.title>
      </div>
      <h2 class="h2-center"> {{ post.title }} </h2>
      <span> {{ post.description }} </span>
   </article>
</template>

<script lang="ts" setup>
import { Post } from "utils/types/post";

defineProps<{
   post: Post;
}>();

</script>
