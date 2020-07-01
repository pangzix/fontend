<template>
    <v-container>
        <v-row>
            <v-col class="pb-12">
                <div class="display-3">{{info.title}}</div>
                <v-spacer></v-spacer>
                <div class="markdown-body text-left" >
                <VueMarkdown :source="info.body"  v-highlight></VueMarkdown>
                </div>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    import axios from 'axios'
    import VueMarkdown from 'vue-markdown'
    export default {
        name: "Articledetail",
        components:{
            VueMarkdown,
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

