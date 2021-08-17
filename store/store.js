export const state = () => ({
    teste:null,
    cv: {title:"Baixar Currículo", loc:require('../static/files/CV Front-End David Souza.pdf') },
    cvss: 'teste2234',
    historia_1:'Nascido em Belém do Pará, tenho 36 anos, moro em São Paulo. Casado com a Caroline e pai da Maya',
    historia_2: 'Formado em Ciência da Computação, atuo desde o inicio da minha carreira como profissional em TI. Recentemente me redescobri na área e hoje trabalho como Fullstack Developer. Estudo muito as tecnologias relacionadas e estou muito feliz em trilhar este caminho.',
    paw_img:require('../static/assets/animal-paw-print.png'),
    perfil:{
        Nacionalidade:'Brasileiro',
        'Estado Civil': 'Casado',
        Perfil:'Desenvolvedor Full stack',
        Formação: 'Bacharel em Ciência da Computação'
    },
    habilidades: [],
    contatos: {
        'E-mail':{info:'davidrs.souza@gmail.com',icon:"['fa', 'envelope']"},
        'Telefone':{info:'(11) 994886041', icon:"['fa', 'mobile-alt']"},
        'Skype':{info:'daviiid.souza', icon:"['fab', 'skype']"},
    }
 
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
    GET_CONTATOS: state => {
        return state.contatos
    },
}

export const mutations = {
    lista_habilidades: state => {
        state.habilidades = [
            {habilidade:'Vanilla'}, 
            {habilidade:'Nodejs'},
            {habilidade:'Vue / Vuex'},
            {habilidade:'Reactjs'},
            {habilidade:'Graphql'},
            {habilidade:'Plataforma Oracle Commerce Cloud'}, 
            {habilidade:'Vtex Certified'}, 
            {habilidade:'GIT'}, 
            {habilidade:'Padrão de Arquitetura CSS - BEM'},
        ]
    }
}