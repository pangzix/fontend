<template>

<!--        文章列表-->
        <Archive />

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
