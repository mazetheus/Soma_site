<template>
  <div class="contato text-left gray-bg row" id="contato">
    <div class="row mx-auto w-100 p-0">
      <!--<div class="col-12">
        <h3 class="contato-header">Fale conosco!</h3>
      </div>
      <div class="info col-12 col-md-6">
      </div>-->
      <div class="info col-12 col-md-6 d-flex align-self-center">
        <div class="mx-auto">
          <h6>contato@somaengenhariarn.com.br</h6>
          <h6><strong>(84) 3345-4977 | (84) 98816-6828</strong></h6>
          <div class="row">
            <div class="col-10 col-md-11">
              <h6 class="rua">Rua Promotor Manoel Alves Pessoa Neto, 45, Sala 1611</h6>
              <h6>Office Tower - Candelária, Natal/RN, 59065-550</h6>
            </div>
            <div class="col-2 col-md-1">
              <font-awesome-icon class="map-icon" icon="map-marker-alt"></font-awesome-icon>
            </div>
          </div>

        </div>
      </div>
      <div class="col-12 col-md-6 p-0">
        <iframe class="w-100 mx-auto" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2777.3547871487!2d-35.225196018732056!3d-5.8342267530062175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4992c891b3489ed6!2sSoma+Engenharia+Ltda!5e0!3m2!1spt-BR!2sbr!4v1540993202074" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>
    <!--<div class="row w-100">-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: "Contato"
}
</script>

<style scoped>
  .contato {
    background: #f7f7f7;
  }
  .contato-header::first-letter {
    border-bottom: 3px solid #fff;
  }

  .contato-header {
    padding: 54px 0px;
  }

  .rua {
    font-size: 15px;
  }

  .info {
    /*padding-bottom: 32px;*/
    color: #4d4d4d;
  }

  .map-icon {
    color: #fb9527;
    font-size: 28px;
  }

  .content {
    /*padding: 54px 108px;*/
    padding: 0px 108px;
  }
</style>
