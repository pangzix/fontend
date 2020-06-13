<template>
    <v-card flat>
        <v-list rounded>
            <v-subheader>Recents</v-subheader>
           <v-list-item-group v-model="item" color="primary">
             <v-list-item v-for="(item ,i) in items" :key="i">
               <v-list-item-content>
                 <v-list-item-title v-text="item.text"></v-list-item-title>
               </v-list-item-content>
             </v-list-item>
           </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: "Recents",
        data () {
            return{
                item:1,
                items:[
                    {text:'real-tiem',},
                    {text:'real-tiem',},
                    {text:'real-tiem',},
                        ],
            }
    }

    }
</script>

<style scoped>

</style>
