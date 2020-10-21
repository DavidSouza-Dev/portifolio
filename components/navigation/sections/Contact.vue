<template>
    <Fragment>
    <h1 data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"

    >
        Entre em Contato ; )

    </h1>
    <b-container >
        
        <div class="card" 
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
        >
            <!-- <p><span>Entre em contato</span> ;)</p> -->
            <!-- <p  :class="key" v-for="(item,key) in contatos" :key="key">
                <font-awesome-icon :icon="item.icon"/>
                {{key}}: {{item.info}}
            </p> -->
            <p  class="E-mail">
                <font-awesome-icon :icon="['fa', 'envelope']"/>  
                E-mail: davidrs.souza@gmail.com
            </p>
            <p  class="Telefone">
                <font-awesome-icon :icon="['fa', 'mobile-alt']"/>  
                Telefone: (11) 994886041
            </p>				
            <p  class="Skype">
                <font-awesome-icon :icon="['fab', 'skype']"/>  
                Skype: daviiid.souza
            </p>
            <p  class="cv">
                <font-awesome-icon :icon="['fa', 'file-invoice']"/>  
                <a :href="cv.loc"  target="_blank"	>{{cv.title}}</a>
            </p>
        </div>				
    </b-container>
    </Fragment>
</template>

<script>

import $ from 'jquery'

import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
import { Fragment } from 'vue-fragment'

export default {
    name: 'Contact',
    components: { Fragment },
    data() {
		return {
			
        }
			
    },
    computed: {
		...mapGetters({
            cv: 'store/GET_CV'
        }),
        ...mapGetters({
            contatos: 'store/GET_CONTATOS'
        })
    },
    mounted(){
        console.log(this.cv);
    }
}
</script>

<style lang="scss" scoped>
$cor-padrao: black;
h1{
    position: relative;
    color: white;
    font-weight: bold!important;
    letter-spacing: 2px;
    font-size: 35px;
    font-weight: 500!important;
    text-align: center;
    @media only screen and (max-width: 768px){
        font-size: 30px;
        width: 100vw;
    }
    @media only screen and (max-width: 320px){
        letter-spacing: 0px;
        font-size: 27px
    }
    &::before{
        content: "";
        position: absolute;
        bottom: -22px;
        right: 50%;
        transform: translateX(50%);
        width: 60%;
        height: 4px;
        background-color: #ff6e19;
       
    }
}
.container{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #424242;
    @media only screen and (max-width: 768px){
        width:85vw;
    }
    .card{
        height: 220px;
        position: relative;
        color: white;
        font-weight: 700;
        width: 700px;
        background-color: #424242;
        padding: 10px 10px 10px 30px;
        justify-content: center;
        margin-top: 3rem;
        @media only screen and (max-width: 768px){
            padding: 10px 10px 10px 15px;
            font-size: 12px;
             margin-top: 2rem;	
        }
        
        &::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            opacity: .2;
            background-image: url("../../../static/assets/pngguru.com-id-nzsxy.png");
            background-size: 68%;
            background-position: 123% 0;
            background-repeat: no-repeat;
            filter: grayscale(1);
            box-shadow: 0px 0px 3px 1px;

        }
        .E-mail{
            z-index: 2;
            position: relative;
            display: inherit;
            svg{
                margin-right: 25px;
                font-size: 23px;
            }
            
        }
        .Telefone{
            z-index: 2;
            position: relative;
            display: inherit;
            svg{
                margin-right: 30px;
                font-size: 23px;
                margin-left: 4px;
            }
        }
        .Skype{
            z-index: 2;
            position: relative;
            display: inherit;
            svg{
                margin-right: 28px;
                margin-left: 2px;
                font-size: 23px;
            }
        }
        .cv{
            z-index: 2;
            position: relative;
            display: inherit;
            &:hover, &:active{
                color:#ff6e19;
                a{
                    color:#ff6e19;
                }
            }
            svg{
                margin-right: 30px;
                margin-left: 4px;
                font-size: 23px;
            }
            a{
                text-decoration: none;
                color: white;
                
            }
        }
    }	
    
}
</style>