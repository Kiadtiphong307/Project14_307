<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">

      <router-link :to="{ name: 'main' }">
        <img src="https://cdn-icons-png.flaticon.com/512/1376/1376786.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top">
      </router-link>

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link :to="{ name: 'cart' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span>[ {{ totalItems }} ]</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{ name: 'orderList' }">
          <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="60" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
          </svg>
        </router-link>
        </li>

      </ul>

    </div>
    
  </nav>
</template>

<script setup>
import {  computed } from 'vue';
import { cart } from '../stores/counter';


const totalItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0));
</script>


<style scoped>
.nav-item{
  padding: 10px;
}
</style>