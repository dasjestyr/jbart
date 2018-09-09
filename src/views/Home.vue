<template>
  <div class="home">
    <h2>Items I may be interested in</h2>
    <carousel :per-page="4" loop navigationEnabled v-if="babes.length > 0">
      <slide v-for="photo in babes" v-bind:key="photo.id">
        <b-img rounded width="300" v-bind:src="photo.thumb" thumbnail @click="onImageClicked(photo.full, photo.title)" />  
        <p>{{photo.title}}</p>      
      </slide>
    </carousel>
    <h2>Recent Listings</h2>
    <carousel :per-page="4" loop navigationEnabled v-if="aww.length > 0">
      <slide v-for="photo in aww" v-bind:key="photo.id">
        <b-img rounded width="300" v-bind:src="photo.thumb" thumbnail @click="onImageClicked(photo.full, photo.title)" />        
        <p>{{photo.title}}</p>      
      </slide>
    </carousel>
  </div>
</template>

<script>

import {Carousel, Slide} from 'vue-carousel'
import store from '@/store'
import router from '@/router'

export default {
  store,
  name: 'home',
  data() {
    return {
      aww: [],
      babes: []
    }
  },
  methods: {
    onImageClicked(url, title) {
      store.dispatch('setClickedImg', {imgSrc: url, title: title})
      router.push({ name: 'item' })
    },
    loadPictures() {
      let web = require('axios')
      let self = this;

      // load aminals
      web.get('https://www.reddit.com/r/aww.json')
        .then((resp) => {
          mapResults(self.aww, resp)
        })

      // load babes
      web.get('https://www.reddit.com/r/Hotness.json')
        .then((resp) => {
          mapResults(self.babes, resp)
        })
    }
  },
  created() {    
    this.loadPictures()
  },
  components: {    
    Carousel,
    Slide
  }
}

function mapResults(collection, results){
  results.data.data.children.forEach((child) => {
    if(child.data.thumbnail === 'self')
      return;            
    collection.push(mapArticle(child))            
  })
}

function mapArticle(article) {
  return {
    thumb: article.data.thumbnail,
    full: article.data.preview.images[0].source.url,
    title: article.data.title
  }
}
</script>

<style>
  .home {
    margin: 50px;
  }
</style>
