<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Кол-во: {{cart_item_data.quantity}}</p>
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
    }
</style>