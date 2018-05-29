<template>
  <div class="user">
    <div @click="goback()">Usersfsfd</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
    }
  },
  methods: {
    goback () {
      console.log(this.$route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
