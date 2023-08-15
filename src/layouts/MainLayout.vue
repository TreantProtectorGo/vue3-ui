<template>
  <q-layout view="hHh lpR fFf" >
    <q-page-container>
      <router-view />
    </q-page-container>
    

    <q-footer >
      <q-btn-group spread >
        <q-btn icon="home" label="Home" no-caps stack color="white" text-color="black" />
        <q-btn icon="question_answer" label="Chat" no-caps stack color="white" text-color="black" />
        <q-btn icon="shopping_cart" label="Cart" no-caps stack color="white" text-color="black" />
      </q-btn-group>
    </q-footer>

  </q-layout>
</template>