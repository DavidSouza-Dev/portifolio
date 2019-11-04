<template>
	 <main >
		 
			<div class="foto-titulo">
<!-- 				<div class="foto"> </div>
 -->				<div class="titulo">
					<p class="meu-nome"><strong>Oi! meu nome é David.</strong></p>
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
					<p class="texto-historia">Nascido em Belém do Pará, tenho 34 anos, formado em Ciência da Computação, sou casado com a Caroline e pai da Maya <img class="pata-dog" src="../static/assets/img/animal-paw-print.png" >. Atuo a bastante tempo em TI, mas foi recente que me senti atraído por Front-end e estudo muito as tecnologias relacionadas. Estou bastante animado em trilhar este caminho.</p>
					




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
		<b-container fluid id="tecnologias">
			<b-container >
				<h1><span>Tecnologias</span></h1>
				<b-row>
					 <div class="linha1">
						 <b-col lg="2">
						<div class="html" href="#">HTML5
							<a class="img-html"/>
						</div>
					</b-col>
					<b-col lg="2">
						<div class="css3" href="#">CSS3
							<a class="img-css3"/>
						</div>
					</b-col>
					<b-col lg="2">
						<div class="bs4" href="#">BOOTSTRAP 4
							<a class="img-bs4"/>
						</div>
					</b-col>
					<b-col lg="2">
						<div class="sass" href="#">SASS
							<a class="img-sass"/>
						</div>
					</b-col>
					<b-col lg="2">
						<div class="javascript" href="#">JAVASCRIPT
							<a class="img-javascript"/>
						</div>
					</b-col>
					 </div>
					
					
				</b-row>
				<b-row>
					<div class="linha2">
						<b-col lg="2">
							<div class="wordpress" href="#">
								<span>WORDPRESS</span>
								<a class="img-wordpress"/>
							</div>
							</b-col>
							<b-col lg="2">
								<div class="grunt" href="#">GRUNT
									<a class="img-grunt"/>
								</div>
							</b-col>
							<b-col lg="2">
								<div class="git" href="#">GIT
									<a class="img-git"/>
								</div>
							</b-col>
							<b-col lg="2">
								<div class="vue" href="#">VUE
									<a class="img-vue"/>
								</div>
							</b-col>
							<b-col lg="2">
								<div class="nuxt" href="#">NUXT
									<a class="img-nuxt"/>
							</div>
						</b-col>
					</div>
				</b-row>
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
				strings: ["Desenvolvedor Front-End.", "Apaixonado por Tecnologia.", "Nascido em Belém do Pará"],
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
			filter: drop-shadow(0px 2px 2px black);
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

	#tecnologias{
		height: 600px;
		background:white;
		h1{
			color: black;
			font-weight: 500;
			background-image: linear-gradient(90deg, transparent 6%, darkgray),  url(../static/assets/img/h-background.png);
			text-align: left;
			margin-bottom:50px;
		}
		.container{
			background:transparent;
			/* .linha1{
				font-size: 21px;
				height: 187.81px;
				font-weight: 500;
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				text-decoration: none;
				overflow: hidden;
			} */
			.shadow{
				box-shadow: 0px 2px 1px -1px
			}
			.linha1{
				font-size: 21px;
				height: 190px;
				width: 100%;
				font-weight: 500;
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				overflow: hidden;
				
				div{
					height: 84.1%;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				
				
				.html{
					position: relative;
					width: 90%;
					height: 90% !important;
					display: flex;
					justify-content: center;
					transition: background-color .7s, color .2s ease-in-out;
					border-bottom: 1.5px solid rgba(70, 68, 68, 0.34118);
					filter: drop-shadow(0px 2px 1px black);
					overflow: hidden;
					color: #ec5900;
					
					&::before {
						content: "";
						position: absolute;
						z-index: 1;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						

						
					}
					&::after {
						content: "";
						position: absolute;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						z-index: 2;
						width:100%;
						height:100%;
						transition: transform .5s ease-in!important;
						transform: translateY(-100%);
						background-size: 80%;
						    background-repeat: no-repeat;
						background-position: 50% 65%;
						background-image: url(../static/assets/img/html.png);
						
					}
					&:hover{
						background-color: #534f4f;
						text-decoration: none;
						transition-delay: .9s color ease-in;
						color:transparent;
						margin-right: -15px;
						margin-left: -15px;
						&::after{
							transform: translateY(0%);
						}
						
					
					}
					
				}
				.css3{
					position: relative;
					width: 90%;
					height: 90% !important;
					display: flex;
					justify-content: center;
					transition: background-color .7s, color .2s ease-in-out;
					border-bottom: 1.5px solid rgba(70, 68, 68, 0.34118);
					filter: drop-shadow(0px 2px 1px black);
					overflow: hidden;
					color: #0277bd;
					&::before {
						content: "";
						position: absolute;
						z-index: 1;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						
					}
					&::after {
						content: "";
						position: absolute;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						z-index: 2;
						width:100%;
						height:100%;
						transition: transform .5s ease-in!important;
						transform: translateY(-100%);
						background-size: 73%;
						background-repeat: no-repeat;
						background-position: 48% 64%;
						background-image: url(../static/assets/img/css.png);
						
					}
					&:hover{
						background-color: #534f4f;
						text-decoration: none;
						transition-delay: .9s color ease-in;
						color:transparent;
						margin-right: -15px;
						margin-left: -15px;
						&::after{
							transform: translateY(0%);
						}
						
					
					}
					
				}
				.bs4{
					position: relative;
					width: 90%;
					height: 90% !important;
					display: flex;
					justify-content: center;
					transition: background-color .7s, color .2s ease-in-out;
					border-bottom: 1.5px solid rgba(70, 68, 68, 0.34118);
					filter: drop-shadow(0px 2px 1px black);
					overflow: hidden;
					color: #6632b2;
					&::before {
						content: "";
						position: absolute;
						z-index: 1;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						
					}
					&::after {
						content: "";
						position: absolute;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						z-index: 2;
						width:100%;
						height:100%;
						transition: transform .5s ease-in!important;
						transform: translateY(-100%);
						background-size: 80%;
						background-repeat: no-repeat;
						background-position: 50%;
						background-image: url(../static/assets/img/bs.png);
						
					}
					&:hover{
						background-color: #534f4f;
						text-decoration: none;
						transition-delay: 1.2s color ease-out;
						color:transparent;
						margin-right: -15px;
						margin-left: -15px;
						&::after{
							transform: translateY(0%);
						}
						
					
					}
				}
				.sass{
					position: relative;
					width: 90%;
					height: 90% !important;
					display: flex;
					justify-content: center;
					transition: background-color .7s, color .2s ease-in-out;
					border-bottom: 1.5px solid rgba(70, 68, 68, 0.34118);
					filter: drop-shadow(0px 2px 1px black);
					overflow: hidden;
					color: #cc6699;
					&::before {
						content: "";
						position: absolute;
						z-index: 1;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						
					}
					&::after {
						content: "";
						position: absolute;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						z-index: 2;
						width:100%;
						height:100%;
						transition: transform .5s ease-in!important;
						transform: translateY(-100%);
						background-size: 80%;
						background-repeat: no-repeat;
						background-position: 60%;
						background-image: url(../static/assets/img/sass.png);
						
					}
					&:hover{
						background-color: #534f4f;
						text-decoration: none;
						transition-delay: .9s color ease-in;
						color:transparent;
						margin-right: -15px;
						margin-left: -15px;
						&::after{
							transform: translateY(0%);
						}
						
					
					}
				}
				.javascript{
					position: relative;
					width: 90%;
					height: 90% !important;
					display: flex;
					justify-content: center;
					transition: background-color .7s, color .2s ease-in-out;
					border-bottom: 1.5px solid rgba(70, 68, 68, 0.34118);
					filter: drop-shadow(0px 2px 1px black);
					overflow: hidden;
					color: #d6ba32;
					&::before {
						content: "";
						position: absolute;
						z-index: 1;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						
					}
					&::after {
						content: "";
						position: absolute;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						z-index: 2;
						width:100%;
						height:100%;
						transition: transform .5s ease-in!important;
						transform: translateY(-100%);
						background-size: 67%;
						background-repeat: no-repeat;
						background-position: 50% 62%;
						background-image: url(../static/assets/img/js.png);
						
					}
					&:hover{
						background-color: #534f4f;
						text-decoration: none;
						transition-delay: .9s color ease-in;
						color:transparent;
						margin-right: -15px;
						margin-left: -15px;
						&::after{
							transform: translateY(0%);
						}
						
					
					}
				}
			}
			.linha2{
				font-size: 21px;
				height: 190px;
				width: 100%;
				font-weight: 500;
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				overflow: hidden;
				div{
					height: 84.1%;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.wordpress{
					position: relative;
					width: 90%;
					height: 90% !important;
					display: flex;
					justify-content: center;
					transition: background-color .7s, color .2s ease-in-out;
					border-bottom: 1.5px solid rgba(70, 68, 68, 0.34118);
					filter: drop-shadow(0px 2px 1px black);
					overflow: hidden;
					color: black;
					&::before {
						content: "";
						position: absolute;
						z-index: 1;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						
					}
					&::after {
						content: "";
						position: absolute;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						z-index: 2;
						width:100%;
						height:100%;
						transition: transform .5s ease-in!important;
						transform: translateY(-100%);
						background-size: 80%;
						background-repeat: no-repeat;
						background-position: 50%;
						background-image: url(../static/assets/img/wp.png);
						
					}
					&:hover{
						background-color: #534f4f;
						text-decoration: none;
						transition-delay: 1.2s  color ease-in;
						color:transparent;
						margin-right: -15px;
						margin-left: -15px;
						&::after{
							transform: translateY(0%);
						}
						
					
					}
				}
				.grunt{
					position: relative;
					width: 90%;
					height: 90% !important;
					display: flex;
					justify-content: center;
					transition: background-color .7s, color .2s ease-in-out;
					border-bottom: 1.5px solid rgba(70, 68, 68, 0.34118);
					filter: drop-shadow(0px 2px 1px black);
					overflow: hidden;
					color: #fba91b;
					&::before {
						content: "";
						position: absolute;
						z-index: 1;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						
					}
					&::after {
						content: "";
						position: absolute;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						z-index: 2;
						width:100%;
						height:100%;
						transition: transform .5s ease-in!important;
						transform: translateY(-100%);
						background-size: 80%;
						background-repeat: no-repeat;
						background-position: 50%;
						background-image: url(../static/assets/img/grunt.png);
						
					}
					&:hover{
						background-color: #534f4f;
						text-decoration: none;
						transition-delay: .9s color ease-in;
						transition-delay: 1.2s color ease-out;
						color:transparent;
						margin-right: -15px;
						margin-left: -15px;
						&::after{
							transform: translateY(0%);
						}
						
					
					}
				}
				.git{
					position: relative;
					width: 90%;
					height: 90% !important;
					display: flex;
					justify-content: center;
					transition: background-color .7s, color .2s ease-in-out;
					border-bottom: 1.5px solid rgba(70, 68, 68, 0.34118);
					filter: drop-shadow(0px 2px 1px black);
					overflow: hidden;
					color: #de4c36;
					&::before {
						content: "";
						position: absolute;
						z-index: 1;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						
					}
					&::after {
						content: "";
						position: absolute;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						z-index: 2;
						width:100%;
						height:100%;
						transition: transform .5s ease-in!important;
						transform: translateY(-100%);
						background-size: 80%;
						background-repeat: no-repeat;
						background-position: 50%;
						background-image: url(../static/assets/img/git.png);
						
					}
					&:hover{
						background-color: #534f4f;
						text-decoration: none;
						transition-delay: .9s color ease-in;
						transition-delay: 2s color ease-out;
						color:transparent;
						margin-right: -15px;
						margin-left: -15px;
						&::after{
							transform: translateY(0%);
						}
						
					
					}
				}
				.vue{
					position: relative;
					width: 90%;
					height: 90% !important;
					display: flex;
					justify-content: center;
					transition: background-color .7s, color .2s ease-in-out;
					border-bottom: 1.5px solid rgba(70, 68, 68, 0.34118);
					filter: drop-shadow(0px 2px 1px black);
					overflow: hidden;
					color: #3fba84;
					&::before {
						content: "";
						position: absolute;
						z-index: 1;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						
					}
					&::after {
						content: "";
						position: absolute;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						z-index: 2;
						width:100%;
						height:100%;
						transition: transform .5s ease-in!important;
						transform: translateY(-100%);
						background-size: 75%;
						background-repeat: no-repeat;
						background-position: 50% 70%;
						background-image: url(../static/assets/img/vue.png);
						
					}
					&:hover{
						background-color: #534f4f;
						text-decoration: none;
						transition-delay: .9s color ease-in;
						color:transparent;
						margin-right: -15px;
						margin-left: -15px;
						&::after{
							transform: translateY(0%);
						}
						
					
					}
				}
				.nuxt{
					position: relative;
					width: 90%;
					height: 90% !important;
					display: flex;
					justify-content: center;
					transition: background-color .7s, color .2s ease-in-out;
					border-bottom: 1.5px solid rgba(70, 68, 68, 0.34118);
					filter: drop-shadow(0px 2px 1px black);
					overflow: hidden;
					color: #468c7c;
					&::before {
						content: "";
						position: absolute;
						z-index: 1;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						
					}
					&::after {
						content: "";
						position: absolute;
						top: 0px;
						left: 0px;
						right:0px;
						bottom: 0px;
						z-index: 2;
						width:100%;
						height:100%;
						transition: transform .5s ease-in!important;
						transform: translateY(-100%);
						background-size: 80%;
						background-repeat: no-repeat;
						background-position: 50% 30%;
						background-image: url(../static/assets/img/nuxt.png);
						
					}
					&:hover{
						background-color: #534f4f;
						text-decoration: none;
						transition-delay: .9s color ease-in;
						color:transparent;
						margin-right: -15px;
						margin-left: -15px;
						&::after{
							transform: translateY(0%);
						}
						
					
					}
				}
				
			}
		}
	}

}


</style>
