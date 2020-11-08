<template>
    <div>
        <form v-on:submit.prevent="onSubmit">
            <input type="text" autocomplete="eff" v-model.trim="newTitle">
            <textarea autocomplete="eff" v-model.trim="newBody"></textarea>
            <button type="submit">Save</button>
            <button type="button" v-on:click="onCancel">Cancel</button>
        </form>
    </div>
</template>

<script>
export default {

    props: {
        id: {require: true},
        title: {require: true, type: String},
        body: {require: true, type: String}
    },

    data() {
        return {
            newTitle: this.title,
            newBody: this.body
        }
    },

    methods: {
        onSubmit() {
            if (this.newTitle) {
                this.$emit('save-edit', this.newTitle, this.newBody)
            }
        },

        onCancel() {
            this.$emit('cancelled')
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
    text-align: left;
    display: block;
    width: 50%;
    height: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    border: none;
}
</style>