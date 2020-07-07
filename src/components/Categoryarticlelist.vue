<template>
    <v-container class="container-fluid">
<v-card  light flat class="mx-auto" v-for="article in info" :key="article.id" >
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
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </v-card-actions>
            <v-divider/>
</v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Categoryarticlelist",
        props:['cid'],
        data(){
            return{
                info:'',


            }
        },
        mounted() {
            var id = this.cid
                this.$axios.get("http://api.lesphon.fun/categorylist/" ,{
                    params:{
                        category:id,
                    }
                })
                    .then(response => {
                        this.info = response.data;
                    })
                    .catch(error => {
                        console.log(error.response)
                    })

        },

    }
</script>

<style scoped>

</style>
