import { useEffect,useState } from "react";
import './Home.css'
import { Formulario } from "../Formulario/Formulario";



export function Home(){

    return(
        <>
            <div className="banner">
                <div className="row">
                    <div className="col-12 col-m-4 text-white fw-bold">
                        <h3>Reserva con nosotros</h3>
                        <hr />
                        <Formulario></Formulario>
                    </div>
                </div>
            </div>
        </>
    )

}