<template>
    <div id='article'>
        <div class='detail'>
            <h3> {{ title }} </h3>
            <p> {{ body }} </p>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        id: {require: true},
        title: {require: true, type: String},
        body: {require: true, type: String},
    },
}
</script>


<style scoped>
.detail {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}
</style>