import { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState(() => {
    const storedColaboradores = localStorage.getItem('colaboradores');
    return storedColaboradores ? JSON.parse(storedColaboradores) : [
      {
        id: uuid(),
        equipo: "Front End",
        foto: "https://github.com/harlandlohora.png",
        nombre: "Harland Lohora",
        puesto: "Instructor",
        fav: true
      },
      {
        id: uuid(),
        equipo: "Programación",
        foto: "/img/happy-flower.png",
        nombre: "Genesys Rondón",
        puesto: "Desarrolladora de software e instructora",
        fav: false
      },
      {
        id: uuid(),
        equipo: "UX y Diseño",
        foto: "https://github.com/JeanmarieAluraLatam.png",
        nombre: "Jeanmarie Quijada",
        puesto: "Instructora en Alura Latam",
        fav: false
      },
      {
        id: uuid(),
        equipo: "Programación",
        foto: "https://github.com/christianpva.png",
        nombre: "Christian Velasco",
        puesto: "Head de Alura e Instructor",
        fav: false
      },
      {
        id: uuid(),
        equipo: "Innovación y Gestión",
        foto: "https://github.com/JoseDarioGonzalezCha.png",
        nombre: "Jose Gonzalez",
        puesto: "Dev FullStack",
        fav: false
      }
    ];
  });

  // Lista de equipos
  const [equipos, actualizarEquipos] = useState(() => {
    const storedEquipos = localStorage.getItem('equipos');
    return storedEquipos ? JSON.parse(storedEquipos) : [
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
  }, [colaboradores]);

  useEffect(() => {
    localStorage.setItem('equipos', JSON.stringify(equipos));
  }, [equipos]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores((prevColaboradores) => {
      const nuevosColaboradores = [...prevColaboradores, { ...colaborador, id: uuid() }];
      console.log("Lista de IDs después de agregar:", nuevosColaboradores.map(c => c.id));
      return nuevosColaboradores;
    });
  };

  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador con id:", id);
    actualizarColaboradores((prevColaboradores) => {
      const nuevosColaboradores = prevColaboradores.filter((colaborador) => colaborador.id !== id);
      console.log("Lista de IDs después de eliminar:", nuevosColaboradores.map(c => c.id));
      return nuevosColaboradores;
    });
  }

  const actualizarColor = (color, id) => {
    console.log("Actualizar color: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        return { ...equipo, colorPrimario: color }; // Crear un nuevo objeto para evitar la mutación directa
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
    localStorage.setItem('equipos', JSON.stringify(equiposActualizados)); // Guardar en localStorage
  };

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        // Crea un nuevo objeto con el cambio de `fav`
        return { ...colaborador, fav: !colaborador.fav };
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;