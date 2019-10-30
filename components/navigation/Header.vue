<template>
    <div>
        <div class="header-head"></div>
        <header>
           
            <div class="background">
            <b-navbar class="opacity0" toggleable="lg" type="light" variant="info">
                <div class="menu">  
                    <b-navbar-brand href="#">
                       DAVID SOUZA
                    </b-navbar-brand>
                    <font-awesome-icon :icon="['fas', 'fa-bars']"/>
                   <!--  <font-awesome-icon :icon="['fa', 'times']"/> -->
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    
                
                </div>
                
                <b-collapse id="nav-collapse" is-nav>
                <div class="menu-in">
                    <b-navbar-nav>
                        <b-nav-item href="#quem-sou">Quem sou eu?</b-nav-item>
                        <b-nav-item href="#conhecimento">Conhecimentos</b-nav-item>
                        <b-nav-item href="#experiencia">Experiências</b-nav-item>
                        <b-nav-item href="#cases">Cases</b-nav-item>
                        <b-nav-item href="#contato">Contato</b-nav-item>
                    </b-navbar-nav>
                </div>
                </b-collapse>
            </b-navbar>
            </div>
        </header>
    </div>    
</template>

<script>
import $ from 'jquery'

export default {
    name: 'Header',
    data() {
        return {
            searchValue: ''
        }
    },
    methods: {
        renderizaBar(){
           $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if(scroll > 750){
                    $('.background').addClass("opacity1").removeClass("opacity0")
                    $(".navbar").addClass("opacity1").removeClass("opacity0")
                    $(".navbar").css({background:"white"})
                    $(".nav-link").css({color:"black"})
                }
                else{
                    $('.background').removeClass("opacity1").addClass("opacity0")
                    $(".navbar").removeClass("opacity1").addClass("opacity0")
                    $(".navbar").css({background:"transparent"})
                    $(".nav-link").css({color:"aliceblue"})
                }
            });	
        },


        
    },

    mounted() {
        this.renderizaBar()
    },
    
}
</script>

<style lang="scss" scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
}

@import url('https://fonts.googleapis.com/css?family=Audiowide|Cardo|Spectral&display=swap');


.header-head{
    background-color: rgb(25, 25, 25)!important;
	position: fixed;
	top: 0;
	opacity: 1;
	z-index:-3;
	height:900px;
    filter: blur(0.8px);
    background-blend-mode: color-dodge;
 	background-image: linear-gradient(to top, rgba(0, 0, 0, 1), transparent),url("../../static/assets/img/NoteAndDesk2.jpg");
 	background-size: 110%;
    background-position: 60% 13%;
	background-repeat: no-repeat;
	width: 100%;
    margin-top: -6px;
	@media only screen and (max-width: 768px){
		background-position: -20% 0%;
	}
    
}


 header{
        z-index:1;
        position: fixed;
        top: 0px;
        width: 100%;
        @media only screen and (max-width: 768px){
            height: 68x!important;
        }

        .opacity1{
             background-color: rgb(255, 255, 255)!important; 
            box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.06);

            height: 60px;
            transition: background-color .5s ease-in-out;        }
        .opacity0{
            transition: background-color .5s ease-in-out;    
            background-color: transparent!important;
        }
        .background{
            position: relative;
            z-index: 9999;
            @media only screen and (max-width: 768px){
                height:70px;
                background-position: 20% 0%;
                height: 68x;    
            }
           
            .navbar{
                transition: all .4s ease-in-out;
                
                @media only screen and (max-width: 768px){
                    padding: 0!important; 
                    height: 68x!important;
                }
                
                .menu{
                    height: 70px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    @media only screen and (max-width: 768px){
                        width: 100%;
                    }

                    .navbar-brand{
                        font-size: 30px;
                        font-weight: bold;
                        color: white;
                        font-family: 'Spectral', serif;
                        padding:10px 0 10px 0;
                        margin-left: 2em!important;
                        opacity: .8;
                        @media only screen and (max-width: 768px){
                            margin-left: 1em!important;
                        }
                    }
            
                    .navbar-toggler {
                        color: transparent!important;
                        border-color: transparent!important;
                        background-color: #8c795ff3!important;
                        border-radius: 50px;
                        background-size: 50px;
                        position: absolute;
                        right: 1em;
                        top: .5em;
                        height: 50px;
                        width: 50px;
                        .fa, .fas {
                            font-size: 32px!important;
                            color: #faebd7b3!important;
                            margin-left: -2px;
                        }
                        
                    }

                    .my-toggle{
                        @media only screen and (max-width: 768px){
                        // margin-right: .5em!important;
                        }
                    }

                   
                    
                    

                }
            
                .menu-in{
                    
                    position: absolute;
                    right: 4em;
                    opacity: .9;
                    @media only screen and (max-width: 768px){
                        position: static;
                    }

                    .navbar-nav{
                         
                        transition: background-color .5s ease-in-out;
                       /*  background-color: #8c795ff3; */
                        border-radius: 10px;
                        @media only screen and (max-width: 768px){
                            background: #8c795ff3;
                            border-radius: 0px; 
                        }
                        .nav-item{
                            font-size: 18px;
                            .nav-link{
                                transition: color .5s ease-in-out;
                                color: aliceblue;
                                padding-right: .6rem;
                                padding-left: .6rem;
                            }

                            .nav-link:hover, .nav-link:active{
                                
                                color:black;
                                background-color: rgba(211, 211, 211, 0.26);
                                border-radius: 10px;
                                @media only screen and (max-width: 768px){
                                    padding-left: 1.5em;
                                }
                            }
                        }
                        
                    }
                }
            }
        }
        
    }


</style>