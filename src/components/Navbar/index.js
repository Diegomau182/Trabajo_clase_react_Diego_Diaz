import {useRef} from 'react'
import { Carro } from '../Carro'
import styles from './estilos'

export const Navbar = ({cantidad, productos, quitarProducto,cambioTema, buscarObjeto}) => {
        const buscar = useRef();
        const enviar =()=>{
            buscarObjeto(buscar.current.value);
        }
    return (
        <nav style={styles.nav}>
            <p>Proyecto React</p>
            <button onClick={cambioTema}>Cambiar de tema</button>
            <input ref={buscar} type="txt"/>
            <button onClick={enviar}>buscar</button>
            <Carro cantidad={cantidad} productos={productos} quitarProducto={quitarProducto} />
        </nav>
    )
}