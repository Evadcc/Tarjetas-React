import { hover } from "@testing-library/user-event/dist/hover"
import Btn from "./Btn"




const Card = (props) => {
  return (

    <figure style={cardStyles}>
        <img src= {require(`../fotos/img/${props.card.imagen}.jpg`)} alt="Mexico" style={imgStyles}/>
        <figcaption>
          <div className="lugar" style={lugarStyle}>
            <h4>FLIGHT</h4>
            <h3 style= {{color:"black",}}>{props.card.nombre}</h3>
            <h4>{props.card.origen}</h4>
            <h4>{props.card.aerolinea}</h4>
            <Btn/>
          </div>
          <div className="precio" style={precioStyle}>
            <p>Price round trip from</p>
            <h4>{props.card.precio}</h4>
          </div>
        </figcaption>
    </figure>
  )
}

const cardStyles = { 
  border: "2px solid rgb(212, 212, 212)",
  borderRadius:"5px",
  backgroundColor:"white",
  display: "flex",
  flexDirection: "column",
  width: "300px",
  heigth:"100px", 
}

const precioStyle ={
  borderTop: "2px solid rgb(212, 212, 212)",
  borderRadius:"0px 0px 5px 5px",
  textAling: "center",
  margin: "20px",
}

const lugarStyle = {
  color:"rgb(97, 106, 107)",
  margin: "20px",
}

const imgStyles = {  
  borderRadius:"5px 5px 0px 0px",
  heigth:"100px",
  width: "300px",
  objectFit:"cover",
}

export default Card