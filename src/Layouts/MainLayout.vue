<template>
    <div class="main-layout">
        <Navbar/>
        <RouterView/>
    </div>
  </template>
  <script>
  import {Navbar} from "@/components";
  import {RouterView} from "vue-router";
  export default {
    components:{Navbar},
  
    mounted(){
      this.$store.dispatch('getUser');
    }, 
  }
  </script>
  
  <style scoped>
    
  </style>