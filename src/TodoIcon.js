/**
 * Archivo que funcionara como libreria de iconos
 */

// import { ReactComponent as CheckSvg } from './check.svg';
// import { ReactComponent as DeleteSvg } from './delete.svg';
import { PiCheckBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import './styles/TodoIcon.css'


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

            {/* Le envío entre parentesis como una function
            la propiedad color de cada Icon */}
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };

