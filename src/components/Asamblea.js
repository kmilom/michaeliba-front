import React from "react";
import { useParams } from "react-router-dom";

export default function Asamblea (){
    const params  = useParams();
    console.log(params)
    return(
        <h1>{params.id}</h1>
    );
}