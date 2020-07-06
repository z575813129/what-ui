<template>
  <div>
    <h1>Hello {{title}}</h1>
  </div>

</template>

<script>
  export default {
    name: "wbutton",
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
