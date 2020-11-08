<template>
    <form v-on:submit.prevent="onSubmit">
        <input type="text" autocomplete="off" v-model.trim="title" placeholder="Title">
        <textarea autocomplete="off" v-model.trim="body" placeholder="Tell your story..."></textarea>
        <button type="submit">Add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            body: '',
            author: localStorage.jwt,
        }
    },
    methods: {
        onSubmit() {
            this.$emit('article-added', this.title, this.body, this.author);
            this.title = '';
            this.body = '';
        }
    }
}
</script>

<style scoped>
input {
    font-size: 30px;
    border: none;
}

textarea {
    display: block;
    width: 50%;
    height: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    border: none;
}

</style>