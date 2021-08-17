<template>
  <main>
		<b-container id="ds-home"></b-container>
		<div class="ds-foto-perfil" >
			<div class="ds-foto-perfil__conteudo">
				<p class="ds-foto-perfil__conteudo--meu-nome">Oi! meu nome é David.</p>
				<!-- <p class="texto-digitado"></P> -->
				<vue-typed-js :strings="['Desenvolvedor Full Stack', 'Apaixonado por Tecnologia', 'Nascido em Belém do Pará']" 
					:loop="true"
					:typeSpeed="50"
					:startDelay="600"
					:backDelay=" 1100"
					:backSpeed="30"
					:loopCount="999" > 
					<p class="texto-digitado typing"></P>
				</vue-typed-js>
			</div>
		</div>
		
		<b-container fluid  id="ds-quem-sou">
			<WhoIam />
		</b-container>

		<b-container  fluid id="ds-conhecimento">
			<Knowledge/>
		</b-container>
		
		<b-container fluid id="ds-contato">
			<Contact  />
		</b-container>

                            
	</main>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'

import { mapGetters } from 'vuex'
import VueTypedJs from 'vue-typed-js'
import { Fragment } from 'vue-fragment'

import Knowledge from '../sections/Knowledge';
import WhoIam from '../sections/WhoIam'
import Contact from '../sections/Contact'


Vue.use(VueTypedJs)

export default {
    name: 'Main',
    components: {
		Knowledge,
	 	WhoIam,
		Contact,
		Fragment,
	},
    
	
}
</script>

<style lang="scss" scoped>
$cor-padrao: black;
main{
	position: relative;
	margin-top: 480px;
	@media only screen and (max-width: 768px){
		margin-top: 88px;
	}

	 .ds-foto-perfil{
		filter: drop-shadow(2px 4px 6px $cor-padrao);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom:200px;
		@media only screen and (max-width: 768px){
			margin-top: 290px;
			margin-bottom: 270px;


		}
		
		&__conteudo{
			height: 205px;
			text-align: center;
			color: white;
			font-size: 60px;
            margin-top: -8rem;
			@media only screen and (max-width: 768px){
                margin-top: unset;  
				font-size: 32px;
			}
			@media only screen and (max-width: 320px){
				&--meu-nome{
					font-size: 25px;
				}
				
				
			}
			.typed-element {
				display: flex;
				align-items: center;
				justify-content: center;
				
			}
			.texto-digitado{
				font-size:35px;
				display: inline-block;
				margin-bottom: 0rem;
				@media only screen and (max-width: 768px){
					font-size: 24px;
				}
				@media only screen and (max-width: 320px){
					font-size: 20px
				}
			}
		}
	}
	.container-fluid{
		height:250px;
		display: flex;
		align-items: center;
		.container{
			background-color: white;
			
			height: 80%;
		}
		
	}
    .container-fluid:nth-child(even){
		background-color: whitesmoke;
	}

	.container-fluid:nth-child(odd){
		background-color: white;
	}
	#ds-home{
		position: absolute;
		top: -287px;
		right: 204px;
		background: transparent;
		height: 5px;
		width: 10px;
	}
	#ds-quem-sou{
		height: 600px;
		background-color: #2d2d2d;
		@media only screen and (max-width: 415px){
			height: 760px;
		}

		
	}

	#ds-conhecimento{
		height: 800px;
	}

	#ds-contato{
		position: relative;
		height: 460px;
		background-color: #424242;
		display: flex;
		flex-direction: column;
		padding-top: 60px;
		
		
	}
}
</style>