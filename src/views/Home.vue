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
      <Articlelist/>
      </v-col>


      <v-col cols="12" md="4" class="pb-12">
      <v-col cols="auto">
<!--日历-->
<Calendar/>
      </v-col>
        <v-col>
          <Recents/>
        </v-col>


      </v-col>

    </v-row>
  </v-container>

</template>

<script>


  import Recents from '../components/Recents'
  import Articlelist from '../components/Articlelist'
  import Calendar from '../components/Calendar'

export default {

    components:{

      Recents,
      Articlelist,
        Calendar,
    },
  data(){
    return {

      projects:[
        {title:'Desgin a new website',person:'The aaa',due:'1st Jan 2020',status:'ongoing',content:'this is test'},
        {title:'Code up the homepage',person:'The aaa',due:'10th Jan 2020',status:'complete',content:'this is test'},
        {title:'Design video thumbnails',person:'The aaa',due:'20th Jan 2020',status:'complete',content:'this is test'},
        {title:'Create a community forum',person:'The aaa',due:'1st Oct 2019',status:'overdue',content:'this is test'},
      ],
      colors:[
              'indigo',
              'warning',
              'pink darken-2',
              'red lighten-1',
              'deep-purle accent-4',
      ],
      slides:[
              'First',
              'Second',
              'Third',
              'Fourth',
              'Fifth',
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
