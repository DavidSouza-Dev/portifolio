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
					<div class="foto-historia" alt=""
						data-aos="zoom-in"
						
					>
					</div>
					<p 
					
						data-aos="fade-right"
						data-aos-duration="1000" data-aos-easing="ease-in-out" class="texto-historia">Nascido em Belém do Pará, tenho 34 anos, formado em Ciência da Computação, sou casado com a Caroline e pai da Maya <img class="pata-dog" src="../static/assets/img/animal-paw-print.png" >. Atuo a bastante tempo em TI, mas foi recente que me senti atraído por Front-end e estudo muito as tecnologias relacionadas. Estou bastante animado em trilhar este caminho.</p>
					




				</div>
			</b-container>	
		</b-container>
		<b-container  fluid id="conhecimento">
			<b-container  >
				<b-row>
					<b-col lg="12" class="form">
						<b-col lg="6" sm="12" class="coluna1"
						 data-aos="fade-right"
						 data-aos-duration="1000"
						 data-aos-easing="ease-in-out">
							<div class="foto-desc">
								<div class="foto"></div>
								<div class="desc">
									<p><span>Nacionalidade:</span> Brasil</p>
									<p><span>Estado Civil:</span> Casado</p>
									<p><span>Perfil:</span> Desenvolvedor Front-End</p>
									<p><span>Formação:</span> Bacharel em Ciência da Computação</p>
									<!-- 
									<p><span>Skype:</span> daviiid.souza</p> -->
								</div>
							</div>
							
						</b-col>
						<b-col lg="6" sm="12" class="coluna2"
							data-aos="fade-left" 
							data-aos-duration="1000"
							data-aos-easing="ease-in-out">
							<div class="habilidades">
								<h5>Habilidades</h5>
								<p class="detalhe">Proficiência no trabalho de equipe </p>
								<div class="bar" 
									data-aos="fade-right"
									data-aos-duration="3000"
									data-aos-easing="ease-in-out"
								></div>
								<p class="detalhe">HTML5 </p>
								<div class="bar"></div>
								<p class="detalhe">CSS3 </p>
								<div class="bar"></div>
								<p class="detalhe">Bootstrap 4 </p>
								<div class="bar"></div>
								<p class="detalhe">Pré-processador CSS (SASS) </p>
								<div class="bar"></div>  
								<p class="detalhe">Javascript </p>
								<div class="bar"></div>
								<p class="detalhe">API REST </p>
								<div class="bar"></div>
								<p class="detalhe">Wordpress </p>
								<div class="bar"></div>
								<p class="detalhe">Task Runner GruntJs </p>
								<div class="bar"></div>
								<p class="detalhe">Controladores de Versão GIT </p>
								<div class="bar"></div>
								<p class="detalhe">Framework Vue.js </p>
								<div class="bar"></div>
							</div>
							
						</b-col>
					</b-col>
				</b-row>
			</b-container>
		</b-container>
		<b-container fluid id="tecnologias">
			<h1 data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
			>
			Tecnologias
			</h1>
			<b-container >
				
				<b-row>
					 <div class="linha1">
						 <b-col lg="2" sm="6">
						<div class="html" href="#">HTML5
							<a class="img-html"/>
						</div>
					</b-col>
					<b-col lg="2" sm="6">
						<div class="css3" href="#">CSS3
							<a class="img-css3"/>
						</div>
					</b-col>
					<b-col lg="2" sm="6">
						<div class="bs4" href="#">BOOTSTRAP 4
							<a class="img-bs4"/>
						</div>
					</b-col>
					<b-col lg="2" sm="6">
						<div class="sass" href="#">SASS
							<a class="img-sass"/>
						</div>
					</b-col>
					<b-col lg="2" sm="6">
						<div class="javascript" href="#">JAVASCRIPT
							<a class="img-javascript"/>
						</div>
					</b-col>
					 </div>
					
					
				</b-row>
				<b-row>
					<div class="linha2" >
						<b-col lg="2">
							<div class="wordpress" href="#">
								<span>WORDPRESS</span>
								<a class="img-wordpress"/>
							</div>
							</b-col>
							<b-col lg="2" cols="6">
								<div class="grunt" href="#">GRUNT
									<a class="img-grunt"/>
								</div>
							</b-col>
							<b-col lg="2" cols="6">
								<div class="git" href="#">GIT
									<a class="img-git"/>
								</div>
							</b-col>
							<b-col lg="2" cols="6">
								<div class="vue" href="#">VUE
									<a class="img-vue"/>
								</div>
							</b-col>
							<b-col lg="2" cols="6">
								<div class="nuxt" href="#">NUXT
									<a class="img-nuxt"/>
							</div>
						</b-col>
					</div>
				</b-row>
			</b-container>
		</b-container>
		<b-container fluid  id="cases" >

			<div id="myModal" class="modal">
				<span class="close"></span>
				<div class="modalTela">
					<img class="modal-content" id="img01">
					<div id="caption"></div>
				</div>

				
			</div>
			<h1 data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
			>
				Portifolio
			</h1>
			<b-container>
				<b-row>
					<b-col cols="4" lg="3" class="owli"
						data-aos="fade"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						>
						<img class="imgOwli" src="../static/assets/img/caseOwli.png" alt="Owli Administradora">
					</b-col>
					<b-col cols="2" lg="3" class="teste1"></b-col>
					<b-col cols="2" lg="3" class="teste2"></b-col>
					<b-col cols="2" lg="3" class="teste3"></b-col>
					
				</b-row>
			</b-container>
		</b-container>
		<b-container fluid id="contato">
			<h1 data-aos="fade"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"

			>
				Entre em Contato ; )

			</h1>
			<b-container >
				
				<div class="card" 
					data-aos="zoom-in"
					data-aos-duration="600"
					data-aos-easing="ease-in-out"
				>
					<!-- <p><span>Entre em contato</span> ;)</p> -->
					<p  class="mail">
						<font-awesome-icon :icon="['fa', 'envelope']"/>  
						E-mail: davidrs.souza@gmail.com
					</p>
					<p  class="wpp">
						<font-awesome-icon :icon="['fab', 'whatsapp']"/>  
						Whatsapp: (11) 994886041
					</p>				
					<p  class="wpp">
						<font-awesome-icon :icon="['fab', 'skype']"/>  
						Skype: daviiid.souza
					</p>
				</div>				
				<!-- <div class="sociais">
					<h3>Redes Sociais</h3>
					<div class="linkSocial">
						
						<span class="linkedin"><font-awesome-icon :icon="['fab', 'linkedin']"/></span>
						<span class="github"><font-awesome-icon :icon="['fab', 'github-square']"/></span>
						<span class="instagram"><font-awesome-icon :icon="['fab', 'instagram']"/></span>
						<span class="twitter"><font-awesome-icon :icon="['fab', 'twitter-square']"/></span>
					</div>
					

				</div> -->


			</b-container>
		</b-container>
	</main>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'
import Typed from 'typed.js';
import { VueTypedJs } from 'vue-typed-js'
/* import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

Vue.use(AOS) */
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
		},
		efeitoModal(){
			var modal = document.getElementById("myModal");

			var img = document.getElementById("imgOwli");
			var modalImg = document.getElementById("img01");
			var captionText = document.getElementById("caption");
			$(".imgOwli").on("click", 
				function(){
					$('header').css({"z-index":"0"})
					modal.style.display = "block"
					modalImg.src = this.src
					captionText.innerHTML = this.alt

				})
			$(".modal").on("click", 
				function(){
					modal.style.display = "none";
					$('header').css({"z-index":"1"})
			}) 

		}
	},

	/* created(){
		AOS.init();
	}, */
	
	mounted() {
		this.efeitoModal();
		this.EfeitoDigitacao();
		
	}, 
	
}
</script>

<style lang="scss" scoped>



main{
	margin-top: 480px;
	@media only screen and (max-width: 768px){
		margin-top: 88px;
	}
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
		@media only screen and (max-width: 768px){
			margin-top: 344px;
			margin-bottom: 190px;


		}
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
			@media only screen and (max-width: 768px){
				font-size: 32px;
			}
			.texto-digitado{
				font-size:35px;
				opacity:0.9;
				display: inline-block;
				@media only screen and (max-width: 768px){
					font-size: 27px;
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

	#quem-sou{
		height: 600px;
		background-color: #404040;
		.container{
			background-color: transparent;
			color: white;
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
				@media only screen and (max-width: 768px){
					transform: rotate(10deg) scale(1.2);
					margin-top: 0;
            	}
			}
			.texto-historia{
				margin-top: 80px;
				font-weight: 100;
				text-align: justify;
				@media only screen and (max-width: 768px){
					font-size: 18px;
					
            	}
			}
			.pata-dog{
				filter: invert(1);
				opacity: .7;
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
			@media only screen and (max-width: 768px){
				height:700px;
			}
			filter: drop-shadow(0px 2px 2px black);
			.form{
				display: flex;
				padding-top: 60px;
				@media only screen and (max-width: 768px){
					flex-direction: column; 
					padding-top: 0px;         
				}
			}
			.coluna1{
				padding-top: 20px;
				/* 	width:40%; */
				padding: 0;
				[data-aos="fade-right"] {
				transform: translate3d(-150px,0,0);
				}
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
						margin-right: 30px;
						@media only screen and (max-width: 768px){
							margin-right: 30px;
						}
					}
					.desc{
						font-size:15px;
						line-height: 1.5;
						@media only screen and (max-width: 768px){
                           font-size: 13px;
                        }
						span{
							font-weight: 600;
						}
					}
				}
				

				
				
			}
			.coluna2{
				/* width:60%; */
				.habilidades{
					padding-left: 30px;
					@media only screen and (max-width: 768px){
						padding-left: 0;
					}
					h5{
						margin-bottom: 1.2rem;
					}
					.detalhe{
						margin-bottom: 0.5rem!important;
						line-height: .8;
						@media only screen and (max-width: 768px){
                           font-size: 13px
                        }
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
		padding-top: 20px;
		height: 600px;
		z-index: 0;
		position: relative;
		background-color: whitesmoke;
		display: flex;
		flex-direction: column;
		h1{
			position: relative;
			color: black;
			font-weight: bold!important;
			letter-spacing: 2px;
			font-size: 35px;
			font-weight: 500!important;
			text-align: center;
			&::before{
				content: "";
				position: absolute;
				bottom: -22px;
				transform: translateX(36%);
				width: 60%;
				height: 4px;
				background-color: black;
			}
		}

		
		.container{
			background: transparent;
			margin-top: 80px;
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
				
				@keyframes entradaTech {
					0% {
						transform: translateY(-100%);
					}
					100%{
						transform: translateY(0%);
					}
					
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

						animation-duration: 0.9s;
						animation-timing-function: ease-out;
						animation-delay: .8s;
						animation-iteration-count: 1;
						animation-direction: normal;
						animation-fill-mode: forwards;
						animation-play-state: running;
						animation-name: entradaTech;

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

	

	#cases{
		padding-top: 20px;
		height: 500px;
		z-index: 0;
		position: relative;
		display: flex;
		flex-direction: column;
		h1{
			position: relative;
			color: black;
			font-weight: bold!important;
			letter-spacing: 2px;
			font-size: 35px;
			font-weight: 500!important;
			text-align: center;
			&::before{
				content: "";
				position: absolute;
				bottom: -22px;
				transform: translateX(36%);
				width: 60%;
				height: 4px;
				background-color: black;
			}
		}
		.container{
			padding: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			.row{
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				.owli{
					/* background-color: black;
					overflow: hidden;
					padding-left: 0;
					padding-right: 0; */

					
					background-color: black;
					overflow: hidden;
					padding-left: 0;
					padding-right: 0;
					border: 2px solid gray;
					transform: scale(1.5);
 
					.imgOwli{
						height: 100%;
						width: 100%;
						cursor: pointer;
						transition: .3s;
						&:hover{
						opacity: .7;
						
						}
					}
				}

			}
		}
	}
	.modal{
		display: none;
		position: fixed;
		z-index: 10;
		padding-top: 150px;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgb(0,0,0); /* Fallback color */
  		background-color: rgba(0,0,0,0.7); /* Black w/ opacity */
	}
	.modalTela{
		box-shadow: 0 0 25px #000;
		margin: auto;
		display: block;
		width: 80%;
		max-width: 700px;
	}
	.modal-content {
		margin: auto;
		display: block;
		/* width: 80%; */
		max-width: 700px;
		border: 0px solid rgba(0, 0, 0, 0.2); 
    	border-radius:0rem;
	}

	#caption {
		margin: auto;
		display: block;
		/* width: 80%; */
		max-width: 700px;
		text-align: center;
		color: #fdfdfe;
		font-size: 19px;
		font-weight: 500;
		height: 40px;
		background-color: #343a40;
		padding-top: 8px;
	}
	.close {
		position: absolute;
		height: 36px;
		width: 36px;
		top: 15px;
		right: 35px;
		color: #f1f1f1;
		font-size: 40px;
		font-weight: bold;
		transition: 0.3s;
		background-image: url(../static/assets/img/close.png);
		background-repeat: no-repeat;
		border-radius: 3rem;
		filter: grayscale(1);
		
	}

	.close:hover,.close:focus {
		color: #bbb;
		text-decoration: none;
		cursor: pointer;
	}

	/* Add Animation */
/* .modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
} */

	#contato{
		position: relative;
		height: 400px;
		background-color: #424242;
		display: flex;
		flex-direction: column;
		padding-top: 30px;
		h1{
			position: relative;
			color: white;
			font-weight: bold!important;
			letter-spacing: 2px;
			font-size: 35px;
			font-weight: 500!important;
			text-align: center;
			&::before{
				content: "";
				position: absolute;
				bottom: -22px;
				transform: translateX(36%);
				width: 60%;
				height: 4px;
				background-color: white;
			}
		}
		.container{
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			background-color: #424242;
			.card{
				height: 220px;
				position: relative;
				color: white;
				font-weight: 700;
				width: 700px;
				background-color: #424242;
				padding: 10px 10px 10px 30px;
				justify-content: center;
				
				&::after{
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					opacity: .2;
					background-image: url("../static/assets/img/pngguru.com-id-nzsxy.png");
					background-size: 68%;
					background-position: 123% 0;
					background-repeat: no-repeat;
					filter: grayscale(1);
					box-shadow: 0px 0px 3px 1px;

				}
				.mail{
					z-index: 2;
					position: relative;
					display: inherit;
					svg{
						margin-right: 25px;
    					font-size: 23px;
					}
					
				}
				.wpp{
					z-index: 2;
					position: relative;
					display: inherit;
					svg{
						margin-right: 25px;
    					font-size: 23px;
					}
				}
				.skype{
					z-index: 2;
					position: relative;
					display: inherit;
					svg{
						margin-right: 25px;
    					font-size: 23px;
					}
				}
				

			}	
			
		}
		
	}

}


</style>
