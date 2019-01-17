<template>
	<b-row class="obra">
		<b-col class="col-md-6 col-12 d-flex align-self-center">
			<div class="">
				<h4 class="obras-header">Portfólio <strong>SOMA</strong></h4>
				<h5 class="obra-header-destaque text-uppercase">Residencial</h5>
				<h6 class="obra-header">{{nome}}</h6>

				<h6 class="obra-status"><strong>Status: </strong>Concluída</h6>

				<h6><strong>Local: </strong>Petrópolis, Natal/RN</h6>
				<h6><strong>Conclusão: </strong>2016</h6>
				<h6><strong>Área construída: </strong>220m2</h6>
				<h6><strong>Arquitetura: </strong>Carol Azevedo / Gabriele Christine</h6>
				<b-button class="obra-btn obra-btn-voltar text-uppercase" @click="obraAnt" size="sm">Obra Anterior</b-button>
				<b-button class="obra-btn obra-btn-avanc text-uppercase" @click="proxObra" size="sm">Próxima Obra</b-button>
			</div>
		</b-col>
		<b-col>
			<b-carousel id="carousel1"
									class="p-0"
									controls
									indicators
									background="#ababab">
				<b-carousel-slide img-blank>
					<h1>BLANK</h1>
				</b-carousel-slide>
				<b-carousel-slide img-blank>
					<h1>BLANK 2</h1>
				</b-carousel-slide>

			</b-carousel>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {
		props: {
			nome: String
		},
		methods: {
			proxObra() {
				//this.$parent.proxObra();
				//alert('teste')
				this.$emit('proxObra')
			},
			obraAnt() {
				this.$emit('obraAnt')
			}
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
		background: transparent;
		border-radius: 32px;
		border-color: #fb9527;
		color: #575757;
	}

  .obra-btn:active {
		background: #fb9527 !important;
  }

  .tst {
		/*padding: 0px 8px;*/
  }
</style>