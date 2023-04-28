import ArticleService from "@/service/articles";

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

    deleteArticleStart(state){
        state.isLoading = true;
    },
    deleteArticleSuccess(state){
        state.isLoading = false;
    },
    deleteArticleFailure(state,payload){
        state.isLoading = false;
    },

    editArticleStart(state){
        state.errors = null;
        state.validationPage = null;
        state.isLoading = true;
    },
    editArticleSuccess(state){
        state.isLoading = false;
        state.validationPage = null;
    },
    editArticleFailure(state,payload){
        state.isLoading = false;
        state.errors = payload.errors;
        state.validationPage = "edit-article";
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
    },

    deleteArticle(context,slug){
        return new Promise((resolve,reject)=>{
            context.commit('deleteArticleStart');
            ArticleService.deleteArticle(slug)
            .then((response)=>{
                context.commit("deleteArticleSuccess");
                resolve();
            })
            .catch((error)=>{
                context.commit("deleteArticleFailure");
                reject();
            })
        })
    },

    updateArticle(context,data){
        return new Promise((resolve,reject)=>{
            context.commit("editArticleStart");
            ArticleService.updateArticle(data.article,data.slug)
            .then((response)=>{
                context.commit("editArticleSuccess");
                resolve(response);
            })
            .catch((error)=>{
                context.commit("editArticleFailure",error.response.data);
                reject(error    );
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}