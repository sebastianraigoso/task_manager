<script setup>
  import { defineEmits } from 'vue'
  import { DeleteForeverFilled } from '@vicons/material'

  defineProps({
    tasks: Array
  })

  const emit = defineEmits(['delete-task'])

  const deleteTask = (id) => {
    emit('delete-task', id)
  }

</script>

<template>
  <ul class="overflow-auto h-80">
    <li v-for="task in tasks" :key="task.id" class="flex items-center">
      <p>
        {{ task.title }} - 
        {{ task.description }} - 
        {{ new Date(task.date).toLocaleDateString() }} - 
        {{ task.priority }}</p>
      <n-icon size="25" @click="deleteTask(task.id)" class="cursor-pointer">
        <DeleteForeverFilled />
      </n-icon>
    </li>
  </ul>

</template>