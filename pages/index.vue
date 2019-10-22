<template>
	 <main >
		 <!-- https://bootstrapmade.com/demo/DevFolio/ -->
		<b-container fluid>
			<b-container  id="quem-sou">
				Quem sou Eu
			</b-container>
		</b-container>
		<b-container fluid>
			<b-container id="conhecimento">
				Conhecimentos
			</b-container>
		</b-container>
		<b-container fluid>
			<b-container id="experiencia">
				Experiências
			</b-container>
		</b-container>
		<b-container fluid>
			<b-container  id="cases">
				Cases
			</b-container>
		</b-container>
		<b-container fluid>
			<b-container id="contato">
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
		.container{
			border: 1px solid red;
			height: 100%;
		}
	}
    .container-fluid:nth-child(even){
		background-color: whitesmoke;
	}

	.container-fluid:nth-child(odd){
		background-color: lightgray;
	}
}


</style>
