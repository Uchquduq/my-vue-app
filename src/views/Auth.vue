<template>
  <div class="relative lg:mx-auto w-full md:max-w-[500px] bg-white rounded-2xl">
    <div class="rounded-2xl w-full md:max-w-[500px]">
      <div
        class="border-neutral-400 bg-neutral-50 relative rounded-xl px-8 py-12 drop-shadow-sm"
      >
        <div class="mb-6 flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <h1 class="flex justify-center w-full text-center text-primary text-2xl">Ro'yxatdan o'tish</h1>
          </div>
          <p class="text-center text-neutral-400 text-auth-widget-test">
            Boshqa saytlardagi akkaunt yordamida ro'yxatdan o'tish  
          </p>
        </div>
        <Auth
          :supabaseClient="supabaseClient"
          :magicLink="true"
          :showLinks="true"
          socialLayout="vertical"
          :appearance="{
            theme: ThemeSupa,
          }"
          :providers="['google', 'github']"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
// Import predefined theme
import {  ThemeSupa } from '@supabase/auth-ui-shared';
import { supabaseClient } from '../libs/supabase/supabase';
import { Auth } from '@nuxtbase/auth-ui-vue';
interface Country {
  // Define the properties of the country object
  // Example: id: number; name: string;
}

</script>

<style scoped></style>