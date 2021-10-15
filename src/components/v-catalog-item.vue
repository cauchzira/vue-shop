<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="img">
        <p class="v-catalog-item__name">{{ product_data.name }}</p>
        <p class="v-catalog-item__price">Цена: {{ product_data.price }}р.</p>
        <button 
            class="v-catalog-item__add_to_cart_btn btn"
            @click="addToCart">Купить
        </button>
    </div>
</template>

<script>


export default {
    name: "v-catalog-item",
    components: {},
    props: {
        product_data : {
            type: Object,
            default:() => {
                return {}
            }
        }
    },
    data:() => ({
    }),
    computed: {},
    methods: {
        addToCart() {
            this.$emit('addToCart',this.product_data)
        }
    },
    watch: {},
}
</script>

<style lang="scss">
    .v-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 10px 3px #adadad;
        padding: $padding*2;
        margin-bottom: $margin*3;
        &__image {
            width: 155px;
            height: 220px;
        }
        &__add_to_cart_btn {
            color: #fff;
            background-color: #000000;
            border: 1px solid #acacac;
            border-radius: $radius*2;
            padding: $padding;
            transition: .45s ease;
            font-size: 16px;
            width: 45%;
            &:hover {
                color:#000;
                background-color: #56da7d;
            }
        }
    }
</style>