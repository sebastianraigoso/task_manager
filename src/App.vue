<script setup>
  import AddTaskButton from './components/AddTaskButton.vue';
  import FormTask from './components/FormTask.vue';
  import TaskList from './components/TaskList.vue';

  import { ref } from 'vue'

  const tasks = ref([])

  const handleAddTask = (task) => {
    tasks.value.push(task)
  }

  const handleDeleteTask = (id) => {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }

  onMounted(async () => {
    const res = await fetch('http://localhost:3000/tasks')
    tasks.value = await res.json()
  })
  
</script>

<template>
  <TaskList class="p-20" :tasks="tasks" @delete-task="handleDeleteTask"/>
  <div class="flex justify-center">
    <div class="border-t border-gray-100 border w-120"></div>
  </div>

  <!-- // when click will disapear and add //
  <AddButton @click="changeStyle"/> -->
  <FormTask @add-task="handleAddTask" class="p-10" />
</template>