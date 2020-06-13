<template>
    <div v-if=""><articledetail/></div>
    <div v-else><Categortyarticlelist/><</div>


</template>

<script>
import Articledetail from '../components/Articledetail'
import Categortyarticlelist from '../components/Categoryarticlelist'
    export default {
        name: "Articles",
        components:{
            Articledetail,
            Categortyarticlelist,
        }
    }
</script>

<style scoped>

</style>
