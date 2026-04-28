<script setup>
  import { DeleteForeverFilled } from '@vicons/material'

  defineProps({
    tasks: Array
  })

  const deleteTask = () => {
    
  }
  

</script>

<template>
  <ul class="overflow-auto h-80">
    <li v-for="task in tasks" :key="task.id" class="flex items-center">
      <p>{{ task.title }} - {{ task.description }} - {{ new Date(task.date).toLocaleDateString() }} - {{ task.priority }}</p>
      <n-icon size="25" >
        <DeleteForeverFilled @click="deleteTask"/>
      </n-icon>
    </li>
  </ul>

</template>