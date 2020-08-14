<template>
    <div>
        <div class="header-head">
            <div class="efeito" ></div>
        </div>
        <header>
           
            <div class="background">
            <b-navbar  toggleable="lg" type="light" variant="info">
                <div class="menu">  
                    <b-navbar-brand class="logo"  href="#">
                       DAVID SOUZA
                    </b-navbar-brand>
                   
                   
                    <b-navbar-toggle target="nav-collapse" > 
                        <div @click="active = !active">
                            <font-awesome-icon :icon="['fas', 'bars']" :class="active == true? 'hamb-in': ''"/>
                            <font-awesome-icon :icon="['fa', 'times']" :class="!active == true? 'times-in': ''"/>
                        </div>
                        
                    </b-navbar-toggle>
                    
                
                </div>
                
                <b-collapse id="nav-collapse" is-nav>
                <div class="menu-in" id="teste" :class=" !active == true ? 'active-menu' : ''">
                    <b-navbar-nav>
                        <b-nav-item href="#home" @click="active=true, clickScroll()">Home</b-nav-item>
                        <b-nav-item href="#ds-quem-sou" @click="active=true">Quem sou eu?</b-nav-item>
                        <b-nav-item href="#ds-conhecimento" @click="active=true">Conhecimentos</b-nav-item>
                        <!-- <b-nav-item href="#tecnologias" @click="active=true">Tecnologias</b-nav-item>
                        <b-nav-item href="#cases" @click="active=true">Cases</b-nav-item> -->
                        <b-nav-item href="#ds-contato" @click="active=true">Contato</b-nav-item>
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
                let menuResposivo = $(".navbar-nav")
                let handleScroll = $('#ds-quem-sou').offsetTop+150;
                if(scroll > 370){
                    $('.background').addClass("opacity1").removeClass("opacity0")
                    $(".navbar").addClass("opacity1").removeClass("opacity0")
                    $(".nav-link").css({"color":"black","filter":"unset"})
                    $(".logo").css({transform: "scale(.7)"})

                    if(menuResposivo.width()< 415){
                       menuResposivo.css({background:"#d1d1d1"})
                    }
                    
                   
                }else
                if(scroll < 750){
                    $('.background').removeClass("opacity1").addClass("opacity0")
                    $(".navbar").removeClass("opacity1").addClass("opacity0")
                    $(".nav-link").css({"color":"white","filter":"drop-shadow(1px 1px 3px black)"})
                    $(".logo").css({transform: "scale(1)"})
                    if(menuResposivo.width() < 415){
                        menuResposivo.css({background:"#6b6b6b"})
                    }
                    
                   
                }
                if(menuResposivo.width() > 415){
                   menuResposivo.css({background:"transparent"}) 
                }
            });	
        },
        clickScroll(){
            $('#home').click(function(){
                event.preventDefault();
                console.log("teste")
                $('html, body').animate({scrollTop : -480},2000);
            })
        },

        clickMenu (){
            var el = document.querySelector('.x-title-content'); //get element
            var position = el.getBoundingClientRect(); //method returns properties relative to the element
            var target = window.innerWidth > 500 ? position.top-200 : position.top-100; //set value if is mobile or desktop
            $("HTML, BODY").animate({scrollTop: target}, 1000) //creating the animation
        }
        
    },

    mounted() {
        this.renderizaBar()
    },
    
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Kaushan+Script|Merriweather+Sans&display=swap');

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
    .efeito{
        width: 100%;
        height: 100%;
        background-image: url(../../static/assets/efeito.png);
    }
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
        .menu{
            .logo{
                &:after{
                   color: rgba(23, 23, 23,0.7)!important;
                }
            }
        }
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
        transition: height, background-color .4s ease-in;
        
        @media only screen and (max-width: 768px){
            background-color: black;
            border-bottom: 3px solid #404040;
        }
        
        .navbar{
            transition: height .4s ease-in-out;
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
                transition: background-color .4s ease-in-out;
                @media only screen and (max-width: 768px){
                    width: 100%;
                    height: 50px;
                    
                }

                .navbar-brand{
                    
                    font-size: 30px;
                    font-weight: bold;
                    font-family: 'Kaushan Script', Arial, Helvetica, sans-serif;
                    padding: 0px 0 7px 0;
                    margin-bottom: 9px;
                    margin-left: 2em !important;
                    letter-spacing: 3px;
                    @media only screen and (max-width: 768px){
                        font-size: 26px;
                        margin-left: -.5em!important;
                    }
                    
                }
                .logo{
                    color: #ff6e19;
                    position: relative;
                    border-bottom: 1px solid rgba(128,128,126,0.51961);
                    transition: transform .3s ease-in;
                    @media only screen and (max-width: 768px){
                        transform: scale(.7)!important;
                    }
                    &::after{
                        content: 'FrontEnd Dev.';
                        font-family: none;
                        font-size: 1rem;
                        position: absolute;
                        bottom: -12px;
                        right: 50%;
                        transform: translate(50%);
                        color: #a9a7a7b3;;
                    }
                }
                
                
        
                .navbar-toggler {
                    color: #ff6e19;
                    /* position: absolute;
                    right: 1em;
                    top: .5em;
                    height: 50px;
                    width: 50px; */
                    margin-right: .4em;
                    transform: scale(1.5);
                    border: none;
                    outline: none;
                    overflow: hidden;
                    svg{
                        
                        &:first-child{
                            position: relative;
                            top: 4rem;
                            left: 50%;
                            transform:translateX(-50%);
                            transition: .8s top cubic-bezier(0.075, 0.82, 0.165, 1),  .8s opacity cubic-bezier(0.075, 0.82, 0.165, 1);
                            opacity: 0;
                           &.hamb-in{
                                opacity: 1;
                                animation: hamburguer;
                                transition: cubic-bezier(0.075, 0.82, 0.165, 1);
                                animation-duration: .8s;
                                animation-iteration-count: 1;
                                animation-fill-mode:forwards;
                           }
                            @keyframes hamburguer {
                                0% { top:0;}
                                50% { top:0.1rem;}
                                100% { top:0;}
                            }
                        }
                        &:last-child{
                            position: relative;
                            top: -4rem;
                            right: 50%;
                            transform:translateX(50%);
                            transition: .8s top cubic-bezier(0.075, 0.82, 0.165, 1), .8s opacity cubic-bezier(0.075, 0.82, 0.165, 1);
                            opacity: 0;
                            &.times-in{
                                opacity: 1;
                                animation: times;
                                transition: cubic-bezier(0.075, 0.82, 0.165, 1);
                                animation-duration: .8s;
                                animation-iteration-count: 1;
                                animation-fill-mode:forwards;
                            }
                            @keyframes times {
                                0% { top:0;}
                                50% { top:-0.1rem;}
                                100% { top:0;}
                            }
                        }
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
                    visibility: hidden;
                    right: unset;
                    width: 100vw;
                    position:relative;
                        &:after{
                            content:'';
                            position: absolute;
                            background:rgba(25, 25, 25,0.5);
                        } 
                    

                    &.active-menu{
                        visibility: visible;
                    }
                }

                .navbar-nav{
                        
                    transition: background-color .5s ease-in-out;
                    /*  background-color: #8c795ff3; */
                    border-radius: 10px;
                    @media only screen and (max-width: 768px){
                        background: #6b6b6b;
                        border-bottom: 3px solid #404040;
                        border-radius: 0px;
                        padding-bottom: 0px;
                        /* position:relative;
                        &:after{
                            content: '';
                            top: 58px;
                            position: absolute;
                            background: rgba(0, 0, 0, 0.7);
                            height: 100vh;
                            width: 110vw;
                            z-index: -2;
                            //filter: blur(34px);
                        }  */
                        
                    }
                    .nav-item{
                        font-size: 19px;
                        @media only screen and (max-width: 768px){
                            
                            line-height: 3!important;
                            box-shadow: inset 0px 3px 11px 0px rgba(0, 0, 0, 0.65), 0px 3px 3px 0px rgba(0, 0, 0, 0.65);
                            

                        }
                        .nav-link{
                            position: relative;
                            transition: color .5s ease-in-out;
                            color: white;
                            padding-right: .6rem;
                            padding-left: .6rem;
                            @media only screen and (max-width: 768px){
                                filter:drop-shadow(1px 1px 3px black);
                                padding-left: 1.3rem;
                            }
                            
                            &::after{
                                content: "";
                                position: absolute;
                                top: 25%;
                                left: 10px;
                                right: 8px;
                                color: #ff6e19;
                                display: block;
                                border-bottom: 3px solid currentColor;
                                height: 40px !important;
                                transform: scaleX(0);
                                transform-origin: left;
                                transition: transform .25s ease-in;
                                @media only screen and (max-width: 768px){
                                    left: 21px;
                                    right: 21px;
                                }
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
                        }
                    }
                    
                }
            }
        }
    }
        
    }


</style>