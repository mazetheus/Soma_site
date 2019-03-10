<template>
	<b-row class="obra">
		<b-col class="col-md-6 col-12 d-flex align-self-center">
			<div class="">
				<h4 class="obras-header">Portfólio <strong>SOMA</strong></h4>
				<h5 class="obra-header-destaque text-uppercase">{{nome}}</h5>
				<h6 class="obra-header">{{tipo}}</h6>

				<h6 class="obra-status"><strong>Status: </strong>{{statusobra}}</h6>

				<h6><strong>Local: </strong>{{local}}</h6>
				<h6><strong>Conclusão: </strong>{{conclusao}}</h6>
				<h6><strong>Área construída: </strong>{{area}}</h6>
				<h6><strong>Arquitetura: </strong>{{arquiteto}}</h6>
				<b-button class="obra-btn obra-btn-voltar text-uppercase" @click="obraAnt" size="md">Obra Anterior</b-button>
				<b-button class="obra-btn obra-btn-avanc text-uppercase" @click="proxObra" size="md">Próxima Obra</b-button>
			</div>
		</b-col>
		<b-col class="align-self-center">
			<b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="4000"
                  img-width="500"
                  img-height="500"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <b-carousel-slide v-for="foto in fotos" v-bind:img-src="foto.url"></b-carousel-slide>

      </b-carousel>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">

	export default {
		props: {
			nome: String,
			tipo: String,
			statusobra: String,
			local: String,
			conclusao: String,
			area: String,
			arquiteto: String,
			fotos: Array
		},

		methods: {
			proxObra() {
				this.$emit('proxObra')
			},
			obraAnt() {
				this.$emit('obraAnt')
			},
		}
	}

</script>

<style type="text/css" scoped>
	.obra {
		color: #575757;
	}

	.obras-header::first-letter {
		border-bottom: 3px solid #fb9527;
	}

	.obras-header {
		color: #575757;
		padding-bottom: 64px;
	}

	.obra-header-destaque {
		color: #fb9527;
	}

	.obra-header {
		padding-bottom: 32px;
	}

	.obra-status {
		padding-bottom: 32px;
	}

	.obra-btn {
		margin-top: 96px;
		margin-right: 20px;
		margin-bottom: 20px;
		background: transparent;
		border-radius: 32px;
		border-color: #fb9527;
		color: #575757;
	}

    .obra-btn:active {
		background: #fb9527 !important;
    }

	.carousel-inner > .item > img {
        margin: 0 auto;
    }

    .tst {
		/*padding: 0px 8px;*/
    }
</style>