// import Vue from "vue"
// import Vuex from "vuex"
// import axios from 'axios'
// Vue.use(Vuex);

// let store = new Vuex.Store(
//     {
//         state: {
//             products: [],
//             cart: [],
//         },
//         mutations: {
//             SET_PRODUCTS_TO_STATE: (state, products) => {
//                 state.products = products
//             },
//             SET_PRODUCT_TO_CART: (state, product) => {
//                 if (state.cart.length) {
//                     let isProduct = false
//                     state.cart.map((item) => {
//                         if (item.article === product.article) {
//                             isProduct = true
//                             item.quantity++
//                         }
//                     })
//                     if (!isProduct)
//                     state.cart.push(product)
//                 } else {
//                     state.cart.push(product)
//                 }
//             },
//             REMOVE_FROM_CART: (state, index) => {
//                 state.cart.splice(index, 1)
//             },
//             INCREMENT_CART_ITEM: (state, index) => {
//                 state.cart[index].quantity++
//             },
//             DECREMENT_CART_ITEM: (state, index) => {
//                 if (state.cart[index].quantity > 1)
//                     state.cart[index].quantity--
//             }
//         },
//         actions: {
//             ADD_TO_CART({ commit }, product) {
//                 commit("SET_PRODUCT_TO_CART", product)
//             },
//             GET_PRODUCTS_FROM_API({ commit }) {
//                 return axios('http://localhost:3000/products', { method: "GET" })
//                     .then((products) => {
//                         commit("SET_PRODUCTS_TO_STATE", products.data)
//                         return products
//                     })
//                     .catch((error) => {
//                         console.log(error)
//                         return error
//                     })
//             },
//             DELETE_FROM_CART({ commit }, index) {
//                 commit("REMOVE_FROM_CART", index)

//             },
//             INCREMENT_CART_ITEM({commit}, index){
//                 commit("INCREMENT_CART_ITEM", index)
//             },
//             DECREMENT_CART_ITEM({commit}, index){
//                 commit("DECREMENT_CART_ITEM", index)
//             }
//         },
//         getters: {
//             PRODUCTS(state) {
//                 return state.products;
//             },
//             CART(state) {
//                 return state.cart
//             }
//         },

//     }
// );
// export default store;