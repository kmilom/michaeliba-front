import React, { useReducer } from "react"
import Reducer from "./Reducer"
import GlobalContext from "./GlobalContext"
import axios from "axios"

const GlobalState = (props) => {
    const initialState = {
        preguntas: [],
        asambleas: [],
        pregunta: null
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    const getPreguntas = async () => {
        const res = await axios.get('http://localhost:8000/questions/')
        dispatch({
            type: 'GET_PREGUNTAS',
            payload: res.data
        })
    }
    
    const getPregunta = async (id) => {
        const res = await axios.get('http://localhost:8000/questions/'+ id)
        dispatch({
            type: 'GET_PREGUNTA',
            payload: res.data
        })
    }

    const getAsambleas = async () => {
        const res = await axios.get('http://localhost:8000/assamblies/')
        dispatch({
            type: 'GET_ASAMBLEAS',
            payload: res.data
        })
    }

    const deletePregunta = async (id) => {
        dispatch({
            type: 'DELETE_PREGUNTA',
            payload: axios.delete('http://localhost:8000/questions/'+ id)
        })
    }

    return(
        <GlobalContext.Provider value={{
            preguntas: state.preguntas,
            asambleas: state.asambleas,
            pregunta: state.pregunta,
            getPregunta,
            getAsambleas,
            getPreguntas,
            deletePregunta
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState