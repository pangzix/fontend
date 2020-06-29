<template>

    <v-bottom-navigation
      scroll-target="#scroll-area-1"
      hide-on-scroll
      scroll-threshold="500"
      absolute
      color="white"
      horizontal
    >
      <v-btn>
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
        <v-spacer></v-spacer>
          <Scrolltop />
    </v-bottom-navigation>


</template>

<script>
    import Scrolltop from '../components/Scrolltop'
    export default {
        name: "Bottomnav",
        components:{
            Scrolltop,
        }
    }
</script>

<style scoped>

</style>
