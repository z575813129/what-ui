<template>
  <div id="app">
    <wbutton :title="msg"></wbutton>
  </div>
</template>

<script>
  import wbutton from "./lib/wbutton";
export default {
  name: 'app',
  components: {wbutton},
  data () {
    return {
      msg: 'Welcome to what-ui'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
