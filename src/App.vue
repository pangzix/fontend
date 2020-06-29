<template>
  <v-app>
    <v-content>
      <navbar/>
      <router-view/>

    </v-content>
    <Bottomnav />
  </v-app>
</template>

<script>
  import Navbar from './components/Navbar'
  import Bottomnav from './components/Bottomnav'

  export default{
    name:'app',
    components:{
      Navbar,
      Bottomnav,
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
