<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { supabaseClient } from '../libs/supabase/supabase.js';
interface Country {
 id: number; 
 name: string;
}

const countries = ref<Country[]>([]); 

async function setCountries() {
  const { error } = await supabaseClient
  .from('countries')
  .insert({name: 'Denmark' })
  await console.log('inserted')
  getCountries() 
}
async function getCountries() {
  const { data , error } = await supabaseClient.from('countries').select()
  console.log(data)
  if(data) {
    countries.value = data
  }else {
    countries.value = []
    console.log(error)
  }
}

onMounted(() => {
  getCountries()
})

</script>

<template>
  <main>
    <div>
      <ul>
        <button
        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-red-600/10"
        @click="setCountries"
      >
        Set
      </button>
        <li v-for="country in countries" :key="country.id">{{ country.id}}. {{ country.name }}</li>
        </ul>
    </div>
  </main>
</template>