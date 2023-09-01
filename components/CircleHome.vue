<template>
    <div>
        <div class="rounded-full fixed z-0 -left-1/2 top-10 circle-gradient"
            style="height: 1500px; width: 1500px; background: radial-gradient(47.02% 47.02% at 50.00% 52.98%, #1F60DC 0%, rgba(31, 96, 220, 0.00) 100%);">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mouseY: 0,
            mouseX: 0,
        }
    },

    methods: {
        moveCircle(e) {
            const circle = document.querySelector('.circle-gradient')
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            // console.log("asdasd");
            circle.style.transform = `translate3d(${this.mouseX / 10}px, ${this.mouseY / 10}px, 0)`;
        }
    },

    computed: {
        cursorCircle() {
            // return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
        }
    },

    
    mounted() {
        window.addEventListener('mousemove', this.moveCircle)
    },

    unmounted() {
        window.removeEventListener('mousemove', this.moveCircle)
    }
    
}
</script>