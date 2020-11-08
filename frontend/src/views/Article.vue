<template>
    <div>
        <navigation></navigation>
        <article-form v-if="!articleId" v-on:article-added="addArticle"></article-form>
        <div v-else>
            <div v-if="!isEditing">
                <article-detail
                    v-bind:title="this.article.title"
                    v-bind:body="this.article.body"
                ></article-detail>
                <button v-show="canDelete" type="button" v-on:click="deleteArticle">Delete</button>
                <button v-show="canEdit" v-on:click="toogleToEditForm" type="button">Edit</button>
            </div>
            <article-edit-form
                v-else
                v-bind:title="article.title"
                v-bind:body="article.body"
                v-on:save-edit="editArticle"
                v-on:cancelled="editCancelled"
            ></article-edit-form>
        </div>
    </div>
</template>


<script>

import ArticleDetail from '../components/ArticleDetail.vue'
import ArticleForm from '../components/ArticleForm.vue'
import ArticleEditForm from '../components/ArticleEditForm.vue'
import Navigation from '../components/Navigation'

export default {
    name: 'home',
    components: {
        ArticleDetail,
        ArticleForm,
        ArticleEditForm,
        Navigation
    },

    async created() {
        if (this.articleId){
            this.getArticleDetail(this.$route.params.id);
        }
    },

    data() {
        return {
            article: [],
            articleId: this.$route.params.id,
            canDelete: false,
            canEdit: false,
            isEditing: false,
        }
    },

    methods: {
        async getArticleDetail(articleId) {
            let dataFromApi = await fetch(`http://127.0.0.1:3000/articles/${articleId}`);
            this.article = await dataFromApi.json();
            this.canDelete = this.canEdit = this.article.author._id === localStorage.jwt
        },

        async addArticle(title, body, author) {
            await fetch('http://127.0.0.1:3000/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    author: author
                })
            });
            this.$router.push('/')
        },
    
        async deleteArticle() {
            await fetch(`http://127.0.0.1:3000/articles/${this.articleId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            this.$router.push('/')
        },

        toogleToEditForm() {
            this.isEditing = true;
        },

        async editArticle(title, body) {
            await fetch(`http://127.0.0.1:3000/articles/${this.articleId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                })
            });
            this.isEditing = false;
            this.getArticleDetail(this.articleId);
        },

        editCancelled() {
            this.isEditing = false;
        }
    }
}

</script>