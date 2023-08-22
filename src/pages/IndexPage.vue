<style>
.box {
  border: 1px solid #ccc;
}
</style>
<template>
  <q-page>
    <div class="q-pa-md">
      <div>
        <div
          v-if="$q.screen.width > 768"
          class="bg-grey-1 shadow-2 rounded-borders"
        >
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            swipeable
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/4.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/5.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d1.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d2.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div
                class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d3.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d4.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
              <div
                class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d5.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d6.jpg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            swipeable
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/4.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/5.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d1.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d2.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d3.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d4.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d5.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="~assets/d6.jpg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div v-else>
          <q-responsive :ratio="1 / 1" style="justify-content: center">
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
      </div>
    </div>
    <div v-if="$q.screen.width > 768">
      <div class="q-pa-sm">
        <div
          class="row items-start q-gutter-sm"
          style="justify-content: center"
        >
          <q-btn
            class="one col-3"
            to="/QRCode"
            color="primary"
            icon="qr_code_scanner"
            size="35px"
            label="Scan Code"
            no-caps
            stack
            no-wrap
            @click="handleClick"
            style="min-height: 250px; min-width: 255px"
          />
          <q-btn
            class="two col-3"
            color="primary"
            icon="map"
            size="35px"
            label="VR Map"
            no-caps
            stack
            no-wrap
            to="/BarcodeScanner"
            style="min-height: 250px; min-width: 255px"
          />
          <q-btn
            class="three col-3"
            color="primary"
            icon="3d_rotation"
            label="AR View"
            size="35px"
            no-caps
            stack
            no-wrap
            href="https://chaujin.github.io/DEMO/"
            style="min-height: 250px; min-width: 255px"
          />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="q-pt-sm">
        <div
          class="row items-start q-gutter-xs"
          style="justify-content: center"
        >
          <q-btn
            class="one col-3"
            to="/QRCode"
            color="primary"
            icon="qr_code_scanner"
            size="lg"
            label="Scan Code"
            no-caps
            stack
            no-wrap
            @click="handleClick"
            style="min-height: 200px; min-width: 110px"
          />
          <q-btn
            class="two col-3"
            color="primary"
            icon="map"
            size="lg"
            label="VR Map"
            no-caps
            stack
            no-wrap
            to="/BarcodeScanner"
            style="min-height: 200px; min-width: 110px"
          />
          <q-btn
            class="three col-3"
            color="primary"
            icon="3d_rotation"
            label="AR View"
            size="lg"
            no-caps
            stack
            no-wrap
            href="https://chaujin.github.io/SmartTrolley2/"
            style="min-height: 200px; min-width: 110px"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
  name: "IndexPage",
  methods: {
    handleClick() {
      this.homeColor = "grey-1";
      this.homeTextColor = "grey-10";
      this.chatColor = "grey-1";
      this.chatTextColor = "grey-10";
      this.cartColor = "grey-1";
      this.cartTextColor = "grey-10";
    },
  },
});
</script>
