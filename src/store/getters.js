export const cartItemCount =  (state) => {
    return state.cart.length;
}

export const cartTotalPrice =  (state) => {
    let total = 0;
    state.cart.forEach(item => {
        total += item.product.selling_price * item.quantity
    })
    return total;
}