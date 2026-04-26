<script setup>
  import { AddTwotone, AddCircleOutlineSharp } from '@vicons/material'
</script>

<template>
  <div class="flex justify-center items-center  h-screen">
    <div class="flex justify-center items-center gap-3
    text-gray-500 cursor-pointer group
    hover:text-orange-600">
      <n-icon size="25" class="text-orange-600 
      group-hover:bg-orange-600 group-hover:rounded-full group-hover:text-white" >
        <AddTwotone/>
      </n-icon>
      <span class="text-xl">Add text</span>
    </div>
  </div>
</template>