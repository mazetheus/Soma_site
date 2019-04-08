<template>
  <div id="app">
    <navbar/>
    <div class="container-fluid">
      <quem-somos/>
      <obras/>
      <servicos/>
      <contato/>
    </div>
    <Footer/>
    <a href="https://api.whatsapp.com/send?phone=5584994063182" @click="clickWpp()" class="float-wpp mobile" target="_blank">
        <font-awesome-icon class="my-float-wp" :icon="['fab', 'whatsapp']" size="lg"></font-awesome-icon>
    </a>
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
.float-wpp{
  position:fixed;
  width:40px;
  height:40px;
  bottom: 100px;
  right:10px;
  background-color:#25d366;
  color:#fff;
  border-radius:50px; 
  font-size: 24px;
  text-align:center;
  box-shadow: 18px 31px 61px 0px rgba(0,0,0,0.43);
  z-index:100000;
}

.mobile{
  display: none;
}

.float-wpp:hover {
  color: #fff;
  opacity: 1;
  box-shadow: 2px 2px 3px #666;
}

.float-wpp:hover {
  background-color: #1ea851;
}

.my-float-wp{
  margin-top:4px;
  margin-left: 1px;
}

@media (max-width: 768px) {
    .content {
      padding: 24px 108px !important;
    }

    .mobile{
      display:block;
  }
  }
</style>
