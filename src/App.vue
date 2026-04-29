<script setup>
  import AddTaskButton from './components/AddTaskButton.vue';
  import FormTask from './components/FormTask.vue';
  import TaskList from './components/TaskList.vue';

  import { ref, onMounted } from 'vue'


  const tasks = ref([])

  onMounted(async () => {
    try {
      const res = await fetch('http://localhost:3000/tasks')
      tasks.value = await res.json()
    } catch(err) {
      console.error(err)
    }
  })

  const handleAddTask = async (task) => {
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const newTask = await res.json()
    tasks.value.push(newTask)
  }

  const handleDeleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
    
    tasks.value = tasks.value.filter(task => task.id !== id)
  }

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