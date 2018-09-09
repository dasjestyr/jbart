<template>
  <div class="home">
    <h2>Items I may be interested in</h2>
    <carousel :per-page="4" loop navigationEnabled v-if="babes.length > 0">
      <slide v-for="photo in babes" v-bind:key="photo.id">
        <router-link to="/item">
          <b-img rounded width="300" v-bind:src="photo.thumb" thumbnail />
        </router-link>
      </slide>
    </carousel>
    <h2>Recent Listings</h2>
    <carousel :per-page="4" loop navigationEnabled v-if="aww.length > 0">
      <slide v-for="photo in aww" v-bind:key="photo.id">
        <a v-bind:href="photo.full">
          <b-img rounded width="300" v-bind:src="photo.thumb" thumbnail />
        </a>
      </slide>
    </carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {Carousel, Slide} from 'vue-carousel'

export default {
  name: 'home',
  data() {
    return {
      aww: [],
      babes: []
    }
  },
  methods: {
    loadPictures() {
      let web = require('axios')
      let self = this;

      // load aminals
      web.get('https://www.reddit.com/r/aww.json')
        .then((resp) => {
          resp.data.data.children.forEach((child) => {
            self.aww.push({
              thumb: child.data.thumbnail,
              full: child.data.preview.images[0].source.url
            })
            
          })
        })

      // load babes
      web.get('https://www.reddit.com/r/Hotness.json')
        .then((resp) => {
          resp.data.data.children.forEach((child) => {
            self.babes.push({
              thumb: child.data.thumbnail,
              full: child.data.preview.images[0].source.url
            })
          })
        })
    }
  },
  created() {
    console.log(vuex)
    this.loadPictures()
  },
  components: {
    HelloWorld,
    Carousel,
    Slide
  }
}
</script>

<style>
  .home {
    margin: 20px;
  }
</style>
