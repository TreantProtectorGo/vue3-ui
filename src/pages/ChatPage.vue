<template>
  <div class="q-pa-xl row justify-center">
      <div style="width: 100%;">
      <q-chat-message
          name="Me"
          :text="['hey, how are you?']"
          sent
      />
      <q-chat-message
          name="ChatGPT"
          :text="['doing fine, how r you?']"
      />
      </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  setup () {
    return {

    }
  },
  name: 'ChatPage'
})
</script>