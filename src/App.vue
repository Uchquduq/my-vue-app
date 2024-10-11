<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { supabaseClient } from './libs/supabase/supabase.js';

const authUser = ref();
const router = useRouter();
onMounted(() => {
  supabaseClient.auth.onAuthStateChange((_, _session) => {
    console.log('AUTH_CHANGED');

    if (_session) {
      authUser.value = _session.user;
      router.push('/');
    } else {
      authUser.value = undefined;
      router.push('/auth');
    }
  });
});

interface Country {
  id: number;
  name: string;
}

const countries = ref<Country[]>([]); 

const loading = ref(false);

async function getCountries() {
  try {
    loading.value = true
    const { data } = await supabaseClient.from('countries').select()
    console.log(data)
    if(data) {
      countries.value = data
    } else {
      countries.value = []
    }
  } catch (error) {
    console.log(error)
  } finally {
    
  }
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <div>
    <header class="bg-[#f9f7f1;
]"> 
      <div class="container flex justify-between items-center h-20">
        <div class="text-2xl font-extrabold text-black">Donishmandlar</div>
        <nav class="flex items-center">
          <RouterLink to="/" class="text-black mx-4 text-xl font-semibold"
            >Bosh sahifa</RouterLink
          >
          <RouterLink v-if="!authUser" to="/auth" class="text-black mx-4 text-xl font-semibold"
            >Ro'yxatdan o'tish</RouterLink
          >
          <RouterLink v-else to="/profile" class="text-black mx-4 text-xl font-semibold"
            >Akkaunt</RouterLink
          >
        </nav>
      </div>
    </header>
    <main class="container mx-auto">
      <div class="flex items-center justify-center min-h-[calc(100dvh-80px)]">
        <div class="w-full">
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>

<style >

body {
  /* font-family: "Droid Serif", serif; */
  font-family: "Playfair Display", serif;

  font-size: 14px;
  color: #2f2f2f;
  background-color: #f9f7f1;
}
</style>