import CardsList from "./components/CardsList";
// import Mexico from './fotos/img/Mexico.jpg';

const db = [
  {id:1,
    imagen: "Mexico",
    nombre: "Flights to Mexico",
    origen: "From New York",
    aerolinea: "By American Airlines",
    precio: "usd618",
  },
  {id: 2,
    imagen:"Sao Paulo",
    nombre: "Flights to Sao Paulo",
    origen: "From New York",
    aerolinea: "By Aeromexico",
    precio: "usd662",
  },
  {id: 3,
    imagen:"Bogota",
    nombre: "Flights to Bogota",
    origen: "From New York",
    aerolinea: "By American Airlines",
    precio: "usd490",
  },
  {id: 4,
    imagen:"Miami",
    nombre: "Flights to Miami",
    origen: "From New York",
    aerolinea: "By Delta Air Lines",
    precio: "usd170",
  },
  {id: 5,
    imagen:"Lima",
    nombre: "Flights to Lima",
    origen: "From New York",
    aerolinea: "By Copa Airlines",
    precio: "usd463",
  },
  {id: 6,
    imagen:"Santiago",
    nombre: "Flights to Santiago",
    origen: "From New York",
    aerolinea: "By Copa Airlines",
    precio: "usd938",
  }
]

function App() {
  return (
   <> 
     <h1 style={{margin: "30px"}}>Top searched flights</h1>
    <CardsList
    data = {db}/>
    </>
  );
}

export default App;
