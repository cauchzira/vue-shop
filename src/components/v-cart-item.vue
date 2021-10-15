<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Кол-во:</p>
            <span class="v-cart__btn__wrapp">
                <button class="quantity__btn btn__plus" @click="incrementItem">+</button>
                {{cart_item_data.quantity}}
                <button class="quantity__btn btn__minus" @click="decrementItem">-</button>
            </span>
        </div>
        <button class="v-cart-item__del_btn" @click="deleteFromCart">Удалить</button>
    </div>
</template>

<script>

export default {
    name: "v-cart-item",
    components: {},
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data:() => ({}),
    computed: {},
    methods: {
        decrementItem() {
            this.$emit('decrement');
        },

        incrementItem() {
            this.$emit('increment');
        },

        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
    },
    watch: {},
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1)
    }
}
</script>

<style lang="scss">
    .v-cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 10px 3px #adadad;
        padding: $padding*2;
        margin-bottom: $margin*3;
        &__image {
            max-width: 100px;
        }
        &__del_btn {
            background-color: #464646;
            color: #fff;
            padding: $padding;
            border: none;
            border-radius: $radius;
            transition: .45s ease;
            &:hover {
                background-color: #f14a34;
                font-size: 16px;

            }
        }

        .v-cart__btn__wrapp {
            display: flex;
            align-items: center;
        }

        .quantity__btn {
            text-align: center;
            cursor: pointer;
            margin: $margin;
            width: 30px;
        }

        .btn__plus { 
            border: 1px solid #000;
            color: #fff;
            background-color: #464646;
            border-radius: $radius;
            transition: .45s ease;
            &:hover {
                background-color: #26ae68;
            }
        }

        .btn__minus { 
            border: 1px solid #000;
            color: #fff;
            background-color: #464646;
            border-radius: $radius;
            transition: .45s ease;
            &:hover {
                background-color: #f14a34;
            }
        }


    }
</style>