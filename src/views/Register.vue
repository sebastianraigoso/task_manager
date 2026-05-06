<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  import { ref } from 'vue'

  const username = ref('')
  const email = ref('')
  const password = ref('')

  const register = async () => {
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
      })
    })
  
    const data = await response.json()
  
    if (data.success) {
      router.push('/tasks')
    }
  }

  

</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <n-form @submit.prevent="register" class="flex flex-col gap-4 w-lg border-2 border-solid rounded-lg border-gray-300 p-4">

      <h1 class="p-10 text-2xl text-center font-medium">REGISTER</h1>
      <n-input v-model:value="username" type="text" name="username" placeholder="Username" />
      <n-input v-model:value="email" type="email" name="email" placeholder="Email" />
      <n-input v-model:value="password" type="password" show-password-on="mousedown" name="password" placeholder="Password" />

      <div class="flex">
        <n-button attr-type="submit" type="primary" class="flex-1">Register</n-button>
      </div>

    </n-form>
  </div>
</template>