<template>
  <q-layout view="hHh lpR fFf" >
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-btn-group spread>
        <q-btn 
          to="/" 
          icon="home" 
          label="Home" 
          no-caps stack 
          :color="homeColor"
          :text-color="homeTextColor" 
          @click="handleHomeClick"
        />
        <q-btn 
          to="/ChatPage" 
          icon="question_answer" 
          label="Chat" 
          no-caps stack 
          :color="chatColor"
          :text-color="chatTextColor" 
          @click="handleChatClick"
        />
        <q-btn 
          icon="shopping_cart" 
          label="Cart" 
          no-caps stack 
          :color="cartColor"
          :text-color="cartTextColor" 
          @click="handleCartClick"
        />
      </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  data () {
    return {
      homeColor: "grey-1",
      homeTextColor: "grey-10",
      chatColor: "grey-1",
      chatTextColor: "grey-10",
      cartColor: "grey-1",
      cartTextColor: "grey-10",
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    handleHomeClick () {
      this.homeColor = "primary"
      this.homeTextColor = "white"
      this.chatColor = "grey-1"
      this.chatTextColor = "grey-10"
      this.cartColor = "grey-1"
      this.cartTextColor = "grey-10"
    },
    handleChatClick () {
      this.homeColor = "grey-1"
      this.homeTextColor = "grey-10"
      this.chatColor = "primary"
      this.chatTextColor = "white"
      this.cartColor = "grey-1"
      this.cartTextColor = "grey-10"
    },
    handleCartClick () {
      this.homeColor = "grey-1"
      this.homeTextColor = "grey-10"
      this.chatColor = "grey-1"
      this.chatTextColor = "grey-10"
      this.cartColor = "primary"
      this.cartTextColor = "white"
    }
  }
}
</script>