<template>
	<Fragment>
	<Header/>
	<main>
		<b-container id="ds-home"></b-container>
		<div class="ds-foto-perfil" >
			<div class="ds-foto-perfil__conteudo">
				<p class="ds-foto-perfil__conteudo--meu-nome">Oi! meu nome é David.</p>
				<!-- <p class="texto-digitado"></P> -->
				<vue-typed-js :strings="['Desenvolvedor Front-End', 'Apaixonado por Tecnologia', 'Nascido em Belém do Pará']" 
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
			<Contact :cv="cv" />
		</b-container>

		<!-- a partir daqui o content está oculto para possivelmente ser usado no futuro -->
		<b-container fluid id="ds-tecnologias">
			<h1 data-aos="zoom-out"
				data-aos-duration="500"
				data-aos-easing="ease-in-out"
			>
			Tecnologias
			</h1>
			<b-container >
				
				<b-row>
					<div class="linha1">
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
										<a href="https://devdocs.io/html/">
											<font-awesome-icon :icon="['fa', 'book']"/> Documentação
										</a>
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
										<a href="https://devdocs.io/css/">
											<font-awesome-icon :icon="['fa', 'book']"/> Documentação
										</a>
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
										<a href="https://getbootstrap.com/docs/4.4/getting-started/introduction/">
											<font-awesome-icon :icon="['fa', 'book']"/> Documentação
										</a>
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
										<a href="https://sass-lang.com/documentation">
											<font-awesome-icon :icon="['fa', 'book']"/> Documentação
										</a>
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
										<a href="https://devdocs.io/javascript/">
											<font-awesome-icon :icon="['fa', 'book']"/> Documentação
										</a>
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
										<a href="https://codex.wordpress.org/">
											<font-awesome-icon :icon="['fa', 'book']"/> Documentação
										</a>
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
										<a href="https://codex.wordpress.org/">
											<font-awesome-icon :icon="['fa', 'book']"/> Documentação
										</a>
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
										<a href="https://gruntjs.com/getting-started">
											<font-awesome-icon :icon="['fa', 'book']"/> Documentação
										</a>
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
										<a href="https://git-scm.com/doc">
											<font-awesome-icon :icon="['fa', 'book']"/> Documentação
										</a>
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
										<a href="https://br.vuejs.org/v2/guide/">
											<font-awesome-icon :icon="['fa', 'book']"/> Documentação
										</a>
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
										<a href="https://nuxtjs.org/guide/"><font-awesome-icon :icon="['fa', 'book']"/> Documentação</a>
									</div>
								</div>
							</div>
						</b-col>
					</div>
				</b-row>
			</b-container>
		</b-container>
		<b-container fluid  id="ds-cases" >

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
						<img class="imgOwli" :src="owli.img" :alt="owli.desc">
						<a class="link" href="https://owli.com.br/">
							<font-awesome-icon :icon="['fa', 'link']" />
						</a>
					</b-col>
					<b-col cols="12" lg="3" class="teste1"></b-col>
					<b-col cols="12" lg="3" class="teste2"></b-col>
					<b-col cols="12" lg="3" class="teste3"></b-col>
					
				</b-row>
			</b-container>
		</b-container>
	</main>
	<Footer/>
	</Fragment>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'

import VueTypedJs from 'vue-typed-js'
import fileTemplate from "../static/files/CV Front-End David Souza.pdf";
import { Fragment } from 'vue-fragment'

import Knowledge from '~/components/navigation/sections/Knowledge.vue'
import WhoIam from '~/components/navigation/sections/WhoIam.vue'
import Contact from '~/components/navigation/sections/Contact.vue'
import Header from '~/components/navigation/header/Header.vue'
import Footer from '~/components/navigation/footer/Footer.vue'


Vue.use(VueTypedJs)

export default {
	layout: 'default',
	components: {
		Knowledge,
	 	WhoIam,
		Contact,
		Header,
		Footer,
		Fragment
	},
	
	data() {
		return {
			cv:	{title:"Baixar Currículo", loc:require('../static/files/CV Front-End David Souza.pdf') },
			owli:{
				img: require("../static/assets/siteOwli.jpg"),
				desc: "Owli Administradora"
			}
			
		}
	},

	methods:{
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

		},
		
	},

	mounted() {
		this.efeitoModal();
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
	background: linear-gradient(135deg, $cor-padrao, #2d2d2d  90%);
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
			@media only screen and (max-width: 768px){
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

	#ds-tecnologias{
		display:none!important;
		padding-top:60px;
		height: 600px;
		z-index: 0;
		position: relative;
		background-color: #2d2d2d;
		display: flex;
		flex-direction: column;
		@media only screen and (max-width: 768px){
			height: 930px;
		}
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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
						background: #2d2d2d;
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

	#ds-cases{
		display:none!important;
		padding-top: 60px;
		height: 600px;
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
}


</style>
