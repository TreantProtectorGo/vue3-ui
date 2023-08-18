<style>
  .cart {
    display: flex;
  }
  p {
    display: block; 
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 2px;
    margin-right: 2px;
    flex: auto;
    word-wrap: break-word;
    width: 50px;
  }
  #A{
      display: grid;
      height: 110px;
      grid-template-areas:"B C D"
                          "B C D"
                          "B C D";
  }
  #B{
      grid-area: B;
  }
  #C{
      grid-area: C;
  }
  #D{
      grid-area: D;
  }
</style>
<template>
  <div class="q-pa-xs">
    <div class="q-mb-xs">
      <!-- Input for entering barcode -->
      <q-toolbar>
        <q-input
          type="text"
          v-model="barcode"
          @keydown.enter="addItem"
          label="Enter barcode"
          style="width: 100%;"
        >
          <template v-slot:prepend>
            <q-icon name="input" />
          </template>
          <template v-slot:append>
            <q-btn @click="addItem" label="Add" icon="add" flat />
          </template>
        </q-input>
        <q-space />
      </q-toolbar>
    </div>

    <div v-if="cartItems.length === 0" class="text-primary q-gutter-sm text-center">
      <br>
      <br>
      <br>
      <div class="text-h6">
        Hi! What are you looking for today?
      </div>
      <q-icon name="remove_shopping_cart" size="100px" />
    </div>
  </div>

  <div class="q-pa-sm">
    <!-- Displaying cart items -->
    <q-card v-for="(item, index) in cartItems" :key="index" flat>
      <div class="q-gutter-y-sm cart" >
        <q-toolbar >
          <q-toolbar-title>
            <q-img
              style="max-width: 250px; min-width: 100px; min-height: 100px; flex: 1;"
              src="~assets/zoom-front-383615.png"
            />
          </q-toolbar-title>
          <p>{{ item.barcode }}</p>
      
          <q-separator dark vertical />

          <!-- Count input and buttons -->
          <q-card class="row">
            <q-btn dense flat icon="add" style="max-width: 25px" @click="handleAddCount(index)" />
            <q-input
              class="q-pl-sm"
              type="text"
              v-model="item.count"
              borderless
              dense
              readonly
              style="max-width: 25px;"
            >
            <q-layout>
              <q-page-sticky position="bottom-right" :offset="[30,60]">
                <q-btn dense  fab icon="add" style="background-color: #2ecc71; color: white" />
              </q-page-sticky>
            </q-layout>
            
            </q-input>
            <q-btn dense icon="remove" flat style="max-width: 25px" @click="handleReduceCount(index)" />
            <q-btn dense icon="delete_outline" flat style="max-width: 25px" @click="confirm[index] = true" />
          </q-card>
        </q-toolbar>
        <!-- Confirmation dialog for removing item -->
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
              <q-btn flat label="Delete" color="red" v-close-popup @click="removeItem(index)" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </q-card>
  </div>
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
        this.cartItems.push({ barcode: this.barcode, count: 1 });
        this.confirm.push(false);
        this.barcode = '';
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
      this.confirm.splice(index, 1);
    },
    handleAddCount(index) {
      this.cartItems[index].count += 1;
    },
    handleReduceCount(index) {
      if (this.cartItems[index].count === 1 ) 
      {
        this.confirm[index] = true; 
      } 
      else if(this.cartItems[index].count > 1) 
      {
        this.cartItems[index].count--;
      }
      else 
      {
        this.cartItems.splice(index, 1);
      }
    }
  },
};
</script>

