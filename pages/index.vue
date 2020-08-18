<template>
	<div>
		<Header/>
		<Main />
		<Footer/>
	</div>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'

import VueTypedJs from 'vue-typed-js'
import fileTemplate from "../static/files/CV Front-End David Souza.pdf";
import { Fragment } from 'vue-fragment'

import Header from '~/components/navigation/header/Header.vue';
import Main from '~/components/navigation/main/Main';
import Footer from '~/components/navigation/footer/Footer.vue';


Vue.use(VueTypedJs)

export default {
	layout: 'default',
	components: {
		Header,
		Footer,
		Fragment,
		Main
	},
	
	data() {
		return {
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

</style>
