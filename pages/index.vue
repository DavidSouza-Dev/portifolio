<template>
	 <main >
		 <!-- https://bootstrapmade.com/demo/DevFolio/ -->
		<b-container fluid  id="quem-sou">
			<b-container >
				<p>Nacionalidade: Brasil</p>
				<p>E-mail: davidrs.souza@gmail.com</p>
				<p>Celular: (11) 994886041</p>
				<p>Linkedin: www.linkedin.com/in/dav1dsouza</p>
				<p>Skype: daviiid.souza</p>
				
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
	margin-top: 900px;
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
		}	
	}
}


</style>
