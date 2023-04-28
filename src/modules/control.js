import ArticleService from "../service/articles";

const state = {
    isLoading: false,
    errors:null,
    validationPage:null,
}

const mutations = {
    createArticleStart(state){
        state.errors = null;
        state.validationPage = null;
        state.isLoading = true;
    },
    createArticleSuccess(state){
        state.isLoading = false;
        state.validationPage = null;
    },
    createArticleFailure(state,payload){
        state.isLoading = false;
        state.errors = payload.errors;
        state.validationPage = "create-article";
    },

}

const actions = {
    createArticle(context,article){
        return new Promise((resolve,reject)=>{
            context.commit('createArticleStart');
            ArticleService.createArticle(article)
            .then((response)=>{
                context.commit("createArticleSuccess");
                resolve(response.data.article);
            })
            .catch((error)=>{
                context.commit("createArticleFailure",error.response.data);
                reject(error.response.data);
            })
        });
    }
}

export default {
    state,
    mutations,
    actions
}