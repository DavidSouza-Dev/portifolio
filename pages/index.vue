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
					data-aos-duration="1000" 
					data-aos-easing="ease-in-out" 
					class="texto-historia">
						Nascido em Belém do Pará, tenho 34 anos, formado em Ciência da Computação, moro em São Paulo e sou casado com a Caroline e pai da Maya <img class="pata-dog" src="../static/assets/animal-paw-print.png" ></p>
					<p
					data-aos="fade-right"
					data-aos-duration="1000" 
					data-aos-easing="ease-in-out" 
					>
						Atuo desde o inicio da minha carreira profissional em TI, mas foi recente que me senti atraído por trabalhar com Desenvolvimento Front-end. Contantemente busco me atualizar sobre as tecnologias relacionadas e estou bastante animado em trabalhar nesta area.
					</p>
				</div>
			</b-container>	
		</b-container>
		<b-container  fluid id="conhecimento">
			<b-container  >
				<b-row>
					<b-col lg="12" class="form">
						<b-col lg="6" sm="12" class="coluna1"
						 data-aos="fade-up"
						 data-aos-duration="1000"
						 data-aos-easing="ease-in-out">
							<div class="foto-desc">
								<div class="foto"></div>
								<div class="desc">
									<p><span>Nacionalidade:</span> Brasil</p>
									<p><span>Estado Civil:</span> Casado</p>
									<p><span>Perfil:</span> Desenvolvedor Front-End</p>
									<p><span>Formação:</span> Bacharel em Ciência da Computação</p>
								</div>
							</div>
							
						</b-col>
						<b-col lg="6" sm="12" class="coluna2"
							data-aos="fade-up" 
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
			<h1 data-aos="zoom-out"
				data-aos-duration="500"
				data-aos-easing="ease-in-out"
			>
			Tecnologias
			</h1>
			<b-container >
				
				<b-row>
					<div class="linha1" 
					
					 
					>
						<b-col cols="6" lg="2" sm="6" data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
							<div  class="info-html">
								<div class="front">
									<div class="octo-front">
								</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>HTML5</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
						<b-col cols="6" lg="2" sm="6"
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
							<div class="info-css">
								<div class="front">
									<div class="octo-front">
										
									</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>CSS3</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
						<b-col cols="6" lg="2" sm="6"
							data-aos="fade-right"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out">
							<div class="info-bs4">
								<div class="front">
									<div class="octo-front">
										
									</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>BOOTSTRAP 4</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
						<b-col cols="6" lg="2" sm="6"
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
							<div class="info-sass">
								<div class="front">
									<div class="octo-front">
										
									</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>SASS</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
						<b-col cols="6" lg="2" sm="6"
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
							<div class="info-javascript">
								<div class="front">
									<div class="octo-front">
										
									</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>JAVASCRIPT</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
						<b-col cols="6" lg="2" class="large"
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
							<div  data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-easing="ease-in-out" class="info-wordpress">
								<div class="front">
									<div class="octo-front">
										
									</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>WORDPRESS</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
					</div>
				</b-row>
				<b-row>
					<div class="linha2" >
						<b-col cols="6" lg="2" class="small"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
							<div class="info-wordpress">
								<div class="front">
									<div class="octo-front">
										
									</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>WORDPRESS</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
						<b-col lg="2" cols="6"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
							<div class="info-grunt">
								<div class="front">
									<div class="octo-front">
										
									</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>GRUNT</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
						<b-col lg="2" cols="6"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
							<div class="info-git">
								<div class="front">
									<div class="octo-front">
										
									</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>GIT</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
						<b-col lg="2" cols="6"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
							<div class="info-vue">
								<div class="front">
									<div class="octo-front">
										
									</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>VUE</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
						<b-col lg="2" cols="6" class="move"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
							<div class="info-nuxt">
								<div class="front">
									<div class="octo-front">
										
									</div>
								</div>
								<div class="back">
									<div class="octo-back">
										<h5>NUXT</h5>
										<a href="#"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
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
			<h1 data-aos="zoom-out"
				data-aos-duration="500"
				data-aos-easing="ease-in-out"
			>
				Portifolio
			</h1>
			<b-container>
				<b-row>
					
					<b-col cols="8" lg="3" class="owli"
						data-aos="fade"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out">
						<!-- <img class="imgOwli" src="../static/assets/caseOwli.png" alt="Owli Administradora">
						<a class="link" href="https://owli.com.br/">
							<font-awesome-icon :icon="['fa', 'link']" />
						</a> -->
					</b-col>
					<b-col cols="12" lg="3" class="teste1"></b-col>
					<b-col cols="12" lg="3" class="teste2"></b-col>
					<b-col cols="12" lg="3" class="teste3"></b-col>
					
				</b-row>
			</b-container>
		</b-container>
		<b-container fluid id="contato">
			<h1 data-aos="zoom-out"
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
					<p  class="tel">
						<font-awesome-icon :icon="['fa', 'mobile-alt']"/>  
						Telefone: (11) 994886041
					</p>				
					<p  class="skype">
						<font-awesome-icon :icon="['fab', 'skype']"/>  
						Skype: daviiid.souza
					</p>
				</div>				
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
			$(".myModal").on("click", 
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
$cor-padrao: black;
@mixin estilo_tecnologia(){
	cursor: pointer;
	position: absolute;
	top:50%;
	left:50%;
	transform: translate(-50%, -50%);
	width: 150px;
	height: 150px;
	transform-style: preserve-3d;
	perspective: 600px;
	background:transparent;
	@media only screen and (max-width: 768px){
		transform: translate(-50%, -50%) scale(.8)!important;
	}
}

@mixin estilo_front_back(){
	width: 100%;
	height: 100%;
	overflow: hidden;
	backface-visibility: hidden;
	position: absolute;
	transition: all .4s linear;
}

@mixin estilo_octo_front(){
	position:relative;
	width: 100%;
	height: 100%;
	background: linear-gradient(135deg, #837b7b 30%, $cor-padrao);
	transform: rotate(45deg);
}

@mixin estilo_front_before(){
	content:"";
	position:absolute;
	top:0;
	left:0;
	width: 100%;
	height:100%;
	background-repeat:no-repeat;
	transform: rotate(-45deg);
}

@mixin estilo_octo_back(){
	width: 100%;
	height: 100%;
	background-color:transparent;
	z-index: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: default;
}

@mixin estilo_back_after(){
	content:"";
	position:absolute;
	z-index:-1;
	top:0;
	left:0;
	width: 100%;
	height:100%;
	background-color:lightgray;
	transform: rotate(45deg);
}


main{
	margin-top: 480px;
	@media only screen and (max-width: 768px){
		margin-top: 88px;
	}
	 .foto-titulo{
		filter: drop-shadow(2px 4px 6px $cor-padrao);
		/* position: absolute;
		top: 253px;
		left: 35%; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom:200px;
		@media only screen and (max-width: 768px){
			margin-top: 290px;
			margin-bottom: 270px;


		}
		/* .foto{
			filter: drop-shadow(2px 4px 6px $cor-padrao);
			background-position: -20%;
			background-repeat: no-repeat;
			width: 205px;
			height: 204px;
			z-index:-2;
			
			background-image:  url("../static/assets/foto.jpg");
			background-size: 100%;
			border-radius: 121px;
			border: 4px solid #42311b;
		
		} */
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
				display: inline-block;
				@media only screen and (max-width: 768px){
					font-size: 24px;
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
		height: 650px;
		background-color: #2d2d2d;
		.container{
			background-color: transparent;
			color: white;
			font-size: 21px;
			
		}
		.historia{
			margin:10px;
			@media only screen and (max-width: 375px){
			margin: 0;
			}
			.foto-historia{
				filter: grayscale(1);
				margin-top: 50px;
				background-image: url("../static/assets/foto.jpg");
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
				@media only screen and (max-width: 375px){
					margin-top: 10px;
				}
			}
			.texto-historia{
				margin-top: 80px;
				font-weight: 100;
				text-align: justify;
				@media only screen and (max-width: 768px){
					font-size: 18px;
					
            	}
				@media only screen and (max-width: 375px){
					margin-top: 10px;
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
			filter: drop-shadow(0px 2px 2px $cor-padrao);
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
						background-image: url(../static/assets/fotoIndice.png);
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
		padding-top:60px;
		height: 600px;
		z-index: 0;
		position: relative;
		background-color: whitesmoke;
		display: flex;
		flex-direction: column;
		@media only screen and (max-width: 768px){
			height: 900px;
		}
		h1{
			position: relative;
			color: $cor-padrao;
			font-weight: bold!important;
			letter-spacing: 2px;
			font-size: 35px;
			font-weight: 500!important;
			text-align: center;
			@media only screen and (max-width: 768px){
				font-size: 30px
			}
			@media only screen and (max-width: 320px){
				font-size: 27px
			}
			&::before{
				content: "";
				position: absolute;
				bottom: -22px;
				transform: translateX(36%);
				width: 60%;
				height: 4px;
				background-color: #ff6e19;
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
				@media only screen and (max-width: 768px){
					flex-wrap: wrap;
					height: 420px;
				}
				
				div{
					position: relative;
					height: 84.1%;
					/* border-radius: 50%; */
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					@media only screen and (max-width: 768px){
						height: auto;
					}
					
				}
				
				@keyframes entradaTech {
					0% {
						transform: translateY(-100%);
					}
					100%{
						transform: translateY(0%);
					}
					
				}

				.info-html{
					@include estilo_tecnologia();
					
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 80%;
								background-image: url(../static/assets/html.png);
								background-position: 50%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							
								
							
							
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
							
						}	
						
					}
					&:hover > .front{

						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						
						transform: perspective(600px) rotateY(0deg);
						
					}
					
				}
				.info-css{
					@include estilo_tecnologia();
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 72%;
								background-image: url(../static/assets/css.png);
								background-position: 50% 57%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
						}	
						
					}
					&:hover > .front{
						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						transform: perspective(600px) rotateY(0deg);
					}
					
				}
				.info-bs4{
					@include estilo_tecnologia();
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 80%;
								background-image: url(../static/assets/bs.png);
								background-position: 50%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
						}	
						
					}
					&:hover > .front{

						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						
						transform: perspective(600px) rotateY(0deg);
						
					}
					
				}
				.info-sass{
					@include estilo_tecnologia();
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 80%;
								background-image: url(../static/assets/sass.png);
								background-position: 65%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
						}	
						
					}
					&:hover > .front{

						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						
						transform: perspective(600px) rotateY(0deg);
						
					}
					
				}
				.info-javascript{
					@include estilo_tecnologia();
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 67%;
								background-image: url(../static/assets/js.png);
								background-position: 50% 57%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
						}	
						
					}
					&:hover > .front{

						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						
						transform: perspective(600px) rotateY(0deg);
						
					}
					
				}
				.large{
					display: none;
					@media only screen and (max-width: 768px){
						display: block;
					}
				}
				.info-wordpress{
					@include estilo_tecnologia();
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 80%;
								background-image: url(../static/assets/wp.png);
								background-position: 50%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
						}	
						
					}
					&:hover > .front{

						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						
						transform: perspective(600px) rotateY(0deg);
						
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
				@media only screen and (max-width: 768px){
					position: relative;
					flex-wrap: wrap;
					height: 294px;
					justify-content: right;

				}
				div{
					position: relative;
					height: 84.1%;
					display: flex;
					align-items: center;
					justify-content: center;
					@media only screen and (max-width: 768px){
						height: auto;
					}
				}
				
				.small{
					display: block;
					@media only screen and (max-width: 768px){
						display: none;
					}
				}
				.info-wordpress{
					@include estilo_tecnologia();
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 80%;
								background-image: url(../static/assets/wp.png);
								background-position: 50%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
						}	
						
					}
					&:hover > .front{

						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						
						transform: perspective(600px) rotateY(0deg);
						
					}
					
				} 
				.info-grunt{
					@include estilo_tecnologia();
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 80%;
								background-image: url(../static/assets/grunt.png);
								background-position: 50%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
						}	
						
					}
					&:hover > .front{

						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						
						transform: perspective(600px) rotateY(0deg);
						
					}
					
				}
				.info-git{
					@include estilo_tecnologia();
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 80%;
								background-image: url(../static/assets/git.png);
								background-position: 50%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
						}	
						
					}
					&:hover > .front{

						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						
						transform: perspective(600px) rotateY(0deg);
						
					}
					
				}
				.info-vue{
					@include estilo_tecnologia();
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 71%;
								background-image: url(../static/assets/vue.png);
								background-position: 50% 65%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
						}	
						
					}
					&:hover > .front{

						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						
						transform: perspective(600px) rotateY(0deg);
						
					}
					
				}
				
				.info-nuxt{
					@include estilo_tecnologia();
					.front, .back{
						@include estilo_front_back();
					}
					.front{
						background: whitesmoke;
						transform: perspective(600px) rotateY(0deg);
						.octo-front{
							@include estilo_octo_front();
							&::before{
								@include estilo_front_before();
								background-size: 80%;
								background-image: url(../static/assets/nuxt.png);
								background-position: 50% 29%;
							}
						}	
					}
					.back{
						background: whitesmoke;
						transform: perspective(600px) rotateY(180deg);
						.octo-back{
							@include estilo_octo_back();
							&::after{
								@include estilo_back_after();	
							}
							h5{
								font-weight: 600;
								margin-bottom: 20px;
							}
							a{
								text-decoration: none;
								color:$cor-padrao;
								font-size: 15px;
								&:hover{
									font-weight: 600;
									color:currentColor;
									
								}
							}
						}	
						
					}
					&:hover > .front{

						transform: perspective(600px) rotateY(-180deg);
					}	
					&:hover > .back{
						
						transform: perspective(600px) rotateY(0deg);
						
					}
					
				}
				
			}
		}
	}

	#cases{
		padding-top: 60px;
		height: 500px;
		z-index: 0;
		position: relative;
		display: flex;
		flex-direction: column;
		h1{
			position: relative;
			color: $cor-padrao;
			font-weight: bold!important;
			letter-spacing: 2px;
			font-size: 35px;
			font-weight: 500!important;
			text-align: center;
			@media only screen and (max-width: 768px){
				font-size: 30px
			}
			@media only screen and (max-width: 320px){
				font-size: 27px
			}
			&::before{
				content: "";
				position: absolute;
				bottom: -22px;
				transform: translateX(36%);
				width: 60%;
				height: 4px;
				background-color: #ff6e19;
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
					position: relative;					
					background-color: $cor-padrao;
					overflow: hidden;
					padding-left: 0;
					padding-right: 0;
					border: 2px solid gray;
					transform: scale(1.5);
					.link{
						display: none;
						transition: display .3s ease-in;
						&:hover{
							display: block;
							position: absolute;
							bottom: 3%;
							right: 1%;
							background: #ff6e19 ;
							height: 25px;
							width: 25px;
							display: flex;
							justify-content: center;
							align-items: center;
							border-radius: 50%;
							color: white;
							.imgOwli{
								height: 100%;
								width: 100%;
								cursor: pointer;
								transition: .3s ease-in;
								&:hover{
								opacity: .7;
								
								}
							}
						}
						
					}
 
					.imgOwli{
						height: 100%;
						width: 100%;
						cursor: pointer;
						transition: .3s ease-in;
						&:hover{
							opacity: .7;
							.link{
								display: block;
								position: absolute;
								bottom: 3%;
								right: 1%;
								background: transparent;
								height: 25px;
								width: 25px;
								display: flex;
								justify-content: center;
								align-items: center;
								border-radius: 50%;
								color: white;
							}
						
						}
					}
				}
				&:hover{
					.link{
						display: block;
						position: absolute;
						bottom: 3%;
						right: 1%;
						background: rgba(255, 255, 255, 0.438);
						height: 25px;
						width: 25px;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 50%;
						color: #ff6d1996;
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
		background-color: $cor-padrao; /* Fallback color */
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
		background-image: url(../static/assets/close.png);
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
		height: 460px;
		background-color: #424242;
		display: flex;
		flex-direction: column;
		padding-top: 60px;
		h1{
			position: relative;
			color: white;
			font-weight: bold!important;
			letter-spacing: 2px;
			font-size: 35px;
			font-weight: 500!important;
			text-align: center;
			@media only screen and (max-width: 768px){
				font-size: 30px
			}
			@media only screen and (max-width: 320px){
				font-size: 27px
			}
			&::before{
				content: "";
				position: absolute;
				bottom: -22px;
				transform: translateX(36%);
				width: 60%;
				height: 4px;
				background-color: #ff6e19;
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
				@media only screen and (max-width: 768px){
					padding: 10px 10px 10px 15px;
					font-size: 12px;	
				}
				
				&::after{
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					opacity: .2;
					background-image: url("../static/assets/pngguru.com-id-nzsxy.png");
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
				.tel{
					z-index: 2;
					position: relative;
					display: inherit;
					svg{
						margin-right: 30px;
						font-size: 23px;
						margin-left: 4px;
					}
				}
				.skype{
					z-index: 2;
					position: relative;
					display: inherit;
					svg{
						margin-right: 28px;
						margin-left: 2px;
    					font-size: 23px;
					}
				}
				

			}	
			
		}
		
	}

}


</style>
