<template>
    <div class="container mx-auto">
        <h1 class="text-center mb-3 display-4">Create Article</h1>
        <div class="article_form w-75 mx-auto rounded-2 shadow-lg py-3 px-4">
            <form @submit.prevent>
                <Input :label="'Title'" :type="'text'" v-model="title" />
                <Textarea :label="'Description'" :type="'text'" v-model="description" />
                <Textarea :label="'Body'" :type="'text'" v-model="body" />
                <Button type="submit" :disabled="isLoading" @click="createArticleHandler" v-if="isLoading">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </Button>
                <Button class="mt-4" @click="createArticleHandler"  :disabled="isLoading" v-else >Create article</Button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            title: '',
            description: '',
            body: ''
        }
    },

    methods: {
        createArticleHandler(){
            const article = {
                title:this.title,
                description:this.description,
                body:this.body,
                tagList:[],
            }
            this.$store.dispatch("createArticle",article);
            // this.$router.push({name:"home"});   
        },
    },

    computed: {
        ...mapState({
            isLoading: state => state.control.isLoading,
        }),
    },
}
</script>
<style scoped>
.article_form {
    min-height: 350px;
}
</style>