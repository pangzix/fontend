<template>


    <v-list >
        <v-list-item-group v-model="article" >
            <v-list-item  v-for="article in info2" :key="article.id">
                <v-list-item-content @click="$router.push('/article/'+ article.id)">{{article.title}}</v-list-item-content>

            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
    export default {
        name: "Archivelist",
        props:['year','month'],
        data(){
            return{
                info2:[],
                article:[],


            }
        },

        mounted(){

                var year=this.year
                var month = this.month
                this.$axios.get("http://api.lesphon.fun/articles/",{
                    params:{
                        created_year:year,
                        created_month:month,
                    }
                })
                    .then(response => {
                        this.info2 = response.data.results;
                    })
                    .catch(error => {
                        console.log(error.response)
                    })

        },
        // created() {
        //     this.get_list()
        // }

    }
</script>

<style scoped>

</style>
