import axios from 'axios'

export default {
    ADD_TO_CART({ commit }, product) {
        commit("SET_PRODUCT_TO_CART", product)
    },
    GET_PRODUCTS_FROM_API({ commit }) {
        return axios('http://localhost:3000/products', { method: "GET" })
            .then((products) => {
                commit("SET_PRODUCTS_TO_STATE", products.data)
                return products
            })
            .catch((error) => {
                console.log(error)
                return error
            })
    },
    DELETE_FROM_CART({ commit }, index) {
        commit("REMOVE_FROM_CART", index)

    },
    INCREMENT_CART_ITEM({ commit }, index) {
        commit("INCREMENT_CART_ITEM", index)
    },
    DECREMENT_CART_ITEM({ commit }, index) {
        commit("DECREMENT_CART_ITEM", index)
    }
}