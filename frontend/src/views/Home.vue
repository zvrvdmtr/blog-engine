<template>
    <div>
        <navigation></navigation>
        <h2>Articles</h2>
        <div class="card" v-for="article in articles" v-bind:key='article._id'>
            <article-item v-bind:id='article._id' v-bind:title='article.title' v-bind:body='article.body'></article-item>
        </div>
        <p v-if='!articles.length'>Articles list is empty!</p>
    </div>
</template>


<script>

import ArticleItem from '../components/ArticleItem'
import Navigation from '../components/Navigation'

export default {
    name: 'home',
    components: {
        ArticleItem,
        Navigation
    },

    async created() {
        this.getArticles();
    },

    data() {
        return {
            articles: []
        }
    },

    methods: {
        async getArticles() {
            let dataFromApi = await fetch('http://127.0.0.1:3000/articles');
            this.articles = await dataFromApi.json();
        },
    }
}

</script>

<style scoped>
.card {
    margin-right: auto;
    margin-left: auto;
    width: 50%;
    margin-bottom: 40px;
}
</style>