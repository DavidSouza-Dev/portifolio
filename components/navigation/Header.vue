<template>
    <div>
        <div class="header-head"></div>
        <header>
           
            <div class="background">
                <div class="foto-titulo">
                    <div class="foto"> </div>
                    <div class="titulo">
                        <p>David Souza</p>
                        <p>Desenvolvedor Front-End</p>
                    </div>
                </div>
            <b-navbar toggleable="lg" type="light" variant="info">
                <div class="menu">  
                    <b-navbar-brand href="#">
                        <img src="../../static/assets/img/logo.jpg" height="90%" alt="">
                    </b-navbar-brand>
                    <font-awesome-icon :icon="['fas', 'fa-bars']"/>
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
import { mapGetters } from 'vuex'

export default {
    name: 'Header',
    data() {
        return {
            searchValue: ''
        }
    },
    
}
</script>

<style lang="scss" scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
}

@import url('https://fonts.googleapis.com/css?family=Acme&display=swap');


.header-head{
    background-color: rgb(25, 25, 25)!important;
	position: fixed;
	top: 0;
	opacity: 1;
	z-index:-3;
	height:800px;
 	background-image: linear-gradient(to top, rgba(0, 0, 0, 1), transparent),url("../../static/assets/img/NoteAndDesk2.jpg");
 	background-size: 100%;
	background-position: -20% 30%;
	background-repeat: no-repeat;
	width: 100%;
    margin-top: -6px;
	@media only screen and (max-width: 768px){
		background-position: -20% 0%;
	}
    
}


 header{
        
        position: fixed;
        top: 0px;
        width: 100%;
        @media only screen and (max-width: 768px){
            height: 68x!important;
        }

        .gray-mode{
            background-color: rgba(128, 128, 128, 0.418)!important;
            
            height: 60px;
            transition: all .9s;
        }
        .background{
            position: relative;
            z-index: 9999;
            @media only screen and (max-width: 768px){
                height:70px;
                background-position: 20% 0%;
                height: 68x;    
            }
            .foto-titulo{
                filter: drop-shadow(2px 4px 6px black);
                position: absolute;
                top: 313px;
                left: 35%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .foto{
                    filter: drop-shadow(2px 4px 6px black);
                    background-position: -20%;
                    background-repeat: no-repeat;
                    width: 205px;
                    height: 204px;
                    z-index:-2;
                    
                    background-image:  url(/_nuxt/static/assets/img/foto.jpg);
                    background-size: 100%;
                    border-radius: 121px;
                    border: 4px solid #42311b;
                
                }
                .titulo{
                    font-family: 'Acme', sans-serif!important;  
                    text-align: center;
                    color: white;
                    font-weight: 500;
                    font-size: 40px;
                }
            }
            

            .navbar{
                opacity: 1;
                background:transparent!important;
                @media only screen and (max-width: 768px){
                    padding: 0!important; 
                    height: 68x!important;
                }
                
                .menu{
                    height: 70px;
                    display: flex;
                    justify-content: space-between;
                    @media only screen and (max-width: 768px){
                        width: 100%;
                    }

                    .navbar-brand{
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
                        
                        background: #8c795ff3;
                        border-radius: 10px;
                        @media only screen and (max-width: 768px){
                            background: #8c795ff3;
                            border-radius: 0px; 
                        }
                        .nav-link{
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


</style>