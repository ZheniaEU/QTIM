<template>
   <div class="pagination">
      <button :disabled="currentPage === 1"
         @click="currentPage !== 1 && emit('update:currentPage', currentPage - 1)">Prev</button>

      <span class="current">{{ currentPage }}</span>

      <button v-show="currentPage !== lastPage" @click="emit('update:currentPage', currentPage + 1)">
         {{ currentPage + 1 }}
      </button>

      <template v-if="currentPage !== lastPage && currentPage + 1 < lastPage">
         <span class="dots">...</span>
         <button @click="emit('update:currentPage', lastPage)">{{ lastPage }}</button>
      </template>

      <button :disabled="currentPage === lastPage"
         @click="currentPage !== lastPage && emit('update:currentPage', currentPage + 1)">Next</button>
   </div>
</template>

<script lang="ts" setup>

defineProps<{ currentPage: number; lastPage: number; }>();

const emit = defineEmits<{
   (e: 'update:currentPage', id: number): void;
}>();
</script>
