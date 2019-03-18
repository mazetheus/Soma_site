<template>
  <div class="quemsomos row" id="quemsomos">
    <div class="row mx-auto w-100">
      <div class="col-md-6 col-12 text-left p-4 titulo-quemsomos">
        <h3 class="quemsomos-header">Quem Somos</h3>
        <p class="quemsomos-content">Somos uma empresa jovem e altamente profissional.<br>A qualidade das nossas execuções caminha em equilíbrio com a relação pessoal e profissional que construímos com os clientes e toda a equipe envolvida em cada projeto.</p>
      </div>
      <div class="col-md-6 col-12 text-white quemsomos-texto">
        <div class="tab-cultura">
          <b-card no-body>
            <b-tabs card>
              <b-tab title="MISSÃO" active>
                <img src="../assets/missao.png" class="img-cultura" />
                <p class="text-left">Entregar sonhos e projetos oferecendo um serviço de excelência e qualidade em cada detalhe por meio de um atendimento personalizado, inovador e comprometimento com a cidadania com custo compatível.</p>
              </b-tab>
              <b-tab title="VISÃO">
                <img src="../assets/visao.png" class="img-cultura" />
                <p class="text-left">Em cinco anos queremos ser referência em qualidade e eficiência no setor da construção civil, estando sempre comprometida com qualidade e transparência.</p>
              </b-tab>
              <b-tab title="VALORES">
                <img src="../assets/valores.png" class="img-cultura" />
                <p class="text-left valores">Foco e compromisso com o cliente, respeitando sempre seu investimento;</p>
                <p class="text-left valores">Inovação contínua, treinamento e capacitação;</p>
                <p class="text-left valores">Ética e honestidade com clientes, colaboradores e fornecedores;</p>
                <p class="text-left valores">Segurança e responsabilidade;</p>
                <p class="text-left valores">Excelência operacional;</p>
                <p class="text-left valores">Colaboração e respeito, fortalecendo sempre o trabalho em equipe;</p>
                <p class="text-left valores">Preservação do meio ambiente;</p>
                <p class="text-left valores">Comprometimento com a cidadania.</p>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
    </div>
  </div>
  </div>

</template>

<script>
</script>

<style scoped>
    
  .quemsomos {
    padding: 0px 156px;
    min-height: 500px;
  }

  .img-cultura{
    padding-bottom: 20px;
  }

  .quemsomos-header {
    padding-bottom: 24px;
    padding-top: 60px;
  }

  .quemsomos-content {
    width: 85%;
    color: #737373;
  }

  .quemsomos-texto {
    padding: 54px 26px;
  }

  .valores::first-letter{
    color: #fb9527;
  }

  .quemsomos-texto h3 {
    font-size: 1.5em;
  }

  .tab-cultura p {
    color: #595959;
    font-size: 14px;
    margin: 2px;
  }
  

  @media (max-width: 768px) {
    .quemsomos {
      padding: 64px 0px;
    }
  }

  @media (max-width: 576px) {
    .quemsomos {
      padding: 0px;
    }

    .quemsomos-content {
      width: 100%;
    }

    .tab-cultura p {
      font-size: 14px;
      visibility: visible;
    }
  }
</style>
