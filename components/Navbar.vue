<template>
    <div>
        <nav
            class="bg-dark-blue fixed z-40 bottom-0 left-1/2 -translate-x-1/2 border-b border-gray-200 dark:border-gray-600 mb-5 px-2 rounded-full">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
                <div class="flex w-auto order-1" id="navbar-sticky">
                    <ul class="flex text-xs flex-row font-medium space-x-3">
                        <li v-for="menu in menus">
                            <nuxt-link :to="menu.title == 'home' ? '/' : menu.title" @click="menuSelect(menu)" class="block rounded-full px-2 py-1 uppercase"
                                :class="menu.active ? 'bg-blue-50 text-blue-950' : 'bg-none text-white'">{{ menu.title }}</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    data() {
        return {
            menus: [
                {
                    title: "home",
                    active: false
                },
                {
                    title: "about",
                    active: false
                },
                {
                    title: "skills",
                    active: false
                },
                {
                    title: "experience",
                    active: false
                },
                {
                    title: "contact",
                    active: false
                },
            ]
        }
    },

    methods: {
        menuSelect(item) {
            this.menus.forEach((item) => {
                if (item.active == true) {
                    item.active = false
                }
            })

            item.active = true
        },
    },

    computed: {
        getRoute() {
            return this.$route.fullPath.slice(1)
        }
    },

    mounted() {
        console.log(this.getRoute);
        this.menus.forEach((item) => {
            item.active = false

            if(item.title == "home" && this.getRoute == '') {
                item.active = true
            } else if (item.title == this.getRoute) {
                item.active = true
            }
        })
    }
}
</script>