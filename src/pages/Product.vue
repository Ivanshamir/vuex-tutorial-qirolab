<template>
    <div class="row mt-5" v-if="product">
        <div class="col-4">
            <img src="https://via.placeholder.com/150x100" class="w-100" alt="">
        </div>
        <div class="col-8">
            <h1>{{ product.product_name }}</h1>
            <h3>{{ product.selling_price }}</h3>

            <input type="text" v-model.number="quantity" class="text-center col-1 mr-2 p-1">
            <button class="btn btn-primary" @click="addToCart()">Add To Cart</button>

            <p class="mt-4">Product Code: {{product.product_code}} & Root: {{product.root}} & Buying Price: {{ product.buying_price }} & Product Quantity: {{ product.product_quantity }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            quantity: 1
        }
    },

    computed:{
        product(){
            return this.$store.state.product;
        }
    },
     methods:{
        addToCart(){
            this.$store.dispatch('addProductToCart', {
                product: this.product,
                quantity: this.quantity
            });
        }
    },

    mounted(){
        this.$store.dispatch('getProduct', this.id)
    }
}
</script>

<style>

</style>