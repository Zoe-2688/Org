import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => { 
//destructuracion
const { colorPrimario, colorSecundario, titulo, id} = props.datos;
const {colaboradores, eliminarColaborador, actualizarColor, like} = props
const defaultColor = "#000000"; // Default to black or any valid hex color
console.log('Color Primario:', colorPrimario); // Add this line to debug
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
 

    const estiloTitulo = {borderColor: colorPrimario}

    return <>
        {colaboradores.length > 0 &&
            < section className="equipo" style={obj} >
                <input
                   type='color'
                   className="equipo-color"
                   value={colorPrimario}
                   onChange={(evento) => {
                       actualizarColor(evento.target.value, id)
                   }}

                   style={{ cursor: 'pointer' }} //Puntero para avisar al usuario que puede cambiar el color 
                   title="Cambia el color del equipo"
                   
                     
                />
                 <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }

                </div>

            </section >
        }
    </>
}

export default Equipo;