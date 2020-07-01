<template>
    <v-container>
        <v-row>
            <v-col class="pb-12">
                <div class="display-3">{{info.title}}</div>
                <v-spacer></v-spacer>
                <div v-html="info.body_html" class="text-left"></div>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    import axios from 'axios'
    export default {
        name: "Articledetail",
        components:{
        },
        data () {
            return {
                content:'',
                info:'',


            }

        },
        methods:{
            initDetail(){
                var aid = this.$route.params.id;
                axios
                     .get('http://api.lesphon.fun/api/articles/'+ aid +'/')
                     .then(response  => (this.info = response.data))
                     .catch(error => console.log(error))
            }

        },
        mounted() {
            this.initDetail()

        }
    }

</script>

