<template>
<!-- https://github.com/FortAwesome/vue-fontawesome#nuxtjs -->
    <footer id="footer">
        <b-container fluid>
            <b-container>
                <div class="linkFooter">
                    <a class="linkedin" href="https://www.linkedin.com/in/dav1dsouza/">
                        <font-awesome-icon :icon="['fab', 'linkedin']"/></a>
                    <a class="github" href="https://github.com/DaviiidSouza">
                        <font-awesome-icon :icon="['fab', 'github']"/></a>
                    <a  class="instagram" href="https://www.instagram.com/dav1dsouza">
                        <font-awesome-icon :icon="['fab', 'instagram']"/></a>
                    <a class="twitter" href="https://twitter.com/DaviidRPS">
                        <font-awesome-icon :icon="['fab', 'twitter-square']"/></a>
                    <a class="wpp" href="https://api.whatsapp.com/send?phone=5511994886041"><font-awesome-icon :icon="['fab', 'whatsapp']"/></a>
                    <a class="mail" href="mailto:davidrs.souza@gmail.com"><font-awesome-icon :icon="['fa', 'envelope']"/></a> 
                    <!-- <a href=""><font-awesome-icon :icon="['fas', 'coffee']"/></a> -->
                </div>
                
               
                <div class="copyright">David Souza © 2019 Todos os direitos reservados</div>
            </b-container>
        </b-container>
    </footer>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, dom } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faStroopwafel, faDragon } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');

    #footer {
        background: #2d2d2d;
        .container-fluid{
		    height:120px;
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
                    a{
                        color: white;
                        height: 25px;
                        width: 25px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .linkedin{
                        &:hover{
                            background: white;
                            color:#0073b2; 
                        }
                    }
                    .github{
                        &:hover{
                            height: 27px;
                            border-radius: 35%;
                            background: white;
                            color: #571657;
                        }
                    }
                    .instagram{
                        &:hover{
                            height: 26px;
                            border-radius: 35%;
                            background: white;
                            color: #ff697b
                        }
                    }
                    .twitter{
                        &:hover{
                            height: 26px;
                            border-radius: 35%;
                            background: white;
                            color: #1da1f2;
                        }
                    }
                    .wpp{
                        color: white;
                        height: 28px;
                        width: 30px;
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
                    
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        top: -11px;
                        /* bottom: 0px; */
                        
                        /* right: 12px; */
                        width: 350px;
                        height: 2px;
                        transform: translateX(-86%);
                        background-color: #ffffff66 !important;

                    }
                }
            }
	    }
    }
   

</style>