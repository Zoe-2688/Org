import {useState} from "react";
import "./MiOrg.css";

const MiOrg = ({ cambiarMostrar, mostrarFormulario }) => { //cambiarMostrar y mostrarFormulario se reciben como props.
    //Estado -hooks
    //useState
    //useState ()
    //De esta forma definimos un estado, algo que va a estar cambiando a lo largo de nuestra aplicacion = const [nombreVariable,funcionActualiza] = useState(valorInicial) ;
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrarFormulario)
        cambiarMostrar(!mostrarFormulario); 

    };

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/boton.png" alt="add" onClick={manejarClick} />; 
        
    
    </section>

}

export default MiOrg;