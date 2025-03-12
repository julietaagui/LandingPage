export default function Networks(){
    const data = [
        {
            id: 1,
            name: "TikTok",
            description: "Mi TikTok me permite ayudar y educar, generar confianza y atraer pacientes.",
            icon: "bi bi-tiktok"
        },
        {
            id: 2,
            name: "Instagram",
            description: "Mi Instagram me permite conectar con mi comunidad, compartir información.",
            icon: "bi bi-instagram"
        },
        {
            id: 3,
            name: "Facebook", // Corregido el nombre
            description: "Muestra mi trabajo, educa sobre el cuidado de la piel y genera confianza.",
            icon: "bi bi-facebook"
        }
    ];

    return(
        <div className="container section text-center align-items-center">
                <div className="my-5">
                    <h3 className="text-pri">Mis Redes Sociales</h3>
                    <p>Comparto consejos y mi trabajo como dermatóloga para educar y ayudar.</p>
                </div>
                <div className="container">
                    <div className="row justify-content-center custom-container">
                        {data.map((skil) => (
                            <div className="col-12 col-md-6 col-lg-4" key={skil.id}>
                                <div className="card social-card" >
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center text-white m-2">
                                        <div className="icon-container">
                                            <i className={`${skil.icon}`} aria-label={`Ícono de ${skil.name}`}></i>
                                        </div>
                                        <h3 className="card-title m-2">{skil.name}</h3>
                                        <p className="card-text">{skil.description}</p>
                                        <a href="#" className="btn btn-light rounded-pill mb-2" style={{border: "none"}}>Visitar →</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
       </div>
    );
}
