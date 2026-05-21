import React, {createContext, useState, useContext } from 'react';

const PerfilContext = createContext(null);

export function PerfilProvider({children}){

    const [perfil, setPerfil] = useState({
        name: 'Fido',
        imageUrl: 'https://rickandmortyapi.com/api/character/avatar/397.jpeg',
        imageSize: 90
    })

    const actualizarPerfil = (nuevosDatos) => {
        setPerfil((prevPerfil) => ({
            ...prevPerfil,
            ...nuevosDatos
        }));
    };

    return (
        <PerfilContext.Provider value = {{ perfil, actualizarPerfil }}>
            {children}
        </PerfilContext.Provider>
    );
}

export function usePerfil(){
    const context = useContext(PerfilContext);
    if (!context){
        throw new Error('usePerfil debe ser actualizado dentro de un PerfilProvider');
    }
    return context;
}