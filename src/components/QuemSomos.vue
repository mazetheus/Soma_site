<template>
  <div class="quemsomos row" id="quemsomos">
    <div class="row mx-auto w-100">
      <div class="col-md-6 col-12 align-self-center text-white quemsomos-texto">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src="@/assets/missao-bg.jpg">
            <div class="carousel-caption">
                <h1>MISSÃO</h1>
                <p>Entregar sonhos e projetos oferecendo um serviço de excelência e qualidade em cada detalhe por meio de um atendimento personalizado, inovador e comprometimento com a cidadania com custo compatível.</p>
                <br><br>
            </div>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/visao-bg.jpg">
            <div class="carousel-caption">
                <h1>VISÃO</h1>
                <p>Em cinco anos queremos ser referência em qualidade e eficiência no setor da construção civil, estando sempre comprometida com qualidade e transparência.</p>
                <br><br><br>
            </div>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/valores-bg.jpg">
            <div class="carousel-caption">
                <h1>VALORES</h1>
                <p>Foco e compromisso com o cliente, respeitando sempre seu investimento;
                    <br>Inovação contínua, treinamento e capacitação;
                    <br>Ética e honestidade com clientes, colaboradores e fornecedores;
                    <br>Segurança e responsabilidade;
                    <br>Excelência operacional;
                    <br>Colaboração e respeito, fortalecendo sempre o trabalho em equipe;
                    <br>Preservação do meio ambiente;
                    <br>Comprometimento com a cidadania.</p>
            </div>
        </div>
      </div>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>
    </div>
    <div class="col-md-6 col-12 text-left align-self-center p-4">
      <h3 class="quemsomos-header">Quem Somos</h3>
      <p class="quemsomos-content">Somos uma empresa jovem e altamente profissional. A qualidade das nossas execuções caminha em equilíbrio com a relação pessoal e profissional que construímos com os clientes e toda a equipe envolvida em cada projeto.</p>
    </div>
  </div>
  </div>

</template>

<script>
</script>

<style scoped>
    
  .quemsomos {
    padding: 0px 156px;
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

  .carousel p {
    color: #595959;
    font-size: 14px;
  }

  .carousel h1 {
    color: #fb9527;
  }

  .carousel-indicators {
     background-color: #fb9527;
     border-color: #000000;
  }

  .carousel-indicators .active {
    background-color: #ffffff !important;
  }

  .carousel-control-prev span {
    background-color: #fb9527;
  }

  .carousel-control-next span {
    background-color: #fb9527;
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

    .carousel h1 {
      font-size: 25px;
      visibility: visible;
    }
    .carousel p {
      font-size: 14px;
      visibility: visible;
    }
  }
</style>
