import Product from '../apis/Product';

export const getProducts = ({commit}) => {
    Product.all().then(response => {
        commit('SET_PRODUCTS', response.data);
    })
    .catch( error => {
        console.log(error)
    })
    // axios.get('http://localhost:8000/api/product')
        
}

export const getProduct = ({commit}, productId) => {
    Product.show(productId).then(response => {
        commit('SET_PRODUCT', response.data);
    })
    // axios.get(`http://localhost:8000/api/product/${productId}`)
        
}

// export const getCartItems = ({ commit }) => {
//     Cart.all().then(response => {
//         commit('SET_CART', response.data);
//     })
// }

export const addProductToCart = ({commit}, {product, quantity}) => {    
    commit('ADD_TO_CART', {product, quantity});
}

export const removeProductFromCart = ({commit}, product) => {
    commit('REMOVE_PRODUCT_FROM_CART', product);
}

export const clearCartItems = ({commit}) => {
    commit('CLEAR_CART_ITEMS');
}