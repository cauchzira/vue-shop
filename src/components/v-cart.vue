<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog__link_to_cart">Вернуться к покупкам</div>
        </router-link>
        <h1>Корзина</h1>
        <p class="v-catalog__empty_cart" v-if='!cart_data.length'>Пока что Ваша корзина пуста...</p>
        <v-cart-item 
        v-for="(item, index) in cart_data"
        :key="item.acticle"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import {mapActions} from 'vuex'


export default {
    name: "v-cart",
    components: {
        vCartItem,
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data:() => ({}),
    computed: {},
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        }
    },
    watch: {},
}
</script>

<style lang="scss">
    .v-catalog__empty_cart {
        font-size: 42px;
    }
</style>