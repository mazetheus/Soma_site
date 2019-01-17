<template>
  <div class="servicos row" id="servicos">
    <div class="row mx-auto w-100 p-4">
      <div class="col-12 text-left align-self-center">
        <h3 class="servicos-header text-center">Serviços SOMA</h3>
        <div class="row">
          <!--<div class="col-12" v-for="(serv,index) in servicos" :key="index">
            <h5 class="servico text-uppercase">{{serv}}</h5>
          </div>-->
          <ul class="serv-ul mx-auto">
            <li v-for="(serv,index) in servicos" class="serv-li" :key="index">
              <h5 class="servico"><font-awesome-icon class="circle-icon" icon="circle"></font-awesome-icon> {{serv}}</h5>
            </li>
          </ul>
        </div>
      </div>
      <!--<div class="col-md-6 col-12 align-self-center">
        <img src="../assets/servicos.jpg" class="img img-fluid"/>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Servicos",
  data: ()=>{
    return {
      servicos: [
        "Gerenciamento de obras e projetos",
        "Construções e Reformas",
        "Orçamentos",
        "Avaliação de Imóveis"
      ]
    }
  }
}
</script>

<style scoped>
.servicos {
  padding: 32px 0px;
}

.servicos-header::first-letter {
  border-bottom: 3px solid #fb9527;
}

.servicos-header {
  padding-bottom: 24px;
}

.servico {
  padding: 24px 0px 0px 0px;
  /*font-size: 19px !important;*/
  font-size: 1.5vw;
}

.circle-icon {
  font-size: 10px !important;
}

.content {
  padding: 24px 108px;
}

.serv-ul {
  list-style: square;
}

.serv-li {
  display: inline-block;
  padding-right: 50px;
}

/*.serv-li h5 {
  font-size: 1.15em;
}*/

@media (max-width: 768px) {
  .servico {
    font-size: 5vw;
  }
}

</style>
