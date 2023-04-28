<template>
    <div class="container" v-if="article">
        <div class="row">
            <div class="col-12">
            <div class="fs-2">
                {{ article.title }}
            </div>
        </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-lg-8 mt-3">
                <div class="opacity-75 mb-3">Description:</div>
            <p class="font-monospace">
                {{ article.description }}
            </p>
        </div>
        <div class="col-lg-2 col-md-6 mt-3">
            <div class="opacity-75 mb-3">Created at:</div>
            <p class="font-monospace">
                {{ new Date(article.createdAt).toLocaleDateString('us') }}
            </p>
        </div>
        <div class="col-lg-2 col-md-6 mt-3">
            <div class="opacity-75 mb-3">Updated at:</div>
            <p class="font-monospace">
                {{ new Date(article.updatedAt).toLocaleDateString('us') }}
            </p>
        </div>
        </div>
        <div class="row">
            <div class="col-lg-4 mt-3">
                <div class="d-flex gap-3 align-items-center">
                    <div class="article-user_img bg-primary">
                        <span class="text-white text-uppercase fw-bold">{{article.author.username[0]}}</span>
                    </div>
                    <div class="fw-bold">
                        {{ article.author.username }}
                    </div>
                </div>
            </div>
            <div class="col-lg-8 mt-3">
                <div class="opacity-75 mb-3">Body:</div>
                <p>
                    {{ article.body }}
                </p>
            </div>
        </div>
    </div>
    <Loader v-else />
</template>

<script>
import {mapState} from "vuex";
export default {
    computed: {
        ...mapState({
            article: state => state.articles.articleDetail
        })
    },
}
</script>

<style scoped>
    .article-user_img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>