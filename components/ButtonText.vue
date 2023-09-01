<template>
    <div class="flex mt-2">
        <div class="flex items-center hover:translate-x-2 transition ease-in-out hover:cursor-pointer main-button">
            <font-awesome-icon icon="fa-solid fa-arrow-up" class="mr-2 rotate-45" />
            <p class="text-2xl">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    props: {
        icon: {
            type: String,
            default: "fa-solid fa-arrow-up"
        },
        iconClass: {
            type: String,
            default: ""
        }
    },

    methods: {

    },

    computed: {

    },

    mounted() {

    },
}
</script>


<style>
.main-button::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #222;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .25s ease-in-out;
}

.main-button:hover::after {
    transform-origin: right;
    transform: scaleX(1);
}
</style>