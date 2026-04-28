<script setup>
  import { ref, defineEmits } from 'vue'

  const title = ref('')
  const description = ref('')
  const date = ref(null)
  const priority = ref(null)
  const emit = defineEmits(['add-task'])

  const submit = () => {
    emit('add-task', {
      id: Date.now(),
      title: title.value,
      description: description.value,
      date: date.value,
      priority: priority.value
    })

    // reset
    title.value = ''
    description.value = ''
    date.value = null
    priority.value = null
  }

  const options = [
    { label: 'Urgent', key: 'Urgent' },
    { label: 'High', key: 'high' },
    { label: 'Medium', key: 'Medium' },
    { label: 'Low', key: 'low' },
  ]
  
</script>

<template>
  <div class="flex justify-center items-center">
    <form class="flex flex-col gap-4 w-lg border-2 border-solid rounded-lg border-gray-300 p-4">
      <n-input v-model:value="title" placeholder="Title" />
      <n-input v-model:value="description" placeholder="Description" />
      <div class="flex gap-4">
        <n-date-picker v-model:value="date" type="date" placeholder="Date" class="flex-1" />
        <n-tree-select v-model:value="priority" :options="options" placeholder="Priority" class="flex-1" />
      </div>

      <div class="flex justify-end">
        <div class="flex gap-4 w-3xs justify-end">
          <!-- 'submit' & Cancel Have to close the form once finish -->
          <n-button @click.prevent="submit" strong secondary type="primary">Add Task</n-button>
          <n-button strong secondary type="Error">Cancel</n-button>
        </div>
      </div>

    </form>
  </div>
</template>