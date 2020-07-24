<template>
    <div>
    <v-card flat>
        <v-tabs v-model="tab" centered>
            <v-tab v-for="item in info" :key="item.id">
                {{item.name}}
            </v-tab>
                    </v-tabs>
         </v-card>
             <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in info" :key="item.id">
                <v-card flat>
                    <v-card-text >
                        <Categoryarticlelist :cid="item.id"/>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>


</div>
</template>

<script>
    import Categoryarticlelist from '../components/Categoryarticlelist'
    export default {
        name: "Categorylist",
        components:{
          Categoryarticlelist,
        },
        data() {
            return {
                info: [],
                info2:[],
                tab:null,
                cid:'',
            }

        },
        mounted() {
            this.$axios.get("categories/")
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
