<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted } from "vue";
import { supabase } from "./libs/supabaseClient.js";
const countries = ref([]);
const countriesLoading = ref(false);
async function getCountries() {
  try {
    countriesLoading.value = true;
    const { data } = await supabase.from("countries").select();
    countries.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    countriesLoading.value = false;
  }
}

onMounted(() => {
  getCountries();
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
 <!-- <HelloWorld msg="Vite + Vue" /> -->
<div class="container">
  <div v-if="countriesLoading" class="loading"></div>
  <ul v-else>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</div>

  
</template>

<style lang="scss" scoped>





.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  height: 100vh;  
}


.loading{
    height:50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor:progress;

    border-radius: 50%;
    border-top: 5px solid gold;
    border-bottom: 5px solid transparent;
    border-left: 5px solid gold;
    border-right: 5px solid transparent;

    animation: loading 1s linear infinite;
}




@keyframes loading {
  0% {
   transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

$size: 300px;
$duration: 2s;
$logo-color: grey;
$background: linear-gradient(
  0deg,
  rgba(50, 50, 50, 0.2) 0%,
  rgba(100, 100, 100, 0.2) 100%
);


body {
  height: 100dvh;
  display: grid;
  place-content: center;
  background: black;
}

.loader {
  height: $size;
  aspect-ratio: 1;
  background: transparent;
  position: relative;

  .box {
    position: absolute;
    background: rgba(100, 100, 100, 0.15);
    background: $background;
    border-radius: 50%;
    border-top: 1px solid rgba(100, 100, 100, 1);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    backdrop-filter: blur(5px);
    animation: ripple $duration infinite ease-in-out;

    &:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      inset: 40%;
      z-index: 99;
    }
    &:nth-child(2) {
      inset: 30%;
      z-index: 98;
      border-color: rgba(100, 100, 100, 0.8);
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      inset: 20%;
      z-index: 97;
      border-color: rgba(100, 100, 100, 0.6);
      animation-delay: 0.4s;
    }
    &:nth-child(4) {
      inset: 10%;
      z-index: 96;
      border-color: rgba(100, 100, 100, 0.4);
      animation-delay: 0.6s;
    }
    &:nth-child(5) {
      inset: 0%;
      z-index: 95;
      border-color: rgba(100, 100, 100, 0.2);
      animation-delay: 0.8s;
    }
  }

  .logo {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    padding: 30%;
    svg {
      fill: $logo-color;
      width: 100%;
      animation: color-change $duration infinite ease-in-out;
    }
  }
}

@keyframes ripple {
  0% {
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
  }
  50% {
    transform: scale(1.3);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 20px -0px;
  }
  100% {
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
  }
}

@keyframes color-change {
  0% {
    fill: $logo-color;
  }
  50% {
    fill: white;
  }
  100% {
    fill: $logo-color;
  }
}
</style>

