<template>
    <b-container >
        <div class="historia">
            <div class="foto-historia" alt=""
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                
            >
            </div>
            <p 
            data-aos="fade-right"
            data-aos-duration="1000" 
            data-aos-easing="ease-in-out" 
            class="texto-historia">
                {{historia_1}} 
                <img class="pata-dog" :src="paw_img" ></p>
                
            <p 
            class="texto-historia"
            data-aos="fade-right"
            data-aos-duration="1200" 
            data-aos-easing="ease-in-out" 
            >
                {{historia_2}}
            </p>
        </div>
    </b-container>	
</template>

<script>

import { mapGetters } from 'vuex'
import $ from 'jquery'

export default {
    name: 'WhoIam',
    computed:{
        ...mapGetters({
            historia_1: 'store/GET_HISTORIA1',
            historia_2: 'store/GET_HISTORIA2',
            paw_img: 'store/GET_PAW_IMG'
        }),
    }
    

}
</script>

<style lang="scss" scoped>
$cor-padrao: black;
.container{
    background-color: transparent!important;
    color: white!important;
    font-size: 19px!important;
    
}
.historia{
    margin:10px;
    @media only screen and (max-width: 375px){
    margin: 0;
    }
    p:nth-child(3){
        margin-top:0px!important;
    }
    .foto-historia{
        filter: grayscale(1);
        margin-top: 40px;
        background-image: url("../../../static/assets/foto.jpg");
        background-size: 100%;
        background-position: 30% 40%;
        transform: rotate(10deg) scale(1.3); 
        background-repeat: no-repeat;
        border-radius: 50%;
        height: 200px;
        width: 200px;
        margin-left: auto;
        margin-right: auto;
        @media only screen and (max-width: 768px){
            transform: rotate(10deg) scale(1.2);
            margin-top: 0;
        }
        @media only screen and (max-width: 375px){
            margin-top: 10px;
        }
    }
    .texto-historia{
        margin-top: 60px;
        font-weight: 100;
        text-align: justify;
        @media only screen and (max-width: 768px){
            font-size: 18px;
            text-align: center;
            
        }
        @media only screen and (max-width: 325px){
            font-size: 17px;
            margin-top: 25px;
        }
    }
    .pata-dog{
        filter: invert(1);
        opacity: .7;
        background-size: 10%;
        background-repeat: no-repeat;
        
        height: 13px;
        width: 13px;
        margin-bottom: 3px;
    }
}
</style>