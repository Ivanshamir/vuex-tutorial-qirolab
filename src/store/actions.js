import axios from 'axios';

export const getProducts = ({commit}) => {
    axios.get('http://localhost:8000/api/product')
        .then(response => {
            commit('SET_PRODUCTS', response.data);
        })
        .catch( error => {
            console.log(error)
        })
}

export const getProduct = ({commit}, productId) => {
    axios.get(`http://localhost:8000/api/product/${productId}`)
        .then(response => {
            commit('SET_PRODUCT', response.data);
        })
}

export const addProductToCart = ({commit}, {product, quantity}) => {    
    commit('ADD_TO_CART', {product, quantity});
}

export const removeProductFromCart = ({commit}, product) => {
    commit('REMOVE_PRODUCT_FROM_CART', product);
}

export const clearCartItems = ({commit}) => {
    commit('CLEAR_CART_ITEMS');
}