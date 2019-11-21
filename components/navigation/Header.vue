<template>
    <div>
        <div id="home" class="header-head"></div>
        <header>
           
            <div class="background">
            <b-navbar  toggleable="lg" type="light" variant="info">
                <div class="menu">  
                    <b-navbar-brand class="logo" href="#">
                       DAVID <span>SOUZA</span>
                    </b-navbar-brand>
                   
                   
                    <b-navbar-toggle target="nav-collapse" @click="active = !active"> 
                        <font-awesome-icon :icon="['fas', 'bars']" v-show="active"/>
                        <font-awesome-icon :icon="['fa', 'times']" v-show="!active" />
                    </b-navbar-toggle>
                    
                
                </div>
                
                <b-collapse id="nav-collapse" is-nav>
                <div class="menu-in">
                    <b-navbar-nav>
                        <b-nav-item href="#home">Home</b-nav-item>
                        <b-nav-item href="#quem-sou">Quem sou eu?</b-nav-item>
                        <b-nav-item href="#conhecimento">Conhecimentos</b-nav-item>
                        <b-nav-item href="#experiencia">Tecnologias</b-nav-item>
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
/* https://codepen.io/zebt/pen/aGjOML */
export default {
    name: 'Header',
    data() {
        return {
            
            active: true
        }
    },
    methods: {
        renderizaBar(){
           $(window).scroll(function () {
               
                let scroll = $(window).scrollTop();
               /*  console.log(scroll) */
                if(scroll > 750){
                    console.log("testado")
                    $('.background').addClass("opacity1").removeClass("opacity0")
                    $(".navbar").addClass("opacity1").removeClass("opacity0")
                   /*  $(".navbar").css({background:"white"}) */
                    $(".nav-link").css({color:"black"})
                    $(".logo").css({color:"black"})
                    $(".navbar-toggler").css({color:"black"})
                    
                    
                }else
                if(scroll < 750){
                    console.log("testado2")
                    $('.background').removeClass("opacity1").addClass("opacity0")
                    $(".navbar").removeClass("opacity1").addClass("opacity0")
                    /* $(".menu").css({background:"transparent"}) */
                    $(".nav-link").css({color:"white"})
                    $(".logo").css({color:"white"})
                    $(".navbar-toggler").css({color:"white"})
                   
                }

                if(scroll >500){
                    

                }
            });	
        },

        activeMenu(){
            $(window).scroll( function (){
                let scroll = $(window).scrollTop();
                if(scroll > 1943){
                   
                }
            });
        },

       

        
    },

    mounted() {
        this.renderizaBar()
        this.activeMenu()
    },
    
}
</script>

<style lang="scss" scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
}
@import url('https://fonts.googleapis.com/css?family=Livvic:600&display=swap');


.header-head{
    background-color: rgb(25, 25, 25)!important;
	position: fixed;
	top: 0;
	opacity: 1;
	z-index:-3;
	height:900px;
   /*  filter: blur(0.8px); */
    background-blend-mode: difference;
 	background-image: linear-gradient(to top, rgba(0, 0, 0, 1), transparent),url("../../static/assets/NoteAndDesk2.jpg");
 	background-size: 110%;
    background-position: 60% 13%;
	background-repeat: no-repeat;
	width: 100%;
    margin-top: -6px;
    transition: opacity .3s ease-in-out;
	@media only screen and (max-width: 768px){
        background-blend-mode: difference;
        height: 740px;
        background-size: cover;
        background-position: 6% 0%;
	}
    
}


 header{
        z-index:4;
        position: fixed;
        top: 0px;
        width: 100%;
        @media only screen and (max-width: 768px){
            height: 68x!important;
        }

        .opacity1{
            background-color: rgb(255, 255, 255)!important; 
            box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.06);
            transition: background-color .5s ease-in-out;
            height: 50px;
            }
        .opacity0{
            transition: background-color .5s ease-in-out;    
            background-color: transparent!important;
            @media only screen and (max-width: 768px){
                background-color: black!important;
            }
        }

        .background{
            position: relative;
            z-index: 9999;
            @media only screen and (max-width: 768px){
                  background-color: black;
                        border-bottom: 3px solid #404040;
            }
           
            .navbar{
                transition: all .4s ease-in-out;
                background-color: transparent!important;
                
                @media only screen and (max-width: 768px){
                    padding: 0!important; 
                    /* height: 68x!important; */
                }
                
                .menu{
                    height: 70px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: transparent;
                    @media only screen and (max-width: 768px){
                        width: 100%;
                        height: 50px;
                      
                    }

                    .navbar-brand{
                        color: white;
                        font-size: 30px;
                        /* font-weight: bold; */
                        font-family: 'Livvic', sans-serif;
                        padding:10px 0 10px 0;
                        margin-left: 2em!important;
                        letter-spacing: 3px;
                        @media only screen and (max-width: 768px){
                            font-size: 26px;
                        }
                        .logo{
                           position:relative;
                           &::after{
                               position:absolute;
                               top:0;
                               right:0;
                               
                           }
                        }
                        @media only screen and (max-width: 768px){
                           margin-left: .3em !important;
                        }
                    }
            
                    .navbar-toggler {
                        color: white;
                        /* position: absolute;
                        right: 1em;
                        top: .5em;
                        height: 50px;
                        width: 50px; */
                        margin-right: .4em;
                        transform: scale(1.5);
                        border: none;
                        outline: none;
                        @media only screen and (max-width: 768px){
                           
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
                    
                    @media only screen and (max-width: 768px){
                        position: static;
                    }

                    .navbar-nav{
                         
                        transition: background-color .5s ease-in-out;
                       /*  background-color: #8c795ff3; */
                        border-radius: 10px;
                        @media only screen and (max-width: 768px){
                            background: #6b6b6b;
                            border-bottom: 3px solid #404040;
                            border-radius: 0px; 
                        }
                        .nav-item{
                            font-size: 19px;
                            @media only screen and (max-width: 768px){
                                line-height: 2!important;
                            }
                            .nav-link{
                                position: relative;
                                transition: color .5s ease-in-out;
                                color: white;
                                padding-right: .6rem;
                                padding-left: .6rem;
                                
                                &::after{
                                    content: "";
                                    position: absolute;
                                    top: 4px;
                                    left: 8px;
                                    right: 8px;
                                    
                                    display: block;
                                    border-bottom: 3px solid currentColor;
                                    height: 40px !important;
                                    transform: scaleX(0);
                                    transform-origin: left;
                                    transition: transform .25s ease-in;
                                    
                                } 


                                &:hover::after,  &:active::after{
                                    transform: scaleX(1);
                                   
                                }
                               
                                
                            }

                            .nav-link:hover, .nav-link:active{
                                background-color: transparent;
                                &::after{
                                    transform: scaleX(1);
                                    transform-origin: left;
                                }
                               
                               /*  @media only screen and (max-width: 768px){
                                    padding-left: 1.5em;
                                } */
                            }
                        }
                        
                    }
                }
            }
        }
        
    }


</style>