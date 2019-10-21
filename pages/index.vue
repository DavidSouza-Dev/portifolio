<template>
	 <main >
		
			<section id="quem-sou">
				<b-container fluid>
					Quem sou Eu
				</b-container>
			</section>
			
			<section id="conhecimento">
				<div class="container-fluid">
					Conhecimentos
					</div>
			</section>

			<section id="experiencia">
				<div class="container-fluid">
					Experiências
					</div>
			</section>

			<section id="cases">
				<div class="container-fluid">
					Cases
					</div>
			</section>

			<section id="contato">
				<div class="container-fluid">
					teste
					</div>
			</section>
		
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
	section{
		height:250px;
	}
    section:nth-child(even){
		background-color: whitesmoke;
	}

	section:nth-child(odd){
		background-color: lightgray;
	}
}


</style>
