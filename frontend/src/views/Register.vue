<template>
    <div>
        <navigation></navigation>
        <form v-on:submit.prevent='userRegistration'>
            <input type='text' autocomplete="off" placeholder="Email" v-model.trim="email">
            <input type='text' autocomplete="off" placeholder="Password" v-model.trim="password">
            <input type='text' autocomplete="off" placeholder="First name" v-model.trim="firstName">
            <input type='text' autocomplete="off" placeholder="Last name" v-model.trim="lastName">
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        }
    },

    methods: {
        userRegistration() {
            fetch('http://127.0.0.1:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                    firstName: this.firstName,
                    lastName: this.lastName
                })
            });
            this.email = this.password = this.firstName = this.lastName = '';
            this.$router.push('/')
        }
    }
}
</script>