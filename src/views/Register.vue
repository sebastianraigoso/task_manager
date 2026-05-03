<script setup>
  import { ref } from 'vue'

  const username = ref('')
  const email = ref('')
  const password = ref('')

  const register = () => {
    console.log(
      {
        username: username.value,
        email: email.value,
        password: password.value
      }
    )
  }
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <n-form @submit.prevent="register" class="flex flex-col gap-4 w-lg border-2 border-solid rounded-lg border-gray-300 p-4">
      <h1 class="p-10 text-2xl text-center font-medium">REGISTER</h1>
      <n-input v-model:value="username" name="username" placeholder="Username" />
      <n-input v-model:value="email" name="email" placeholder="Email" />
      <n-input v-model:value="password" name="password" placeholder="Password" />
      <div class="flex">
        <n-button attr-type="submit" type="primary" class="flex-1">Register</n-button>
      </div>
    </n-form>
  </div>
</template>