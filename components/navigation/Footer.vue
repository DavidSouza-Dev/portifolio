<template>
<!-- https://github.com/FortAwesome/vue-fontawesome#nuxtjs -->
    <footer id="footer">
        <b-container fluid>
            <b-container>
                <div class="linkFooter">
                    <a class="linkedin" href=""><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
                    <a class="github" href=""><font-awesome-icon :icon="['fab', 'github']"/></a>
                    <a  class="instagram" href=""><font-awesome-icon :icon="['fab', 'instagram']"/></a>
                    <a class="twitter" href=""><font-awesome-icon :icon="['fab', 'twitter-square']"/></a>
                    <a class="wpp" href=""><font-awesome-icon :icon="['fab', 'whatsapp']"/></a>
                    <a href=""><font-awesome-icon :icon="['fa', 'envelope']"/></a> 
                    <a href=""><font-awesome-icon :icon="['fas', 'coffee']"/></a>
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
		    height:150px;
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
                            height: 26px;
                            border-radius: 35%;
                            background: white;
                            color: #411041;
                        }
                    }
                    .instagram{
                        &:hover{
                            color: #a04a4a
                        }
                    }
                    .twitter{
                        &:hover{
                            color: #9ae4e8;
                        }
                    }
                    .wpp{
                        &:hover{
                            color:rgb(0, 128, 96)
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