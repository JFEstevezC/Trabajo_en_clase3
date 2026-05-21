import { usePerfil } from "../context/PerfilContext"

function Profile(){

    const {perfil} = usePerfil();

    return(
        <>
            <h1>{perfil.name}</h1>
            <img
                className="avatar"
                src={perfil.imageUrl}
                style={{
                    width: perfil.imageSize,
                    height: perfil.imageSize
                }}
            
            />
        </>
    )
}
export default Profile