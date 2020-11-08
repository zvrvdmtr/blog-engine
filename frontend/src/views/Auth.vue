<template>
    <div>
        <navigation></navigation>
        <form v-on:submit.prevent="userAuth">
            <input type="text" autocomplete="off" v-model.trim="email" placeholder="Email"/>
            <input type="text" autocomplete="off" v-model.trim="password" placeholder="Password"/>
            <button type="submit">Sing in</button>
        </form>
    </div>
</template>

<script>
import Navigation from '../components/Navigation'

export default {

    components: {
        Navigation
    },

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        async userAuth() {
            const dataFromApi = await fetch('http://127.0.0.1:3000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'jwt': localStorage.jwt
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            });
            const result = await dataFromApi.json();
            localStorage.jwt = result.jwt;
            this.email = this.password = '';
            this.$router.push('/');
        }
    }
}
</script>