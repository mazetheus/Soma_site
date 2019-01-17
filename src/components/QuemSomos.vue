<template>
  <div class="quemsomos row" id="quemsomos">
    <div class="row mx-auto w-100">
      <div class="col-md-6 col-12 text-left align-self-center p-4">
        <h3 class="quemsomos-header">Quem Somos</h3>
        <p class="quemsomos-content">Somos uma empresa jovem e altamente profissional. A qualidade das nossas execuções caminha em equilíbrio com a relação pessoal e profissional que construímos com os clientes e toda a equipe envolvida em cada projeto.</p>
      </div>
      <div class="col-md-6 col-12 align-self-center text-white quemsomos-texto">
        <div class="row">
          <div :class="'col-12 col-md-4 align-self-center'" v-for="(cont,index) in contents" :key="index">
            <!--<button class="btn btn-link" type="button" data-toggle="popover" data-placement="top" data-content="Teste"><h3 class="cont-header">{{cont.title}}</h3></button>-->
            <!--<b-btn v-b-popover.hover="'<ul><li>'+cont.text+'</li></ul>'" :title="cont.title" variant="link"><h3 class="cont-header">{{cont.title}}</h3></b-btn>-->
            <b-btn :id="'popover-btn-'+cont.name" variant="link"><h3 class="cont-header">{{cont.title}}</h3></b-btn>
            <b-popover :target="'popover-btn-'+cont.name" :title="cont.title" triggers="hover" placement="top">
              <p v-if="!cont.list">{{cont.text}}</p>
              <ul v-else>
                <li class="cont-list text-left" v-for="(item,i) in cont.list" :key="i">
                  {{item}}
                </li>
              </ul>
            </b-popover>

            <!--<p v-if="!cont.list" class="cont-text">{{cont.text}}</p>
            <ul class="col-6 cont-ul-list" v-else>
              <li class="cont-list text-left" v-for="(item,i) in cont.list" :key="i">
                {{item}}
              </li>
            </ul>
            <ul class="col-6 cont-ul-list">
              <li class="cont-list text-left" v-for="(item,i) in cont.list2" :key="i">
                {{item}} 
              </li>
            </ul>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuemSomos",
  data: ()=> {
    return {
      contents: [
        {title: "Missão", name:"missao", text: "Entregar sonhos e projetos oferecendo um serviço de excelência e qualidade em cada detalhe por meio de um atendimento personalizado, inovador e comprometimento com a cidadania com custo compatível."},
        {title: "Visão", name: "visao", text: "Em cinco anos queremos ser referência em qualidade e eficiência no setor da construção civil, estando sempre comprometida com qualidade e transparência."},
        {title: "Valores", name: "valores", text: "",
          list: [
            "Foco e compromisso com o cliente, respeitando sempre seu investimento;",
            "Inovação contínua, treinamento e capacitação;",
            "Ética e honestidade com clientes, colaboradores e fornecedores;",
            "Segurança e responsabilidade;",
            "Excelência operacional;",
            "Colaboração e respeito, fortalecendo sempre o trabalho em equipe;",
            "Preservação do meio ambiente;",
            "Comprometimento com a cidadania."
          ],
          list1: [
            "Foco e compromisso com o cliente, respeitando sempre seu investimento;",
            "Inovação contínua, treinamento e capacitação;",
            "Ética e honestidade com clientes, colaboradores e fornecedores;",
            "Segurança e responsabilidade;"
          ],
          list2: [
            "Excelência operacional;",
            "Colaboração e respeito, fortalecendo sempre o trabalho em equipe;",
            "Preservação do meio ambiente;",
            "Comprometimento com a cidadania."
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .quemsomos {
    padding: 64px 156px;
  }
  .quemsomos-header::first-letter {
    border-bottom: 3px solid #fb9527;
  }

  .quemsomos-header {
    padding-bottom: 24px;
  }

  .quemsomos-content {
    width: 85%;
    color: #737373;
  }

  .quemsomos-texto {
    /*background: url('../assets/quemsomos-cont.png') right top;*/
    padding: 54px 26px;
  }

  .quemsomos-texto h3 {
    font-size: 1.5em;
  }

  .cont-text, .cont-list {
    font-size: 0.9em;
  }

  .quemsomos-texto ul{
    display: inline-block;
    list-style: circle;
  }

  .content {
    padding: 16px 108px;
  }

  .cont-header {
    /*padding: 16px 0px;*/
    color: #595959;
  }

  .cont-text {
    padding: 16px 0px;
  }

  .bord {
    height: 4px;
    width: 12px;
    background: #fb9527;
  }

  @media (max-width: 768px) {
    .quemsomos {
      padding: 64px 108px;
    }
  }

  @media (max-width: 576px) {
    .quemsomos {
      padding: 0px;
    }

    .quemsomos-content {
      width: 100%;
    }
  }
</style>
