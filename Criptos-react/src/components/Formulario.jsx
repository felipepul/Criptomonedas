// import PropTypes  from "react";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";


const InputSubmit = styled.input`
    background-color: #9497FF;
    border:none;
    width:100%;
    padding:10px;
    color:#FFF;
    font-weight:700;
    text-transform:uppercase;
    font-size:20px;
    border-radius:5px;
    transition:background-color .3s ease;
    margin-top:20px;
    &:hover{
      background-color: #7a7dfe;
      cursor:pointer;
    }
`
const Formulario = ({setMonedas}) => {
    const [criptos , setCriptos] = useState([])
    const [error,setError ] = useState(false)
    const [moneda,SelectMonedas] = useSelectMonedas('Elige tu Moneda',monedas)
    const [criptomoneda,SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda',criptos)

    useEffect(() => {
      const consultarApi = async()=>{
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        resultado.Data
        const arrayCriptos =  resultado.Data.map( cripto => {
          const objeto = {
            id: cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName
          }
          return objeto
        })
        // console.log(arrayCriptos)
        setCriptos(arrayCriptos)
      }
      consultarApi();
    }, [])

    const  handleSubmit = e =>{
        e.preventDefault()

        if([moneda,criptomoneda].includes('')){
          setError(true)
          // console.log('Error')
          return
        }
        setError(false)
        setMonedas({
          moneda,
          criptomoneda
        })
    }
   
  return (
    <>
    {error && <Error>Todos los campos son Obligatorios</Error>}
    <form onSubmit={handleSubmit}>
        <SelectMonedas/>
        <SelectCriptomoneda/>
      
        <InputSubmit type="submit" value="cotizar"/>
    </form>
    </>
  )
}

Formulario.propTypes = {
  setMonedas: PropTypes.func.isRequired
};



export default Formulario
