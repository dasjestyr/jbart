<template>
    <div>
        <h1>{{imgTitle}}</h1>
        <p>
            <font-awesome-icon icon="backward" />
            <router-link to="/"> Go Back</router-link>
        </p>
        <img v-bind:src="imgSrc" />
    </div>
</template>

<script>
import store from '@/store'
export default {
    props: ['src'],
    data() {
        return {
            imgSrc: '',
            imgTitle: ''
        }
    },
    created() {
        this.imgSrc = store.getters.clickedImg.imgSrc
        this.imgTitle = store.getters.clickedImg.title
    }
}
</script>

