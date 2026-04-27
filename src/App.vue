<script setup>
  import AddButton from './components/AddButton.vue';
  import FormTask from './components/FormTask.vue';
  import TaskList from './components/TaskList.vue';

</script>

<template>
  <TaskList/>
  <div class="border-t border-red-500 border"></div>
  <!-- <AddButton @click="changeStyle"/> -->
  <AddInputForm class="p-10" />
</template>