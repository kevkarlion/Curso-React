/**
 * Archivo que funcionara como libreria de iconos
 */

// import { ReactComponent as CheckSvg } from './check.svg';
// import { ReactComponent as DeleteSvg } from './delete.svg';
import { PiCheckBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import './TodoIcon.css'

const iconTypes = {
    /*
    Le envío la propiedad color 
    como un parametro de una variable
    y luego le aplico esa propiedad a fill
     */
    'check': (color)=> <PiCheckBold className="Icon-svg" fill={color}/>,
    'delete': (color)=> <IoClose className="Icon-svg" fill={color}/>
}

function TodoIcon({ type, color }) {
    return(
        <span className={`Icon Icon-${ type }`} >

            {/* Es una forma de manejar condicionales de manera 
			elegante y comoda. Lo que hice fue generar un objeto,
			donde por parametro que recibe la function (type), le indico que
			sub-objeto quiero renderizar.*/}
            {/* Le envío entre parentesis como una function
            la propiedad color de cada Icon */}
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };

