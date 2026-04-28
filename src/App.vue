<script setup>
  import AddTaskButton from './components/AddTaskButton.vue';
  import FormTask from './components/FormTask.vue';
  import TaskList from './components/TaskList.vue';

  import { ref } from 'vue'

  const tasks = ref([])

  const handleAddTask = (task) => {
    tasks.value.push(task)
  }

</script>

<template>
  <TaskList class="p-20" :tasks="tasks"/>
  <div class="flex justify-center">
    <div class="border-t border-gray-100 border w-120"></div>
  </div>

  <!-- // when click will disapear and add //
  <AddButton @click="changeStyle"/> -->
  <FormTask @add-task="handleAddTask" class="p-10" />
</template>