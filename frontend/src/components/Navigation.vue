<template>
    <div>
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link v-if="!loggedIn" to='/auth'>Sign in</router-link></li>
            <li><router-link v-if="!loggedIn" to='/register'>Sign up</router-link></li>
            <li><router-link v-if="loggedIn" to='/logout'>Logout</router-link></li>
            <li><router-link v-if="loggedIn" to='/article'>Add article</router-link></li>
            <li v-show="loggedIn"><a href="#">{{ user }}</a></li>
        </ul>
    </div>
</template>

<script>
export default {

    data() {
        return {
            loggedIn: !!localStorage.getItem('jwt')
        }
    },

    computed: {
        user: function() {
            return localStorage.getItem('jwt')
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
    background-color: WhiteSmoke;
    margin-bottom: 20px;
}

li {
    float: left;
}

li a {
    display: block;
    padding: 8px;
    text-decoration: none;
    color: black
}

li a:hover {
    background-color: lightgray;
}

li:last-of-type {
    float: right;
}
</style>