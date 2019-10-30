<template>
	 <main >
		 
			<div class="foto-titulo">
<!-- 				<div class="foto"> </div>
 -->				<div class="titulo">
					<p class="meu-nome">Oi! meu nome é David.</p>
					<p class="texto-digitado"></P>
					<!-- <vue-typed-js> 
						:string="["Desenvolvedor Front-End.", "Apaixonado por Tecnologia.", "Nascido em Belém, Pará"]" 
						:loop="true"
						:startDelay="3000"
						:backDelay=" 500"
						:backSpeed="20"
						:loopCount="5"
					</vue-typed-js> -->
				</div>
			</div>
		 <!-- https://bootstrapmade.com/demo/DevFolio/ -->
		<b-container fluid  id="quem-sou">
			<b-container >
				<div class="historia">
					<div class="foto-historia" alt=""></div>
					<p class="texto-historia">Nascido em Belém do Pará, tenho 34 anos, formado em Ciência da Computação, sou casado com a Caroline e pai da Maya <img class="pata-dog" src="../static/assets/img/animal-paw-print.png" >. Atuo a bastante tempo em TI, mas foi recente que me senti atraído por Front-end e estudo muito as tecnologias relacionadas. Estou basante animado em trilhar este caminho.</p>
					




				</div>
			</b-container>	
		</b-container>
		<b-container fluid id="conhecimento">
			<b-container >
				<b-row>
					<b-col lg="12" class="form">
						<b-col lg="6" class="coluna1">
							<div class="foto-desc">
								<div class="foto"></div>
								<div class="desc">
									<p><span>Nacionalidade:</span> Brasil</p>
									<p><span>E-mail:</span> davidrs.souza@gmail.com</p>
									<p><span>Celular:</span> (11) 994886041</p>
									<p><span>Linkedin:</span> www.linkedin.com/in/dav1dsouza</p>
									<p><span>Skype:</span> daviiid.souza</p>
								</div>
							</div>
							
						</b-col>
						<b-col lg="6" class="coluna2">
							<div class="habilidades">
								<h5>Habilidades</h5>
								<p>Proficiência no trabalho de equipe </p>
								<div class="bar"></div>
								<p>HTML5 </p>
								<div class="bar"></div>
								<p>CSS3 </p>
								<div class="bar"></div>
								<p>Bootstrap 4 </p>
								<div class="bar"></div>
								<p>Pré-processador CSS (SASS) </p>
								<div class="bar"></div>  
								<p>Javascript </p>
								<div class="bar"></div>
								<p>AJAX API REST </p>
								<div class="bar"></div>
								<p>Wordpress </p>
								<div class="bar"></div>
								<p>Task Runner GruntJs </p>
								<div class="bar"></div>
								<p>Controladores de Versão GIT </p>
								<div class="bar"></div>
								<p>Framework Vue.js </p>
								<div class="bar"></div>
							</div>
							<!-- <h2 class="sobre">Quem Sou</h2>
							<p class="texto">Nascido em Belém do Pará, casado com a Caroline e </p> -->
						</b-col>
					</b-col>
					
				
				
				
				
			
			</b-row>
			</b-container>
		</b-container>
		<b-container fluid id="experiencia">
			<b-container >
				Experiências
			</b-container>
		</b-container>
		<b-container fluid  id="cases" >
			<b-container >
				Cases
			</b-container>
		</b-container>
		<b-container fluid id="contato">
			<b-container >
				Cases
			</b-container>
		</b-container>
	</main>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'
import Typed from 'typed.js';
import { VueTypedJs } from 'vue-typed-js'


Vue.use(VueTypedJs)

export default {
	layout: 'default',
	components: {
		
	},
	data() {
		return {
		
		}
	},

	methods:{
		EfeitoDigitacao(){
		 	var type = new Typed(".texto-digitado",{
				strings: ["Desenvolvedor Front-End.", "Apaixonado por Tecnologia.", "Nascido em Belém, Pará"],
				typeSpeed: 60,
				startDelay: 600,
				backSpeed: 30,
				backDelay: 1100,
				loop: true,
				loopCount: 999
			});
		}
	},
	
	mounted() {

		
		
		
		this.EfeitoDigitacao();
		
	}, 
	
}
</script>

<style lang="scss" scoped>



main{
	margin-top: 480px;
	 .foto-titulo{
		filter: drop-shadow(2px 4px 6px black);
		/* position: absolute;
		top: 253px;
		left: 35%; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom:200px;
		.foto{
			filter: drop-shadow(2px 4px 6px black);
			background-position: -20%;
			background-repeat: no-repeat;
			width: 205px;
			height: 204px;
			z-index:-2;
			
			background-image:  url("../static/assets/img/foto.jpg");
			background-size: 100%;
			border-radius: 121px;
			border: 4px solid #42311b;
		
		}
		.titulo{
			height: 205px;
			text-align: center;
			color: white;
			font-size: 60px;
			.texto-digitado{
				font-size:35px;
				opacity:0.9;
				display: inline-block;
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

	#quem-sou{
		height: 600px;
		background-color: black;
		.container{
			background-color: transparent;
			color: rgb(201, 198, 198);
			font-size: 25px;
			
		}
		.historia{
			margin:10px;
			.foto-historia{
				filter: grayscale(1);
				margin-top: 50px;
				background-image: url("../static/assets/img/foto.jpg");
				background-size: 100%;
				background-position: 30% 40%;
				transform: rotate(10deg) scale(1.5); 
				background-repeat: no-repeat;
				border-radius: 50%;
				height: 200px;
				width: 200px;
				margin-left: auto;
   				margin-right: auto;
			}
			.texto-historia{
				margin-top: 80px;
				font-weight: 100;
				text-align: justify;
			}
			.pata-dog{
				filter: invert(1);
				opacity: .5;
				background-size: 10%;
				background-repeat: no-repeat;
				
				height: 13px;
				width: 13px;
				margin-bottom: 3px;
			}
		}
	}

	#conhecimento{
		height: 800px;
		.container{
			border: 1px solid transparent;
			height:600px;
			box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
			.form{
				display: flex;
				padding-top: 60px;
			}
			.coluna1{
				padding-top: 20px;
				/* 	width:40%; */
				padding: 0;
    			.foto-desc{
					margin-top: 20px;
					display:flex;
					justify-content: space-evenly;
					margin-bottom: 30px;
					.foto{
						border-radius: 6px;
						background-size: 100%;
						width: 150px;
						height: 175px;
						background-size: 110%;
						background-image: url(../static/assets/img/fotoIndice.png);
						background-repeat: no-repeat;
					}
					.desc{
						font-size:15px;
						line-height: 1.5;
						span{
							font-weight: 500;
						}
					}
				}
				

				
				
			}
			.coluna2{
				/* width:60%; */
				.habilidades{
					padding-left: 30px;
					h5{
						margin-bottom: 1.2rem;
					}
					p{
						margin-bottom: 0.5rem!important;
						line-height: .8;
					}
					.bar{
						height: 4px;
						width: 100%;
						background-color: #2c2b2b2d;
						margin-bottom: 1rem!important;
					}
				}
			}
		}	
	}
}


</style>
