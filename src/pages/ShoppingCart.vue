<template>
    <q-page-sticky position="bottom-right" :offset="[16,16]">
      <q-btn
        fab
        icon="add"
        style="background-color: #2ecc71; color: white"
      />
    </q-page-sticky>
  
    <div>
      <input type="text" v-model="barcode" @keydown.enter="addItem" placeholder="Enter barcode" />
      <button @click="addItem">Add Item</button>
    </div>
    <q-card v-for="(item, index) in cartItems" :key="index">
      {{ item }}
      <q-btn
        icon="delete_outline"
        round
        color="red"
        @click="confirm[index] = true"
      />
      <q-dialog v-model="confirm[index]" persistent v-if="confirm[index]">
        <q-card>
          <q-card-section class="row items-center">
            <div class="text-h6">Delete Product</div>
          </q-card-section>
  
          <q-card-section class="q-pt-none">
            Are you sure you want to delete this Product?
          </q-card-section>
  
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Delete" color="red" v-close-popup @click="removeItem(index)"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        barcode: '',
        cartItems: [],
        confirm: [],
      };
    },
    methods: {
      addItem() {
        if (this.barcode) {
          this.cartItems.push(this.barcode);
          this.confirm.push(false);
          this.barcode = '';
        }
      },
      removeItem(index) {
        this.cartItems.splice(index, 1);
        this.confirm.splice(index, 1);
      },
    }
  };
  </script>