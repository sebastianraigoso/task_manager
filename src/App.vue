<script setup>
  import AddButton from './components/AddButton.vue';
  import AddInputForm from './components/AddInputForm.vue';
import TaskList from './components/TaskList.vue';

</script>

<template>
  <TaskList/>
  <div class="border-t border-red-500 border-1"></div>
  <!-- <AddButton @click="changeStyle"/> -->
  <AddInputForm class="p-10" />
</template>