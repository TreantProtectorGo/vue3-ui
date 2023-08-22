<style></style>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-btn-group
        spread
        square
        :style="{ height: $q.screen.width > 768 ? '70px' : '' }"
      >
        <q-btn
          to="/"
          icon="home"
          label="Home"
          no-caps
          stack
          :color="homeColor"
          :text-color="homeTextColor"
          :size="btnSize"
          @click="handleHomeClick"
        />
        <q-btn
          to="/ChatPage"
          icon="question_answer"
          label="Chat"
          no-caps
          stack
          :color="chatColor"
          :text-color="chatTextColor"
          v-bind:size="btnSize"
          @click="handleChatClick"
        />
        <q-btn
          to="/ShoppingCart"
          icon="shopping_cart"
          label="Cart"
          no-caps
          stack
          :color="cartColor"
          :text-color="cartTextColor"
          v-bind:size="btnSize"
          @click="handleCartClick"
        />
      </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  data() {
    return {
      homeColor: "grey-2",
      homeTextColor: "primary",
      chatColor: "grey-2",
      chatTextColor: "grey-10",
      cartColor: "grey-2",
      cartTextColor: "grey-10",
      btnSize: "",
    };
  },
  mounted() {
    if (window.screen.width > 768) {
      this.btnSize = "1.4em";
      console.log(this.btnSize);
    }
  },
  methods: {
    openURL,
    handleHomeClick() {
      this.homeColor = "grey-2";
      this.homeTextColor = "primary";
      this.chatColor = "grey-2";
      this.chatTextColor = "grey-10";
      this.cartColor = "grey-2";
      this.cartTextColor = "grey-10";
    },
    handleChatClick() {
      this.homeColor = "grey-2";
      this.homeTextColor = "grey-10";
      this.chatColor = "grey-2";
      this.chatTextColor = "primary";
      this.cartColor = "grey-2";
      this.cartTextColor = "grey-10";
    },
    handleCartClick() {
      this.homeColor = "grey-2";
      this.homeTextColor = "grey-10";
      this.chatColor = "grey-2";
      this.chatTextColor = "grey-10";
      this.cartColor = "grey-2";
      this.cartTextColor = "primary";
    },
  },
};
</script>
