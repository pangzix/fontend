<template>
    <div >
        <v-card  light flat class="mx-auto" v-for="article in info" :key="article.id"  app>
            <v-list-item>
                <v-img src="" height="194" color="color"></v-img>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{article.title}}</v-list-item-title>
                    <v-list-item-subtitle>{{article.created}}·<v-btn text x-small>{{article.category.name}}</v-btn> </v-list-item-subtitle>
                    <v-card-text class="text-left">
                        {{article.excerpt}}
                    </v-card-text>
                </v-list-item-content>
            </v-list-item>

            <v-card-actions>
                <v-btn text color="deep-purple accent-4" :to="'/article/'+article.id">More</v-btn>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                 <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                </template>
                    <span>未完成</span>
                </v-tooltip>
            </v-card-actions>
            <v-divider/>
        </v-card>

        <v-pagination
            circle
            color="deep-purple accent-4"
            v-model="page"
            :length="Math.floor(total/10)"
            :total-visible="8"
            @input="change"
            @next="1"
            @previous="2"

        ></v-pagination>


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
                show:true,
            }
        },
        methods:{

          change(){

              this.$axios.get("articles/",{
                  params:{
                      p:this.page,
                  }
                  }
              ).then(response => {
                  this.info = response.data.results;
                  this.total = response.data.count;

              }).catch(error => {
                  console.log(error.response);
              })
          },
        },
    created() {
        this.change()
    }
    }
</script>

<style scoped>

</style>
