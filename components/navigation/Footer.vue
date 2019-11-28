<template>
<!-- https://github.com/FortAwesome/vue-fontawesome#nuxtjs -->
    <footer id="footer">
        <b-container fluid>
            <b-container>
                <div class="linkFooter">
                    <a class="linkedin" href="https://www.linkedin.com/in/dav1dsouza/"
                        data-aos="fade"
                        data-aos-duration="2600">
                        <font-awesome-icon :icon="['fab', 'linkedin']"/>
                    </a>
                    <a class="github" href="https://github.com/DavidSouza-Dev"
                        data-aos="fade"
                        data-aos-duration="2400">
                        <font-awesome-icon :icon="['fab', 'github']"/>
                    </a>
                    <a  class="instagram" href="https://www.instagram.com/dav1dsouza"
                        data-aos="fade"
                        data-aos-duration="2000">
                        <font-awesome-icon :icon="['fab', 'instagram']"/>
                    </a>
                    <a class="twitter" href="https://twitter.com/DaviidRPS"
                        data-aos="fade"
                        data-aos-duration="1600">
                        <font-awesome-icon :icon="['fab', 'twitter-square']"/>
                    </a>
                    <a class="wpp" href="https://api.whatsapp.com/send?phone=5511994886041"
                        data-aos="fade"
                        data-aos-duration="1200">
                        <font-awesome-icon :icon="['fab', 'whatsapp']"/>
                    </a>
                    <a class="mail" href="mailto:davidrs.souza@gmail.com"
                        data-aos="fade"
                        data-aos-duration="800">
                        <font-awesome-icon :icon="['fa', 'envelope']"/>
                    </a> 
                    <!-- <a href=""><font-awesome-icon :icon="['fas', 'coffee']"/></a> -->
                </div>
                
               
                <div class="copyright">David Souza © 2019 Todos os direitos reservados</div>

            </b-container>
        </b-container>
        <div class="credits">Developed By <span>David Souza</span></div>
    </footer>

</template>

<script>

export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');

    #footer {
        position: relative;
        background: #2d2d2d;
        .credits{
            position:absolute;
            bottom:2%;
            right:5%;
            font-size: 10px;
            color:white;
            opacity: .4;
            span{
                color: #ff6e19;
            }
        }
        .container-fluid{
		    height:200px;
		    .container{
                color: white;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                height: 100%;
                
                .linkFooter{
                    width: 300px;
                    font-size: 32px;
                    display: inherit;
                    justify-content: space-evenly;
                    align-items: center;
                    @media only screen and (max-width: 768px){
                        font-size: 31px;
                    }
                    @media only screen and (max-width: 375px){
                        font-size: 28px;
                    }
                    a{
                        cursor: pointer;
                        color: white;
                        height: 25px;
                        width: 25px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .linkedin{
                        &:hover, &:active{
                            background: white;
                            color:#0073b2; 
                            @media only screen and (max-width: 375px){
                                height: 22px;
                                width: 24px;
                            }
                            @media only screen and (max-width: 320px){
                                width: 25px;
                            }
                        }
                    }
                    .github{
                        &:hover{
                            height: 27px;
                            border-radius: 35%;
                            background: white;
                            color: #571657;
                            @media only screen and (max-width: 375px){
                               height: 22px;
                               width: 24.3px; 
                            }
                            @media only screen and (max-width: 320px){
                                width: 25px;
                            }
                        }
                    }
                    .instagram{
                        &:hover{
                            height: 27px;
                            border-radius: 35%;
                            background: white;
                            color: #ff697b;
                            @media only screen and (max-width: 375px){
                               height: 23px;
                                width: 24.3px; 
                            }
                        }
                    }
                    .twitter{
                        &:hover{
                            height: 26px;
                            border-radius: 35%;
                            background: white;
                            color: #1da1f2;
                            @media only screen and (max-width: 375px){
                               height: 23px;
                                width: 24.3px;  
                            }
                        }
                    }
                    .wpp{
                        color: white;
                        height: 28px;
                        width: 29px;
                        &:hover{
                            border-radius: 18%;
                            background: white;
                            color: #14ca2a;
                        }
                    }
                    .mail{
                        color: white;
                        &:hover{
                            color: firebrick;
                        }
                    }
                }
               
                .copyright{
                    
                    font-size: 0.7rem;
                    @media only screen and (max-width: 320px){
                        font-size: .6rem;
                    }
                    
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        top: -11px;
                        /* bottom: 0px; */
                        
                        right: 0;
                        width: 350px;
                        height: 2px;
                        transform: translateX(14%);
                        background-color: #ffffff66 !important;

                    }
                }
            }
	    }
    }
   

</style>