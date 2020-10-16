export const state = () => ({
    teste:null,
    cv: {title:"Baixar Currículo", loc:require('../static/files/CV Front-End David Souza.pdf') }
})

export const getters = {
    GET_TESTE: state => {
        return state.teste
    },
    GET_CV: state => {
        return state.cv
    },
}