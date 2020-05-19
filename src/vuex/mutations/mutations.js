export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products
    },
    SET_PRODUCT_TO_CART: (state, product) => {
        if (state.cart.length) {
            let isProduct = false
            state.cart.map((item) => {
                if (item.article === product.article) {
                    isProduct = true
                    item.quantity++
                }
            })
            if (!isProduct)
            state.cart.push(product)
        } else {
            state.cart.push(product)
        }
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
    },
    INCREMENT_CART_ITEM: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT_CART_ITEM: (state, index) => {
        if (state.cart[index].quantity > 1)
            state.cart[index].quantity--
    }
}