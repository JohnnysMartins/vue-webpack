<template>
  <div>
    <h2>Users Overview</h2>
    <p>Team ID is {{ $route.params.teamId }}</p>
    <button @click="goHome"> go home</button>
  </div>
</template>

<script>
  export default {
    watch: {
      '$route'(to, from) {
        // alert(this.$route.params.teamId)
      }
    },
    created() {
      // alert(this.$route.params.teamId)
    },
    methods: {
      goHome(){
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
