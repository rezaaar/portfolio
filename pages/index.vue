<template>
    <div class="container mx-auto px-8 h-screen text-dark-blue">
        <!-- <div class="circle-cursor z-0 fixed"></div> -->
        <CircleHome></CircleHome>

        <div class="h-full flex justify-between items-center">
            <div class="w-1/2 z-20 flex">
                <img src="../assets/image/reza.png" class="" alt="">
            </div>

            <div class="w-1/2 text-end">
                <h1 class="text-7xl font-bold">I’m <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 bg-300% animate-gradient-text">Reza</span>
                    Athallah</h1>
                <div class="flex w-full justify-end">
                    <p class="text-2xl w-2/3">I’m a Frontend Developer & learning iOS development</p>
                </div>
                <!-- <div class="flex justify-end mt-2">
                    <div
                        class="flex items-center hover:translate-x-2 transition ease-in-out hover:cursor-pointer main-button">
                        <font-awesome-icon icon="fa-solid fa-arrow-up" class="mr-2 rotate-45" />
                        <p class="text-2xl">
                            About me</p>
                    </div>
                </div> -->

                <ButtonText class="justify-end">About Me</ButtonText>

            </div>
        </div>

    </div>
</template>

<!-- <script>
export default {
    data() {
        return {

        }
    },

    methods: {

    },

    computed: {

    },

    mounted() {

    }
}
</script> -->