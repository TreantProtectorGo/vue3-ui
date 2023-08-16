<template>
  <q-page > 
    <div class="q-pa-md">
      <q-responsive :ratio="1/1" style="max-width:100%;height:auto;">
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
  
    <div class="q-pa-md">
      <div class="row items-start q-gutter-md">
        <q-responsive :ratio="3/4" class="col">
          <q-btn
            to="/QRCode"
            color="primary"
            icon="qr_code_scanner"
            label="Scan Code"
            size="lg"
            no-caps stack no-wrap 
            @click="handleClick"
          />
        </q-responsive>

        <q-responsive :ratio="3/4" class="col">
          <q-btn
            color="primary"
            icon="map"
            label="VR Map"
            size="lg"
            no-caps stack no-wrap 
          />
        </q-responsive>

        <q-responsive :ratio="3/4" class="col">
          <q-btn
            color="primary"
            icon="3d_rotation"
            label="AR View"  
            size="lg"
            no-caps stack no-wrap 
            href="https://chaujin.github.io/SmartTrolley2/"
          />
        </q-responsive>

      </div>
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
  name: 'IndexPage',
  methods: {
    handleClick () {
      this.homeColor = "grey-1"
      this.homeTextColor = "grey-10"
      this.chatColor = "grey-1"
      this.chatTextColor = "grey-10"
      this.cartColor = "grey-1"
      this.cartTextColor = "grey-10"
    }
  }
})
</script>
<style>
</style>