import { useState } from "react";

const useContador = (inicial) => {
  const [ contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador+1)
  }
  return [contador, incrementar]
}
const App = () => {
  const [contador, incrementar] = useContador(0);
  return(
    <div>
      Contador: {contador}
      <button onClick={ incrementar }>Incrementar</button>
    </div>
  )
}

export default useState;

//reglas de los hooks :
//no se llaman en estructuras de control (loops, condiciones)
//siempre en el nivel mas alto

//solo se llaman en 2 partes: 
//Componentes de react (Una funcion que me regresa jsx)
//custom hooks

//Recomendacion: 
//Cuando creemos un custom hook, siempre tiene que empezar con el nombre de use*nombre

// //Con class
// class App extends Component{
//   state = { contador: 0}
//   incrementar =  () =>{
//     this.setState({ contador: this.state.contador + 1})
//   }
//   render(){
//     return(
//     <div>
//       contador: {this.state.contador}
//       <button onClick={this.incrementar}>Incrementar</button>
//     </div>  
//     )
//   }
// }