<template>
    <nav>
        <v-toolbar flat class="grey lighten-4">
            <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light" @click="$router.push('/')">Notebook</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

        </v-toolbar>



        <v-navigation-drawer  v-model="drawer"  app  color="grey lighten-4" light bottom>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="text-uppercase grey--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-footer padless fixed color="grey lighten-4" >
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Power By Vuetify</strong>
    </v-col>
  </v-footer>

        </v-navigation-drawer>
    </nav>
</template>
<script>

    export default {
        name: "Navbar",
        components:{

        },
        data(){
            return{
                drawer:false,
                 links:[
                    { icon: 'mdi-view-dashboard', text: '首页', route: '/'},
                    { icon: 'mdi-book', text: '分类', route: '/category'},
                    { icon: 'mdi-book', text: '归档', route: '/archive'},
                    { icon: 'mdi-book', text: '小工具', route: '/tools'},
                    { icon: 'mdi-email', text: '@@@@@', route: '/about'},
                ],

            }
        }
    }
</script>

