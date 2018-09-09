<template>
    <img v-bind:src="imgSrc" />
</template>

<script>
export default {
    props: ['src'],
    data() {
        return {
            imgSrc: ''
        }
    },
    create() {
        this.store = new Vuex.Store({
            
        })
        console.log(this.store);
        this.imgSrc = this.src
    }
}
</script>

