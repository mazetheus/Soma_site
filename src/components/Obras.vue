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
          <Obra class="obra" @proxObra="proxObra" @obraAnt="obraAnt" v-for="(obra,index) in obras" v-if="index == current" :nome="obra.nome" :local="obra.local" :conclusao="obra.conclusao" :tipo="obra.tipo" :statusobra="obra.statusobra" :area="obra.area" :arquiteto="obra.arquiteto" :fotos="obra.fotos" :key="index"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Obra from './Obra.vue'

export default {
  name: "Obras",
  components: {
    Obra
  },
  data: ()=> {
    return {
      // Aqui vão as informações de cada obra que estará no portifólio da empresa
      obras: [
        {
        nome: "Edifício Petrópolis", 
        tipo: "Residencial",
        statusobra: "Concluída",
        local: "Petrópolis, Natal/RN",
        conclusao: "2016",
        area: "220m²",
        arquiteto: "Carol Azevedo / Gabriela Christine",
        fotos: [
            { url: require("../assets/fotos/Celeste/01.jpg")},
            { url: require("../assets/fotos/Celeste/02.jpg")},
            { url: require("../assets/fotos/Celeste/03.jpg")},
            { url: require("../assets/fotos/Celeste/04.jpg")},
            { url: require("../assets/fotos/Celeste/05.jpg")},
            { url: require("../assets/fotos/Celeste/06.jpg")},
            { url: require("../assets/fotos/Celeste/07.jpg")},
            { url: require("../assets/fotos/Celeste/08.jpg")},
            { url: require("../assets/fotos/Celeste/09.jpg")},
            { url: require("../assets/fotos/Celeste/10.jpg")},
            { url: require("../assets/fotos/Celeste/11.jpg")},
            { url: require("../assets/fotos/Celeste/12.jpg")},
        ]
        },

        {
        nome: "OTC – Office Tower Center", 
        tipo: "Comercial",
        statusobra: "Concluída",
        local: "Candelária, Natal/RN",
        conclusao: "2017",
        area: "24m²",
        arquiteto: "Camilla Soares",
        endereco: "@/assets/missao-bg.jpg",
        fotos: [
              { url: require("../assets/fotos/EscritorioSoma/01.jpg")},
              { url: require("../assets/fotos/EscritorioSoma/02.jpg")},
              { url: require("../assets/fotos/EscritorioSoma/03.jpg")},
              { url: require("../assets/fotos/EscritorioSoma/04.jpg")},
              { url: require("../assets/fotos/EscritorioSoma/05.jpg")},
              { url: require("../assets/fotos/EscritorioSoma/06.jpg")},
              { url: require("../assets/fotos/EscritorioSoma/07.jpg")},
              { url: require("../assets/fotos/EscritorioSoma/08.jpg")},
              { url: require("../assets/fotos/EscritorioSoma/09.jpg")},
              { url: require("../assets/fotos/EscritorioSoma/10.jpg")},
          ]
        },

        {
        nome: "Edifício Saint Charbel", 
        tipo: "Residencial",
        statusobra: "Concluída",
        local: "Capim Macio, Natal/RN",
        conclusao: "2017",
        area: "110m²",
        arquiteto: "Tâmara Fontenelle",
        endereco: "@/assets/missao-bg.jpg",
        fotos: [
              { url: require("../assets/fotos/Fawller/01.jpg")},
              { url: require("../assets/fotos/Fawller/02.jpg")},
              { url: require("../assets/fotos/Fawller/03.jpg")},
              { url: require("../assets/fotos/Fawller/04.jpg")},
              { url: require("../assets/fotos/Fawller/05.jpg")},
              { url: require("../assets/fotos/Fawller/06.jpg")},
              { url: require("../assets/fotos/Fawller/07.jpg")},
              { url: require("../assets/fotos/Fawller/08.jpg")},
              { url: require("../assets/fotos/Fawller/09.jpg")},
              { url: require("../assets/fotos/Fawller/10.jpg")},
              { url: require("../assets/fotos/Fawller/11.jpg")},
              { url: require("../assets/fotos/Fawller/12.jpg")},
              { url: require("../assets/fotos/Fawller/13.jpg")},
              { url: require("../assets/fotos/Fawller/14.jpg")},
              { url: require("../assets/fotos/Fawller/15.jpg")},
              { url: require("../assets/fotos/Fawller/16.jpg")},
              { url: require("../assets/fotos/Fawller/17.jpg")},
              { url: require("../assets/fotos/Fawller/18.jpg")},
              { url: require("../assets/fotos/Fawller/19.jpg")},
              { url: require("../assets/fotos/Fawller/20.jpg")},
              { url: require("../assets/fotos/Fawller/21.jpg")},
              { url: require("../assets/fotos/Fawller/22.jpg")},
          ]
        },
        {
        nome: "Edifício Lilac", 
        tipo: "Residencial",
        statusobra: "Concluída",
        local: "Lagoa Nova, Natal/RN",
        conclusao: "2018",
        area: "160m²",
        arquiteto: "Gabriela Christine",
        endereco: "@/assets/missao-bg.jpg",
        fotos: [
            { url: require("../assets/fotos/GabrielaChristine/01.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/02.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/03.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/04.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/05.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/06.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/07.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/08.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/09.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/10.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/11.jpg")},
            { url: require("../assets/fotos/GabrielaChristine/12.jpg")},
        ]
        },
        {
        nome: "Condomínio Pipa Natureza", 
        tipo: "Residencial",
        statusobra: "Concluída",
        local: "Pipa, Tibau do Sul/RN",
        conclusao: "2016",
        area: "280m²",
        arquiteto: "Luciana Fagundes",
        endereco: "@/assets/missao-bg.jpg",
        fotos: [
            { url: require("../assets/fotos/Pipa/01.jpg")},
            { url: require("../assets/fotos/Pipa/02.jpg")},
            { url: require("../assets/fotos/Pipa/03.jpg")},
            { url: require("../assets/fotos/Pipa/04.jpg")},
            { url: require("../assets/fotos/Pipa/05.jpg")},
            { url: require("../assets/fotos/Pipa/06.jpg")},
            { url: require("../assets/fotos/Pipa/07.jpg")},
            { url: require("../assets/fotos/Pipa/08.jpg")},
            { url: require("../assets/fotos/Pipa/09.jpg")},
            { url: require("../assets/fotos/Pipa/10.jpg")},
            { url: require("../assets/fotos/Pipa/11.jpg")},
            { url: require("../assets/fotos/Pipa/12.jpg")},
            { url: require("../assets/fotos/Pipa/13.jpg")},
            { url: require("../assets/fotos/Pipa/14.jpg")},
          ]
        },
        {
        nome: "Edifício Palazzo Conca d’Oro", 
        tipo: "Residencial",
        statusobra: "Concluída",
        local: "Areia Preta, Natal/RN",
        conclusao: "2019",
        area: "67m²",
        arquiteto: "Renato Teles",
        endereco: "@/assets/missao-bg.jpg",
        fotos: [
            { url: require("../assets/fotos/Conca/01.jpg")},
            { url: require("../assets/fotos/Conca/02.jpg")},
            { url: require("../assets/fotos/Conca/03.jpg")},
            { url: require("../assets/fotos/Conca/04.jpg")},
            { url: require("../assets/fotos/Conca/05.jpg")},
            { url: require("../assets/fotos/Conca/06.jpg")},
            { url: require("../assets/fotos/Conca/07.jpg")},
            { url: require("../assets/fotos/Conca/08.jpg")},
            { url: require("../assets/fotos/Conca/09.jpg")},
            { url: require("../assets/fotos/Conca/10.jpg")},
            { url: require("../assets/fotos/Conca/11.jpg")},
            { url: require("../assets/fotos/Conca/12.jpg")},
            { url: require("../assets/fotos/Conca/13.jpg")},
            { url: require("../assets/fotos/Conca/14.jpg")},
            { url: require("../assets/fotos/Conca/15.jpg")},
            { url: require("../assets/fotos/Conca/16.jpg")},
        ]
        },
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

