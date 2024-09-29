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


async function getCountries() {
  const { data } = await supabaseClient.from('countries').select()
  console.log(data)
  if(data) {
    countries.value = data
  }else {
    countries.value = []
  }
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <div>
    <header class="bg-[#6c47ff]"> 
      <div class="container flex justify-between items-center h-20">
        <div class="text-2xl font-extrabold text-white">SupabaseAuth</div>
        <nav class="flex items-center">
          <RouterLink to="/" class="text-white mx-4 font-semibold"
            >Home (UnProtected)</RouterLink
          >
          <RouterLink v-if="!authUser" to="/auth" class="text-white mx-4 font-semibold"
            >Auth (UnProtected)</RouterLink
          >
          <RouterLink v-else to="/profile" class="text-white mx-4 font-semibold"
            >Profile (Protected)</RouterLink
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