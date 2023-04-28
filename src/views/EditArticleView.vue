<template>
    <div>
        <EditArticle v-if="article" :article="article" />
        <Loader v-else />
    </div>
</template>
<script>
import { EditArticle } from '../components';
import { mapState } from 'vuex';
export default {
    components:{EditArticle},
    computed:{
        ...mapState({
            article: state => state.articles.articleDetail,
        }),
    },
    mounted() {
        this.$store.dispatch("articleDetail", this.$route.params.slug);
    },
}
</script>
<style scoped>
    
</style>