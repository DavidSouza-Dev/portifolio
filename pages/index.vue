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

import Header from '~/components/navigation/header/Header.vue';
import Main from '~/components/navigation/main/Main';
import Footer from '~/components/navigation/footer/Footer.vue';

export default {
	layout: 'default',
	components: {
		Header,
		Footer,
		Main
	},
	
	data() {
		return {
			
			
		}
	}

	
	
}
</script>

<style lang="scss" scoped>
$cor-padrao: black;

</style>
