import "./Colaborador.css"
import { TiDelete } from "react-icons/ti";
import { FaHeart,FaRegHeart } from "react-icons/fa";

const Colaborador = (props) => {
    // Accede al nombre del colaborador desde la prop "datos"
    const { nombre, puesto, foto, equipo, id, fav } = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props

    //ternario: condicion ? verdadero = : falso === vas a tener la condición. Y en caso de que la condición sea verdadera, lo que venga después de este símbolo de interrogación es lo que va a mostrar, el caso de verdadero.
    // En caso de que sea falso, bueno, ponemos aquí los dos puntitos y le ponemos justamente lo que es falso.

    return (
        <div className="colaborador" >
            <TiDelete className="eliminar" onClick= {() => eliminarColaborador(id)}/>
            <div className="encabezado" style={{backgroundColor:colorPrimario}}>
                <img src={foto} alt={nombre} />
            </div>

            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav ? <FaHeart color="red" onClick={() => like(id)}/> : <FaRegHeart  onClick={() => like(id)} /> }
            </div>
        </div>
    );
}

export default Colaborador;