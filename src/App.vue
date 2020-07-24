<template>
  <v-app>
      <navbar/>
      <v-main>
          <v-container  >
            <v-row >
                <v-col cols="12" xs="12" md="8">
                        <router-view/>
                </v-col>
                <v-col cols="12"  xs="12" md="4">
                    <Todolist />
                    <Aboutside />
                </v-col>
            </v-row>
          </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Navbar from './components/Navbar'
  import Todolist from './components/Todolist'
  import Aboutside from './components/Aboutside'

  export default{
    name:'app',
    components:{
      Navbar,
      Todolist,
      Aboutside,
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
