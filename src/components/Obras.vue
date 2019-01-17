<template>
  <div class="obras text-left text-white row" id="obras">
    <div class="row mx-auto w-100">
      <div class="col-12">
      </div>
      <div class="col-12 w-100">
        <transition name="custom-class"
            :enter-active-class="'animated ' + active_class"
            :leave-active-class="'animated ' + leave_class"
            mode="out-in">
          <Obra class="obra" @proxObra="proxObra" @obraAnt="obraAnt" v-for="(obra,index) in obras" v-if="index == current" :nome="obra.nome" :key="index"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
//import img from '@/assets/servicos.jpg'

import Obra from './Obra.vue'

export default {
  name: "Obras",
  components: {
    Obra
  },
  data: ()=> {
    /*obras: [
        {nome: "Nome da obra", content: "conteúdo falando sobre a obra", image: img},
        {nome: "Nome da obra 2", content: "conteúdo falando sobre a obra 2", image: img}
      ],*/
    return {
      obras: [
        {nome: "Edifício 1"},
        {nome: "Edifício 2"}
      ],
      active_class: 'slideInRight',
      leave_class: 'slideOutLeft',
      current: 0,
      sliding: false
    }
  },
  methods: {
    proxObra() {
      this.current += 1;
      this.active_class = 'slideInRight';
      this.leave_class = 'slideOutLeft';
      if (this.current >= this.obras.length) {
        this.current = 0;
      }
    },
    obraAnt() {
      this.active_class = 'slideInLeft';
      this.leave_class = 'slideOutRight';
      this.current -= 1;
      if (this.current < 0) {
        this.current = this.obras.length - 1;
      }
    },
    enter (el, done) {
      this.sliding = true
      done()
    },
    leave(el, done) {
      this.sliding = false
      done()
    }
  }
}
</script>

<style scoped>
  .obras-header::first-letter {
    border-bottom: 3px solid #fb9527;
  }

  .obras {
    background: #f7f7f7;
    padding: 0px 0px 0px 156px;
    overflow: hidden;
  }

  .obras-header {
    color: #575757;
  }

  .content {
    padding: 16px 156px;
  }

  .obra {
  }

  @media (max-width: 768px) {
    .obras {
      padding: 0px 0px 0px 108px;
    }
  }

  @media (max-width: 576px) {
    .obras {
      padding: 0px;
    }
  }
</style>

