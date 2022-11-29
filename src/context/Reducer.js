
export default function Reducer(state, action){
    const { payload, type } = action

    switch(type){
        case 'GET_PREGUNTAS':
            return{
                ...state,
                preguntas: payload
            }
        case 'GET_PREGUNTA':
            return{
                ...state,
                pregunta: payload
            }
        case 'GET_ASAMBLEAS':
            return{
                ...state,
                asambleas: payload
            }
        case 'DELETE_PREGUNTA':
            return{
                ...state,
                asambleas: payload
            }
        default:
            return state;
    }

}