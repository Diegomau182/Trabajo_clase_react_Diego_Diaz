import {useContext} from "react";
import { Articulo } from "../Articulo";
import style from "./estilos";
import ThemeContext from "../theme-context"
export const Articulos = (props) => {
    const theme = useContext(ThemeContext)
    const productos = props.data.articulos
    const agregarAlCarro = props.agregarAlCarro
    return (
            <div style={theme}>
            <div style={style.div}>
                {
                    productos.map(prod => 
                        // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                        <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                    )
                }
            </div>
            </div>
    )
}
