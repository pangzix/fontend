<template>
    <v-container>
        <v-row>
            <v-col class="pb-12">
                <div class="display-1">{{info.title}}</div>
                <v-sheet color="indigo lighten-5" >{{info.author.username}}|&&|{{info.created}}</v-sheet>
                <v-spacer></v-spacer>
                <pre class="markdown-body text-left" >
                <VueMarkdown :source="info.body" v-highlightjs ></VueMarkdown>
                </pre>

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
        watch:{

        },
        methods:{
            initDetail(){
                var aid = this.$route.params.id;
                axios
                     .get('http://api.lesphon.fun/articles/'+ aid +'/')
                     .then(response  => (this.info = response.data))
                     .catch(error => console.log(error))
            }

        },
        mounted() {
            this.initDetail()

        }
    }

</script>

