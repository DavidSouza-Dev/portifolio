export const state = () => ({
    teste:null,
    cv: {title:"Baixar Currículo", loc:require('../static/files/CV Front-End David Souza.pdf') },
    cvss: 'teste2234',
    historia_1:'Nascido em Belém do Pará, tenho 35 anos, moro em São Paulo. Casado com a Caroline e pai da Maya',
    historia_2: 'Formado em Ciência da Computação, atuo desde o inicio da minha carreira como profissional em TI. Recentemente me redescobri na área e hoje trabalho como Front-End Developer. Estudo muito as tecnologias relacionadas e estou muito feliz em trilhar este caminho.',
    paw_img:require('../static/assets/animal-paw-print.png') ,
    perfil:{
        Nacionalidade:'Brasileiro',
        'Estado Civil': 'Casado',
        Perfil:'Desenvolvedor Front-End',
        Formação: 'Bacharel em Ciência da Computação'
    },
    habilidades: [
        {habilidade:'Vanilla'}, 
        {habilidade:'JQuery'}, 
        {habilidade:'KnockoutJS'},
        {habilidade:'Vue / Vuex'},
        {habilidade:'Reactjs'},
        {habilidade:'API REST'},
        {habilidade:'Plataforma Oracle Commerce Cloud'}, 
        {habilidade:'GIT'}, 
        {habilidade:'Task Runner Gulp'}, 
        {habilidade:'Pré-processador CSS - SASS/LESS'},
        {habilidade:'Padrão de Arquitetura CSS - BEM'},
    ]
 
})

export const getters = {
    GET_TESTE: state => {
        return state.teste
    },
    GET_CV: state => {
        return state.cv
    },
    GET_CVS: state => {
        return state.cvs
    },
    GET_HISTORIA1: state => {
        return state.historia_1
    },
    GET_HISTORIA2: state => {
        return state.historia_2
    },
    GET_PAW_IMG: state => {
        return state.paw_img
    },
    GET_HABILIDADES: state => {
        return state.habilidades
    },
    GET_PERFIL: state => {
        return state.perfil
    },
}