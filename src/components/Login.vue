<template>
    <div class="container">
        <div class="card w-50 mx-auto shadow-lg rounded-1 p-4 mt-5">
            <div class="form-signin w-100 m-auto">
                <form class="mb-3">
                    <div class="text-center">
                        <img class="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt=""
                        width="72" height="57">
                    </div>
                    <h1 class="h3 mb-3 fw-normal text-center">Sign in</h1>
                    <ValidationError v-if="validationErrors" :validationErrors="validationErrors"/>
                    <Input :label="'Email address'" :type="'email'" v-model="email" />
                    <Input :label="'Password'" :type="'password'" v-model="password" />
                    <Button type="submit" :disabled="isLoading" @click="submitHandler" v-if="isLoading">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </Button>
                    <Button type="submit" :disabled="isLoading" @click="submitHandler" v-else>
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex";
import ValidationError from "./ValidationError.vue";
export default {
    components:{ValidationError},

    data() {
        return {
            email:'',
            password: '',
        }
    },

    computed: {
        ...mapState({
            isLoading: state => state.auth.isLoading,
            validationErrors: state => state.auth.errors
        }),
    },

    methods: {
        submitHandler() {
            const data = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', data)
            .then(user => {
                console.log("User",user)
                this.$router.push({name:'home'});
            })
            .catch(error=>console.log("Error",error));
        }
    },
}
</script>
<style></style>