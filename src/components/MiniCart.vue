<template>
    <div>
        <div class="dropdown-menu p-2" style="min-width:320px;right:0;left:auto" aria-labelledby="triggerId">

            <div v-for="item in cart" :key="item.id">
                <div class="px-2 d-flex justify-content-between">
                    <div>
                        <strong>{{ item.product.product_name }}</strong>
                        <br>{{item.quantity}} X ${{item.product.selling_price}}
                    </div>
                    <div>
                        <a href="#" class="badge badge-secondary" @click.prevent="removeProductFromCart(item.product)">remove</a>
                    </div>
                </div>
            </div>
            <hr>
            <div class="d-flex justify-content-between">
                <span>Total: ${{ cartTotalPrice }}</span>
                <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    computed:{
        ...mapState(['cart']),

        ...mapGetters(['cartTotalPrice'])
    },
    methods:{
        // removeProductFromCart(product){
        //     this.$store.dispatch('removeProductFromCart', product);
        // },
        ...mapActions(['removeProductFromCart', 'clearCartItems'])
        // clearCartItems(){
        //     this.$store.dispatch('clearCartItems');
        // }
    }
}
</script>