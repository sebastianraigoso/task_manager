<script setup>

  // props receive data from AddInputForm
  const newTasks = ref([])
</script>

<template>
  <div v-for="task in newTasks" :key="task.id" class="flex flex-col"></div>
</template>