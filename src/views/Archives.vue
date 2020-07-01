<template>
  <v-container>
    <v-row>
<!--      <v-carousel-->
<!--    cycle-->
<!--    height="400"-->
<!--    hide-delimiter-background-->
<!--    show-arrows-on-hover-->
<!--  >-->
<!--    <v-carousel-item-->
<!--      v-for="(slide, i) in slides"-->
<!--      :key="i"-->
<!--    >-->
<!--      <v-sheet-->
<!--        :color="colors[i]"-->
<!--        height="100%"-->
<!--      >-->
<!--        <v-row-->
<!--          class="fill-height"-->
<!--          align="center"-->
<!--          justify="center"-->
<!--        >-->
<!--          <div class="display-3">{{ slide }} Slide</div>-->
<!--        </v-row>-->
<!--      </v-sheet>-->
<!--    </v-carousel-item>-->
<!--  </v-carousel>-->

    </v-row>
    <v-row>


      <v-col cols="12" md="8"  class="pb-12">
<!--        文章列表-->
        <Archive />
      </v-col>


      <v-col cols="12" md="4" class="pb-12">
      <v-col cols="auto">

      </v-col>
        <v-col>
<!--          <Archive/>-->
        </v-col>


      </v-col>

    </v-row>
  </v-container>

</template>

<script>

  import Archive from '../components/Archive'
  // import Calendar from '../components/Calendar'

export default {

    components:{
        Archive,
        // Calendar,
    },
  data(){
    return {
      colors:[
              'indigo',
              'warning',
              'pink darken-2',
              'red lighten-1',
              'deep-purle accent-4',
      ],
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b [prop] ? -1 : 1)
    }

  }
}
</script>
<style>
  .project.complete{

    border-left:4px solid #3cd1c2;

  }
  .project.ongoing{
    border-left:4px solid orange;
  }
  .project.overdue{
    border-left:4px solid tomato;
  }

</style>
