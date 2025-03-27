export default function Testimoniales(){

    const data = [
        {
            id: 1,
            name: "Laura Aguilar",
            img: "/persona1.jpg",
            description: "Hemos estado trabajando con Nombre durante el año pasado y hemos visto un aumento significativo en el tráfico del sitio web y en los clientes potenciales como resultado de sus esfuerzo"
        },
        {
            id: 2,
            name: "Juana Martinez",
            img: "/persona02.jpg",
            description: "Hemos estado trabajando con Nombre durante el año pasado y hemos visto un aumento significativo en el tráfico del sitio web y en los clientes potenciales como resultado de sus esfuerzo"
        },
        {
            id: 3,
            name: "Guadalupe Aguilar",
            img: "/persona03.jpg",
            description: "Hemos estado trabajando con Nombre durante el año pasado y hemos visto un aumento significativo en el tráfico del sitio web y en los clientes potenciales como resultado de sus esfuerzo"
        },
    ]
    return(
        <div className="container section text-center align-items-center">
            <div className="my-5">
                <h3 className="text-pri">Testimoniales</h3>
                <p>Escuche a nuestros clientes satisfechos: lea nuestros testimonios para obtener más información sobre<br/> nuestros servicios de marketing digital.</p>
            </div>
            <div className="container" style={{width: "1400px"}}>
                <div className="row justify-content-center container">
                {data.map((skil) => (
                    <div className="col-12 col-md-6 col-lg-4" key={skil.id}>
                        <div className="card" style={{borderRadius: "2rem", boxShadow: "4px 4px 8px 4px rgba(23, 24, 36, 0.1)"}}>
                            <div className="card-sec d-flex flex-column align-items-center text-center m-4">
                                <div className="icon-container">
                                    <h5 className="card-title m-2">{skil.name}</h5>
                                </div>
                                <img src={skil.img} alt="" className="rounded-circle img-fluid m-3" style={{width: "50px", height: "50px"}}/>
                                <p className="card-text">{skil.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            
        </div>
    )
}