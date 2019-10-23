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
				<div class="coluna1">
					<div class="foto-desc">
						<div class="foto"></div>
						<div class="desc">
							<p>Nacionalidade: Brasil</p>
							<p>E-mail: davidrs.souza@gmail.com</p>
							<p>Celular: (11) 994886041</p>
							<p>Linkedin: www.linkedin.com/in/dav1dsouza</p>
							<p>Skype: daviiid.souza</p>
						</div>
					</div>
					<div class="habilidades">

					</div>
				</div>
				<div class="coluna2">
					<h2 class="sobre">Quem Sou</h2>
					<p class="texto">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
				</div>
				
				
				
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
@import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');


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
			font-family: 'Acme', sans-serif!important;  
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
			background-color: whitesmoke;
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
		height: 400px;
		.container{
			box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
			display:flex;
			justify-content: center;
			align-items: center;
			.coluna1{
				width:60%;
				display:flex;
				flex-direction: column;
				justify-content: center;
				.foto-desc{
					display:flex;
					justify-content: space-evenly;
					.foto{
						background-size: 100%;
						width: 150px;
						height: 175px;
						background-image: url(/_nuxt/static/assets/img/foto.jpg);
						background-repeat: no-repeat;
					}
					.desc{
						font-size:15px;
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
