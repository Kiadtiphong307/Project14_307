import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

const menu_list=ref([
    {name:'ข้าวผัด', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907495588528258/1.jpg?width=800&height=585", price:50},
    {name:'ผัดกะเพรา', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907495894716518/2.jpg?width=1040&height=585", price:40 },
    {name:'ผัดไท', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907493038395514/3.jpg?width=1200&height=575", price:45 },
    {name:'ก๋วยเตี๋ยวหมู', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907493373947994/4.jpg?width=750&height=500", price:55 },
    {name:'สุกี้', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907493701099682/5.jpg?width=895&height=585", price:60 },
    {name:'ส้มตำ', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907493973725195/6.jpg?width=1113&height=585", price:60 },
    {name:'ราดหน้า', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907494250557570/7.jpg?width=878&height=585", price:55 },
    {name:'ไข่เจียวหมูสับ', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907494628032512/8.jpg?width=800&height=585", price:45 },
    {name:'ข้าวหมูกรอบ', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907494934220820/9.jpg?width=1000&height=562", price:55 },
    {name:'ข้าวมันไก่', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907495244607528/10.jpg?width=1113&height=585", price:40 },
    {name:'ข้าวขาหมู', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907499434721361/11.jpg?width=800&height=585", price:50 },
    {name:'ข้าวซอยไก่', img:"https://media.discordapp.net/attachments/1153766321666932836/1155907499703152690/12.jpg?width=800&height=540", price:60 },
])

return { menu_list }
})