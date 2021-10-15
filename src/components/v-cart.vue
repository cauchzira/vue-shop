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
        @increment="increment(index)"
        @decrement="decrement(index)"
        />
        <div v-if='cartTotalCost' class="v-cart__total">
            <p class="total__name">Total:</p>
            <p>{{ cartTotalCost }}р.</p>
        </div>
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
    computed: {
        cartTotalCost() {
            let result = []
            
            if(this.cart_data.length) {
                for(let item of this.cart_data){
               result.push(item.price * item.quantity);
            }

            result = result.reduce(function(sum, el) {
                return sum + el;
            })
            return result;
            } else {
                return 0
            }
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),

        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },

        increment(index) {
            this.INCREMENT_CART_ITEM(index)
        },

        decrement(index){
            this.DECREMENT_CART_ITEM(index)
        },

    },
    watch: {},
}
</script>

<style lang="scss">
    .v-catalog__empty_cart {
        font-size: 42px;
    }
    .v-cart {
        margin-bottom: 100px;
        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding*2 $padding*3;
            display: flex;
            justify-content: center;
            background: #26ae68;
            color: #fff;
            font-size: 20px;
        }
        .total__name {
            margin-right: $margin*2;
        }
    }
</style>