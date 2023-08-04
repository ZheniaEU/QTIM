<template>
   <main id="main" class="site-main">
      <div class="outer-container">
         <div class="grid">
            <PostGridCard v-for="post in slicedPosts" :post="post" :key="post.id" />
         </div>
      </div>
      <PostPagination v-model:currentPage="currentPage" :lastPage="lastPage" />
   </main>
</template>

<script lang="ts" setup>
import { Post } from "utils/types/post";

const props = defineProps<{ allPosts: Post[]; }>();

const route = useRoute();
const router = useRouter();

const currentPage = ref(1);

const number = 6;
const length = props.allPosts.length || 0;
const lastPage = Math.ceil(length / number);

onMounted(() => {
   const page = Number(route.query.page);
   if (page) {
      currentPage.value = page;
   }
});

const slicedPosts = computed(() => {
   return props.allPosts.slice((currentPage.value - 1) * number, currentPage.value * number);
});

function updateCurrentPage() {
   router.push({
      path: route.path,
      query: { ...route.query, page: currentPage.value },
   });
}

watch(currentPage, updateCurrentPage);
</script>
