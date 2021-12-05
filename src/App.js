/* eslint-disable no-restricted-globals */
import { Fragment, useState, useEffect, useRef} from 'react'
import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
import ThemeContext,{themes} from './components/theme-context'

// base de datos

const informacion = {
  articulos: [
    {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg'},
    {id: 2, nombre: 'iMac', precio: 1200, imagen: '/images/imac.jpeg'},
    {id: 3, nombre: 'iPad Mini', precio: 400, imagen: '/images/ipad-mini.jpg'},
    {id: 4, nombre: 'iPhone 13 Pro', precio: 1100, imagen: '/images/iphone13-pro.jpg'},
    {id: 5, nombre: 'Macbook Pro', precio: 1600, imagen: '/images/macbook-pro.png'},
    {id: 6, nombre: 'Nitendo Switch', precio: 5000, imagen: '/images/Nitendo_switch.jpg'},
    {id: 7, nombre: 'samung a21s', precio: 3000, imagen: '/images/samung-a21s-colores-00.jpg'}
  ],
  carrito: [
   
  ]
}


function App() {
  const [data, setData] = useState(informacion)
  const [theme, setTheme] = useState(themes.light);
  const buscar = useRef();

  //uso del useEffect  mando preguntar si  cada vez cuando se modifique la data si hay internet
  //en el caso que si hay mando a imprimir tenemos internet en la consola del navegador 
  // en el caso contrario mando una alerta que le diga que no hay 
  useEffect(()=>{

    if (navigator.onLine === true) {
        console.log("Tenemos intenert");
    } else {
        alert("No hay Internet");
        debugger;
    }

  },[data]);
   const cambioTema = () => theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);

  const agregarAlCarro = (producto) => {
    // 1- Verificar si el producto clickeado ya està en el carrito
    if (data.carrito.find(x => x.id === producto.id)) {
      // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
      const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }

    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
  }
  const quitarProducto = (index) => {
    let confirmar=confirm("Desea quitar este producto del carrito")
    if(confirmar === true){
    data.carrito.splice(index,1);
    setData({...data})
    }
    else
    {
      setData({...data})
    }
  }

  const buscarObjeto = (busca) => {
    if (data.articulos.find(x => x.nombre === busca)) {
      alert("Se encontro un objeto con ese nombre")
    }
    else
    {
      alert("No se encontro ningun articulo con ese nombre")
    }
   }
  
  // App > Navbar > Carro > Burbuja > Numero de productos

  // let cantidad = data.carrito.length
  let cantidad = data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
  console.log(data);
  return (
    <ThemeContext.Provider value={theme}>
    <Fragment>
      <Navbar cantidad={cantidad} productos={data.carrito} quitarProducto={quitarProducto} cambioTema={cambioTema} buscarObjeto={buscarObjeto}/>
      <Articulos agregarAlCarro={agregarAlCarro} data={data}/>
    </Fragment>
    </ThemeContext.Provider>
  );
}

export default App;
