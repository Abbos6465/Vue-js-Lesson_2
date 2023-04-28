<template>
    <header class="bg-primary w-100 py-2 text-white px-5">
            <div class="d-flex justify-content-between align-items-center">
                <div class="nav-logo">
                    <h2 class="fs-1">
                        <RouterLink :to="{name:'home'}" class="text-white text-decoration-none">Project</RouterLink>
                    </h2>
                </div>
                <div class="fs-5 d-flex align-items-center justify-content-between gap-3">
                    <template v-if="isLoggedIn">
                        <RouterLink :to="{name:'home'}" class="text-white text-decoration-none">{{ user.username }}</RouterLink>
                        <RouterLink :to="{name:'create-article'}" class="btn btn-warning rounded-pill px-3 py-2 text-white fw-bold">Create article</RouterLink>
                        <button  class="btn btn-warning rounded-pill px-3 py-2 text-white fw-bold" @click="logout">Logout</button>  
                    </template>
                    <template v-if="isAnonymous">
                        <RouterLink :to="{name:'register'}" class="text-white text-decoration-none">Register</RouterLink>
                        <RouterLink :to="{name:'login'}" class="text-white text-decoration-none">Login</RouterLink>
                    </template>
                </div>
            </div>
    </header>
</template>
<script>
import {gettersTypes} from "@/store/modules/types"
import {mapGetters} from "vuex";
import { RouterLink } from 'vue-router';
export default {

    data() {
        return {
            
        }
    },

    computed:{
        ...mapGetters({
            user:gettersTypes.currentUser,
            isLoggedIn: gettersTypes.isLoggedIn,
            isAnonymous: gettersTypes.isAnonymous
        }),
    },

    methods: {
        logout(){

            this.$store.dispatch('logout');
            this.$router.push({name: 'login'})
        }
    },

}
</script>
<style scoped>
    
</style>