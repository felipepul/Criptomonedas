import PropTypes from 'prop-types';
import styled from "@emotion/styled"


const Contenedor = styled.div`
 color:#FFF;
 font-family:'Lato',sans-serif;
 display:flex;
 align-items:center;
 gap:1rem;
 margin-top:30px
  
`

const Imagen = styled.img`
  display:block;
  width:120px;
`

const Texto = styled.p`
font-size:18px;
  span {
    font-size:700;
  }
  
`

const Precio = styled.p`
  font-size:25px;
  span {
    font-size:700;
  }
  
`

const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultado
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL} `}alt ="imagencripto"/>
      <div>
        <Precio> El Precio es de : <span>{PRICE}</span></Precio>
        <Texto> El Precio mas alto del dia : <span>{HIGHDAY}</span></Texto>
        <Texto> El Precio mas bajo del dia : <span>{LOWDAY}</span></Texto>
        <Texto> Variacion de las ultimas 24 horas : <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto> Ultima actualizacion : <span>{LASTUPDATE}</span></Texto>
      </div>
    
    </Contenedor>
  )
}
Resultado.propTypes = {
  resultado: PropTypes.shape({
    PRICE: PropTypes.number,
    HIGHDAY: PropTypes.string,
    LOWDAY: PropTypes.string,
    CHANGEPCT24HOUR: PropTypes.number,
    IMAGEURL: PropTypes.string,
    LASTUPDATE: PropTypes.string,
  }).isRequired,
};

export default Resultado


