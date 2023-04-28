<template>
    <div class="auth-layout">
        <RouterView></RouterView>
    </div>
</template>
<script>
  import {RouterView} from "vue-router";
  import {Navbar} from "@/components";
  export default {
    components: {
        Navbar
    }
  }
  </script>
  
  <style scoped>
    
  </style>