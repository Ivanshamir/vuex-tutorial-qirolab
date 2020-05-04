<template>
  <div class="col-3 mt-3">
            <div class="card h-100 text-left">
                <img class="card-img-top w-100" src="https://via.placeholder.com/150x100" alt="">
                <div class="card-body">
                    <h5 class="card-title">
                       <router-link :to="{name: 'product', params: {id: product.id}}" >{{ product.product_name }}</router-link>
                    </h5>
                    <strong>{{ product.selling_price }}</strong>
                    <p class="card-text">Category Name: {{product.category_name}} & Supplier Name: {{product.supplier_name}}</p>
                </div>
                <div class="px-4 pb-3">
                    <button class="btn btn-secondary" @click="addToCart()">Add to Cart</button>
                </div>
            </div>
        </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: ['product'],
    methods:{
        ...mapActions(['addProductToCart']),

        addToCart(){
            this.addProductToCart({
                product: this.product,
                quantity: 1
            });
        }
    }
}
</script>

<style>

</style>