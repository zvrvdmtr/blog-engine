<template>
    <div>
        <router-link class="item" v-bind:to="'/article/' + this.id">{{ title }}</router-link>
        <p>by <a href='#' class="author">Ivan Ivanov</a></p>
        <p class='main'> {{ body }} </p>
        <p class="date">2020-11-08</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {require: true, type: String},
        body: {require: true, type: String},
        id: {require: true, type: String}
    }
}
</script>

<style scoped>

div {
    border-top: 1px solid lightgray;
}
.item {
    display: block;
    padding-top: 10px;
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bold;
}

p {
    padding: 0 20px;
    margin: 0;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.main {
    margin: 10px 0;
}

.date,
.author {
    color: teal;
}

</style>