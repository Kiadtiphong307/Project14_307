<template>
  <div>
    <h1 style="text-align: center;">รายการอาหาร</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(i,index) in shop_food" :key="index">
        <div class="card">
          <img :src="i.img" class="card-img-top" alt="..." width="150" height="300" />
          <div class="card-body">
            <h2 class="card-title" style="text-align: center;">{{ i.name }}</h2>
            <h5>ราคา {{i.price}} บาท</h5>
            <p class="card-text">
              <button class="btn btn-primary" type="submit" @click="handleAddToCart(i)" style="text-align: center;">เข้าตะกร้า</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { menuStore } from '../stores/All_menu';
import { addToCart } from '../stores/counter';

const allmenu = menuStore();
const shop_food = ref(allmenu.menu_list);

const handleAddToCart = (item) => {
  addToCart(item);
};
</script>

<style>

.card-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
