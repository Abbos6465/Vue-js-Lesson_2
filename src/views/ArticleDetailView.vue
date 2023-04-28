<template>
    <div>
        <ArticleDetail/>
    </div>
</template>
<script>
import {ArticleDetail} from "../components";
export default {
    components:{ArticleDetail},
    mounted() {
        this.$store.dispatch("articleDetail", this.$route.params.slug);
    },
}
</script>
<style>
    
</style>