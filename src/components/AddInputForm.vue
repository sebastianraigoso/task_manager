<script setup>
  import { ref } from 'vue'

  const addTitle = ref('')
  const addDescription = ref('')

  const value = ref(null)
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
      <n-input v-model:value="addTitle" placeholder="Title" />
      <n-input v-model:value="addDescription" placeholder="Description" />
      <div class="flex gap-4">
        <n-date-picker v-model:value="timestamp" type="date" placeholder="Date" class="flex-1" />
        <n-tree-select :options="options" v-model-value="value" default-value="Priority" placeholder="Priority" class="flex-1"
        />
      </div>
      <div class="flex justify-end">
        <div class="flex gap-4 w-3xs justify-end">
          <n-button strong secondary type="primary">Add Task</n-button>
          <n-button strong secondary type="Error">Cancel</n-button>
        </div>
      </div>
    </form>
  </div>
</template>