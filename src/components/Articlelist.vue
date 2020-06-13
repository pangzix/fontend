<template>
    <div>
        <v-card  light flat class="mx-auto" v-for="article in info" :key="article.id" >
            <v-list-item>
                <v-img src="" height="194" color="color"></v-img>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{article.title}}</v-list-item-title>
                    <v-list-item-subtitle>{{article.created}}·<v-btn text x-small @click="change(value1,article.category.id)"> {{article.category.name}}</v-btn> </v-list-item-subtitle>
                    <v-card-text class="text-left">
                        {{article.excerpt}}
                    </v-card-text>
                </v-list-item-content>
            </v-list-item>

            <v-card-actions>
                <v-btn text color="deep-purple accent-4"><router-link :to="'/article/'+ article.id" tag="div">More</router-link></v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </v-card-actions>
            <v-divider/>
        </v-card>

         <div class="text-center" >
        <v-pagination
            circle
            v-model="page"
            :length="Math.floor(total/6)"
            :total-visible="8"
            @input="change"
            @next="1"
            @previous="2"

        ></v-pagination>
         </div>
        </div>

</template>

<script>

    export default {
        name: "Articlelist",
        data() {
            return{

                info:[],
                page:1,
                total:1,
                value1:1,
                value2:'',
                url:'http://192.168.1.20:8080/api/articles/',
            }
        },
        methods:{
          change(value1,value2){
              let url = this.url;
              url = url+ "?category="+ value2 + "&p=" + value1 ;
              this.$axios.get(url).then(response => {
                  this.info = response.data.results;
                  this.total = response.data.count;
              }).catch(error => {
                  console.log(error.response);
              })
          },
        },
    created() {
        this.change(1,'')
    }
    }
</script>

<style scoped>

</style>
