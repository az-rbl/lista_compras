import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () =>{
  const [art, setArt]=useState("");
  const [articulos, setArticulo]=useState("");
  
const onChange =(e) =>{
    e.preventDefault();
    console.log(art);
    setArt(e.target.value);
  }



const onSubmit =(e) =>{
  e.preventDefault();
  console.log(articulos);
  setArticulo(articulos + " " +art);
}
return(
  <>
  <h1>Lista de compras</h1>
  <form onSubmit={onSubmit}>
  <label htmlFor='articulo'>Artículo: </label>
  <input type="text" name="articulo" id ="articulo" value={art} onChange={onChange}></input>
  <button>Guardar</button>
  </form>
  <p>{articulos}
  </p>
</>
);
};

root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

