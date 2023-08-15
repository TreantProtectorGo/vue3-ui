<template>
  <q-page > 

    
    <div class="q-pa-md">
    <q-responsive :ratio="1/1" style="width: 95vw; max-width: 100%;">
      <q-carousel 
        animated
        v-model="slide"
        navigation
        infinite
        swipeable
        :autoplay="autoplay"
        arrows
        class="bg-grey-1 shadow-2 rounded-borders"

        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
      <q-carousel-slide :name="1" img-src="~assets/4.jpg" />
      <q-carousel-slide :name="2" img-src="~assets/5.jpg" />
      <q-carousel-slide :name="3" img-src="~assets/d1.jpg" />
      <q-carousel-slide :name="4" img-src="~assets/d2.jpg" />
      <q-carousel-slide :name="5" img-src="~assets/d3.jpg" />
      <q-carousel-slide :name="6" img-src="~assets/d4.jpg" />
      <q-carousel-slide :name="7" img-src="~assets/d5.jpg" />
      <q-carousel-slide :name="8" img-src="~assets/d6.jpg" />

      </q-carousel>
    </q-responsive>
  </div>
  
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      padding="lg"
      color="primary"
      icon="qr_code_scanner"
      label="Scan" 
      no-caps 
      stack 
    />
    <q-btn
      padding="lg"
      color="primary"
      icon="map"
      label="Map" 
      no-caps 
      stack 
    />
  </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true),
    }
  },
  name: 'IndexPage'
})
</script>
<style>
</style>