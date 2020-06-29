<template>
  <v-timeline>
    <v-timeline-item
      v-for="item in info"
      :key="item"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold `"
          v-text="item"
        ></span>
      </template>
      <div class="py-4">

        <div>
            <Archivelist :year="item.substring(0,4)" :month="item.substring(5,7 )"/>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  import Archivelist from '../components/Archivelist'

    export default {
        name: "Archive",
      components:{
        Archivelist,
      },
        data() {
            return {
                info: [],

            }
        },
        mounted(){
                this.$axios.get("http://127.0.0.1/api/articles/archive/dates/")
                    .then(response => {
                        this.info = response.data;
                    }).catch(error => console.log(error.response))
        },

    }
</script>

<style scoped>

</style>
