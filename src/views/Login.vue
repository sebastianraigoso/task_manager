<script setup>
  import { ref } from 'vue'

  const email = ref('')
  const password = ref('')

  const login = () => {
    fetch()
  }

  // check if user have an account

</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">

    <n-form @submit.prevent="login" class="flex flex-col gap-4 w-lg border-2 border-solid rounded-lg border-gray-300 p-10">
      <h1 class="p-10 text-2xl text-center font-medium">LOGIN</h1>
      <n-input name="email" type="email" placeholder="Email" />
      <n-input name="password" type="password" show-password-on="click" placeholder="Password" />
      <div class="flex flex-col gap-4 justify-end">

        <n-button attr-type="login" type="primary">
          <RouterLink to="/tasks">Login</RouterLink>
        </n-button>
        
        <div class="flex justify-center items-center gap-4">
         <p >Don't have an account ?</p>
          <!-- click event sent request backend to switch page -->
          <n-button text color="#4bab10">
            <RouterLink to="/register">Register</RouterLink>
          </n-button>
        </div>
      </div>
    </n-form>

  </div>
</template>