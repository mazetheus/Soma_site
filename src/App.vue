<template>
  <div id="app">
    <navbar/>
    <svg viewBox="0 0 30 0" xmlns="http://www.w3.org/2000/svg">
      
    </svg>
    <div class="container-fluid">
      <quem-somos/>
      <obras/>
      <servicos/>
      <contato/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import QuemSomos from './components/QuemSomos.vue'
import Obras from './components/Obras.vue'
import Servicos from './components/Servicos.vue'
import Contato from './components/Contato.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    QuemSomos,
    Obras,
    Servicos,
    Contato,
    Footer
  },
  data() {
    return {
      padding: 0
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');

#app {
  font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*.content-margin {
  padding: 0px 96px;
}*/

.content-margin {
  padding: var(--padding);
}

.orange-col {
  color: #fb9527;
}

.orange-bg {
  background: #fb9527;
}

.gray-bg {
  background: #ebebeb;
}
.p-top {
  padding: 24px 0px;
}

@media (max-width: 768px) {
    .content {
      padding: 24px 108px !important;
    }
  }
</style>
