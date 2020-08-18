<template>
    
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
                        <!-- <p class="detalhe">Proficiência no trabalho de equipe </p>
                        <div class="bar" 
                            data-aos="fade-right"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-out"
                        ></div> -->
                        <p class="detalhe">Vanilla</p>
                        <div class="bar"></div>
                        <p class="detalhe">JQuery </p>
                        <div class="bar"></div>
                        <p class="detalhe">KnockoutJS </p>
                        <div class="bar"></div>
                        <p class="detalhe">Pré-processador CSS - SASS/LESS </p>
                        <div class="bar"></div>  
                        <p class="detalhe"> Padrão de Arquitetura CSS - BEM </p>
                        <div class="bar"></div>
                        <p class="detalhe">API REST </p>
                        <div class="bar"></div>
                        <p class="detalhe">Wordpress </p>
                        <div class="bar"></div>
                        <p class="detalhe">Controladores de Versão GIT </p>
                        <div class="bar"></div>
                        <p class="detalhe">Plataforma Oracle Commerce Cloud</p>
                        <div class="bar"></div>
                        <p class="detalhe">ReactJs</p>
                        <div class="bar"></div>
                        <p class="detalhe">Vuejs </p>
                        <div class="bar"></div>
                    </div>
                    
                </b-col>
            </b-col>
        </b-row>
    </b-container>
		
</template>

<script>

import $ from 'jquery'

export default {
    name: 'Knowledge',
    data() {
		return {
			
        }
			
    },
    methods:{
        efeitoBars: function(event){
            $(window).scroll(function () { 
            let menuResposivo = $(".navbar-nav"),
                scrollWindow = $(window).scrollTop(),
                scrollEl = document.querySelector('#ds-conhecimento').offsetTop;

            if(menuResposivo.width() > 768 && scrollWindow >= scrollEl && scrollWindow <= scrollEl)
                $(".bar").css({ "transform": "scaleX(1)"})
            else
                $(".bar").css({ "transform": "scaleX(0)"})

            if(menuResposivo.width() < 768 && scrollWindow >= scrollEl){
                $(".bar").css({ "transform": "scaleX(1)"})
            }
            else{
                if(menuResposivo.width() < 768 && scrollWindow <= scrollEl){
                $(".bar").css({ "transform": "scaleX(0)"})
            }
            }


            });

        },
       
    },
    mounted() {
		this.efeitoBars();
		
	},
}
    


</script>

<style lang="scss" scoped>
$cor-padrao: black;


		.container{
			border: 1px solid transparent;
			height:600px;
			@media only screen and (max-width: 768px){
				height:auto!important;
                
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
						background-image: url('../../../static/assets/fotoIndice.png');
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
						height: 1px;
						width: 100%;
						background-color: #ff6e19;
						margin-bottom: 1.5rem!important;
						transform: scaleX(0);
						transform-origin: left;
						transition: transform .7s ease-in;
					}
					
				}
			}
		}	
	
</style>