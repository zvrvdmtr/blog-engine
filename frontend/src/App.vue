<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

button {
  cursor: pointer;
  margin-left: 10px;
  padding: 5px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
}
</style>
