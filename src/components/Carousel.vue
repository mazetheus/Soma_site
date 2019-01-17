<template>
  <div class='carousel-view row'>
    <div class='carousel-controls col-2 align-self-center'>
      <button class='carousel-controls__button' @click="previous">prev</button>
    </div>
    <transition-group
      class='carousel col-9'
      tag="div">
      <div
        v-for="slide in slides" 
        class='slide'
        :key="slide.id">
        <h4> {{ slide.nome }} </h4>
      </div>
    </transition-group>
    <div class='carousel-controls col-1 align-self-center'>
      <button class='carousel-controls__button' @click="next">next</button>
    </div>
  </div>
</template>

<script>
import img from '../assets/servicos.jpg'
export default {
  data () {
    return {
      slides: [
        {id: 1, nome: "Nome da obra", content: "conteúdo falando sobre a obra", image: img},
        {id: 2, nome: "Nome da obra 2", content: "conteúdo falando sobre a obra 2", image: img},
        {id: 3, nome: "Nome da obra 3", content: "conteúdo falando sobre a obra 3", image: img}
      ]
    }
  },
  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>
  
<style>
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 25em;
}

.slide {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1em dashed #000;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}

.slide:first-of-type {
  opacity: 0.5;
}
.slide:last-of-type {
  opacity: 0.5;
}
</style>