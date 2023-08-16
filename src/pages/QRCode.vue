<script setup>

</script>

<template>
  
   <div class="q-pa-md row justify-center">
    <p class="error">{{ error }}</p>

    <p class="decode-result">
      <b>{{ result }}</b>
    </p>
    <qrcode-stream class="qr" @detect="onDetect" @error="onError">
      </qrcode-stream>
    <qrcode-capture @detect="onDetect" ></qrcode-capture>
    

  </div>
</template>

<script>
import { ref } from 'vue'
import { QrcodeStream, QrcodeCapture } from 'vue-qrcode-reader'

export default {
  name: 'App',
  components: {
    QrcodeStream,
    QrcodeCapture
  },

  // data
  data() {
    return {
      result: '',
      error: ''
    }
  },

  methods: {
    onDetect(detectedCodes) {
      console.log(detectedCodes)

      const [firstCode] = detectedCodes
      this.result = firstCode.rawValue
      //window.location.href = this.result;
    },

    onError(err) {
        error.value = `[${err.name}]: `

        if (err.name === 'NotAllowedError') {
            error.value += 'you need to grant camera access permission'
        } else if (err.name === 'NotFoundError') {
            error.value += 'no camera on this device'
        } else if (err.name === 'NotSupportedError') {
            error.value += 'secure context required (HTTPS, localhost)'
        } else if (err.name === 'NotReadableError') {
            error.value += 'is the camera already in use?'
        } else if (err.name === 'OverconstrainedError') {
            error.value += 'installed cameras are not suitable'
        } else if (err.name === 'StreamApiNotSupportedError') {
            error.value += 'Stream API is not supported in this browser'
        } else if (err.name === 'InsecureContextError') {
            error.value += 'Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.'
        } else {
            error.value += err.message
        }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
