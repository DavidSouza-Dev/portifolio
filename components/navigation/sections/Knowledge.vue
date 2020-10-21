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
                        
                        <div class="desc" >
                            <p v-for="(info,index) in perfil" :key="index">
                                <span>{{index}}:</span> {{info}}
                            </p>
                        </div>

                    </div>
                    
                </b-col>
                <b-col lg="6" sm="12" class="coluna2"
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div class="habilidades">
                        <h5>Habilidades</h5>
                        
                        <p class="detalhe" v-for="(item,index) in habilidades" :key="index">
                            {{ item.habilidade }}
                        </p>
                        
                    </div>
                    
                </b-col>
            </b-col>
        </b-row>
    </b-container>
		
</template>

<script>

import { mapGetters } from 'vuex'
import $ from 'jquery'

export default {
    name: 'Knowledge',
    computed:{
        ...mapGetters({
            habilidades: 'store/GET_HABILIDADES',
            perfil:'store/GET_PERFIL'
        }),
    },
    methods:{
        efeitoBars: function(event){

            $(window).scroll(function () { 
            let menuResposivo = $(".navbar-nav"),
                scrollWindow = $(window).scrollTop(),
                scrollEl = document.querySelector('#ds-conhecimento').offsetTop;

            if(menuResposivo.width() > 768 && scrollWindow >= scrollEl && scrollWindow <= scrollEl)
              //  $(".bar").css({ "transform": "scaleX(1)"})
           // else
              //  $(".bar").css({ "transform": "scaleX(0)"})

            if(menuResposivo.width() < 768 && scrollWindow >= scrollEl){
               // $(".bar").css({ "transform": "scaleX(1)"})
            }
            else{
                if(menuResposivo.width() < 768 && scrollWindow <= scrollEl){
                //$(".bar").css({ "transform": "scaleX(0)"})
            }
            }


            });

        },
       
    },
    mounted() {
		this.efeitoBars();
		console.log(this.habilidades)
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
                        position: relative;
                        margin-bottom: 1.5rem !important;
                        line-height: .8;
						@media only screen and (max-width: 768px){
                           font-size: 13px
                        }
                        &:after{
                            position: absolute;
                            content: '';
                            bottom: -.4rem;
                            left: 0;
                            height: 1px;
                            width: 100%;
                            background-color: #ff6e19;
                            transform: scaleX(1);
                            transition: transform .7s ease-in; 
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