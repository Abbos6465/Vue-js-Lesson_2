<template>
    <div class="d-flex align-item-center justify-content-center" v-if="!isLoggedIn">
        <div class="text-danger text-center fs-2">
            Register in the system to edit an article
        </div>
    </div>
    <div v-else class="container mx-auto">
            <h1 class="text-center mb-3 display-4">Update Article</h1>
            <div class="w-75 mx-auto mb-3">
                <ValidationError v-if="validationErrors && validationPage == 'edit-article'"
                    :validationErrors="validationErrors" />
            </div>
            <div class="article_form w-75 mx-auto rounded-2 shadow-lg py-3 px-4">
                <form @submit.prevent>
                    <Input :label="'Title'" :type="'text'" v-model="title" />
                    <Textarea :label="'Description'" :type="'text'" v-model="description" />
                    <Textarea :label="'Body'" :type="'text'" v-model="body" />
                    <Button type="submit" :disabled="isLoading" @click="editArticleHandler" v-if="isLoading">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </Button>
                    <Button class="mt-4" @click="editArticleHandler" :disabled="isLoading" v-else>Edit article</Button>
                </form>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import ValidationError from "./ValidationError.vue";
export default {
    components: { ValidationError },

    props: {
        article: {
            type: Object,
            required: true
        }
    },

    methods: {
        editArticleHandler() {
            const article = {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: [],
            }
            console.log(article);
            this.$store.dispatch("updateArticle", { article: article, slug: this.article.slug })
                .then((article) => {
                    console.log(article);
                    this.$router.push({ name: 'home' })
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },

    computed: {
        ...mapState({
            isLoading: state => state.control.isLoading,
            validationErrors: state => state.control.errors,
            validationPage: state => state.control.validationPage,
            isLoggedIn: state => state.auth.isLoggedIn,
        }),
    },


    data() {
        return {
            title: this.article.title,
            description: this.article.description,
            body: this.article.body,

        }
    },
}
</script>
<style scoped></style>