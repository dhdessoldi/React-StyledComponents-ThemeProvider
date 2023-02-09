import React from "react"
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import { Icone, IconeTema } from "./UI"

export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="restaurante" />,
        Utilidades: <IconeTema src={utilidades} alt="utilidades" />,
        Saude: <IconeTema src={saude} alt="Saude" />,
        Transporte: <IconeTema src={transporte} alt="Transporte" />,
        default: <IconeTema src={outros} alt="Outro" />
    }

    return Images[type] || Images.default;
}