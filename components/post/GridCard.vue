<template>
   <article class="hentry">
      <header class="entry-header">
         <div class="entry-thumbnail">
            <NuxtLink :to="`/post/${post.id}`">
               <!-- имеджи отдаются не корректно, я их мокнул -->
               <img :src="'https://loremflickr.com/640/480/?random=' + randomNum" :alt=post.image>
            </NuxtLink>
         </div>
         <h2 class="entry-title">
            <NuxtLink :to="`/post/${post.id}`">
               {{ post.title }}
            </NuxtLink>
         </h2>
         <span>
            {{ post.preview }}
         </span>
      </header>
   </article>
</template>

<script setup lang="ts">
import { Post } from "utils/types/post";

defineProps<{ post: Post; }>();

const randomNum = ~~(Math.random() * 10000) + 1;
</script>
