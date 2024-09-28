<script setup>
import { ref } from 'vue'
import { supabase } from '../utils/supabase'
const client = useSupabaseClient();
     const login = async (_prov: any) => {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  // To check the user
const user = useSupabaseUser()


// const loading = ref(false)
// const email = ref('')

// const handleLogin = async () => {
//   try {
//     loading.value = true
//     const { error } = await supabase.auth.signInWithOtp({
//       email: email.value,
//     })
//     if (error) throw error
//     alert('Check your email for the login link!')
//   } catch (error) {
//     if (error instanceof Error) {
//       alert(error.message)
//     }
//   } finally {
//     loading.value = false
//   }
// }
</script>

<template>
  <button @click="login">Login</button>
  <!-- <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Vue 3</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form> -->
</template>