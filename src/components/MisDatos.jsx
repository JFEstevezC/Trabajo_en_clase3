function MisDatos(){

    const productos = [
        {nombre:"TV", id:1, precio:2000000},
        {nombre:"Xbox", id:1, precio:4000000},
        {nombre:"Play", id:1, precio:2000000}
    ]

    const listaProductos = productos.map(producto =>
        <li key={producto.id}>
            {producto.nombre}-{producto.precio}
        </li>

    );
    return(
        <>
            {listaProductos}
        </>
    )
}
export default MisDatos