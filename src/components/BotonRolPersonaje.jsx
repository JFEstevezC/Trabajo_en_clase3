import { useState } from "react";  
import { usePerfil } from "../context/PerfilContext";   

function BotonRolPersonaje(){

    const {actualizarPerfil} = usePerfil();
    
    const [cargando, setCargando] = useState(false);

    const bucarPersonajeAleatorio = async () => {
        setCargando(true);

        const totalPersonajes = 826;
        const idAleatorio = Math.floor(Math.random() * totalPersonajes) + 1;

        try{
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${idAleatorio}`);

            if (!respuesta.ok){
                throw new Error('Error al conectar con la API');
            }
            const datosPersonaje = await respuesta.json();

            actualizarPerfil({
                name: datosPersonaje.name,
                imageUrl: datosPersonaje.image
            });


        }catch(error){
            console.error("Error obteniendo el personaje: ", error);
            alert("No se pudo obtener el perosnaje. Inténtelo de nuevo.")
        }finally{
            setCargando(false)
        }

    };

    return(
        <button
        onClick={bucarPersonajeAleatorio}
        >
            
            {cargando ? 'Buscando...' : 'Rol Personaje' }
        </button>
    )
}

export default BotonRolPersonaje