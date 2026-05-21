
function Buton({count, onClick}){

    return (
        <button onClick={onClick}>
            Hiciste Click {count} veces
            </button>
    );
}

export default Buton;