<template>
	 <main >
		 
			<div class="foto-titulo">
				<div class="foto"> </div>
				<div class="titulo">
					<p>David Souza</p>
					<p>Desenvolvedor Front-End</p>
				</div>
			</div>
		 <!-- https://bootstrapmade.com/demo/DevFolio/ -->
		<b-container fluid  id="quem-sou">
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
							</div>
						</b-col>
						<b-col lg="6" class="coluna2">
							<h2 class="sobre">Quem Sou</h2>
							<p class="texto">Nascido em Belém do Pará, casado com a Caroline e </p>
						</b-col>
					</b-col>
					
				
				
				
				
			
			</b-row>
			</b-container>	
		</b-container>
		<b-container fluid id="conhecimento">
			<b-container >
				Conhecimentos
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
import { mapGetters } from 'vuex'

export default {
	layout: 'default',
	components: {
		
	},
	data() {
		return {
		
		}
	},
	computed: {
		
	},
	
}
</script>

<style lang="scss" scoped>



main{
	margin-top: 210px;
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
			
			text-align: center;
			color: white;
			font-weight: 500;
			font-size: 40px;
		}
	}
	.container-fluid{
		height:250px;
		display: flex;
		align-items: center;
		.container{
			background-color: white;
			border: 1px solid red;
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
		height: 950px;
		.container{
			border: 1px solid transparent;
			height: 750px;
			box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
			.form{
				display: flex;
				padding-top: 60px;
			}
			.coluna1{
				width:60%;
				.foto-desc{
					display:flex;
					justify-content: space-evenly;
					margin-bottom: 30px;
					.foto{
						border-radius: 15px;
						background-size: 100%;
						width: 150px;
						height: 175px;
						background-image: url(/_nuxt/static/assets/img/foto.jpg);
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
						height: 2px;
						width: 100%;
						background-color: #2c2b2b2d;
						margin-bottom: 1rem!important;
					}
				}
			}
			.coluna2{
				width:40%;
			}
		}	
	}
}


</style>
