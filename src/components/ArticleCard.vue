<template>
    <div class="col">
        <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
            </svg>
            <div class="card-body">
                <p class="card-text fw-bold">{{ article.title.slice(0,50)}}</p>
                <p class="">
                    {{ article.body.slice(0,220) }}
                    <span class="fw-bold">...</span>
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" @click="navigateHandler">Read article</button>
                        <button :disabled="isLoading" @click="deleteArticleHandler" v-if=" user!=null && article.author.username == user.username" type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                    </div>
                    <small class="text-body-secondary">{{new Date(article.createdAt).toLocaleDateString("us")}}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props: {
        article: {
            type: Object,
            required: true
        }
    },

    computed:{
        ...mapState({
            user: state => state.auth.user,
            isLoading: state => state.control.isLoading,
        })
    },

    methods: {
        navigateHandler(){
            return this.$router.push(`/article/${this.article.slug}`);
        },

        deleteArticleHandler(){
           return  this.$store.dispatch("deleteArticle", this.article.slug)
            .then(()=>{
                this.$store.dispatch('articles');
            })
            .catch(()=>{
                alert("Failed to delete");
            });
           
        }
    },
}
</script>
<style scoped></style>