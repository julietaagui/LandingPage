export default function Hablemos() {
    return (
        <div className="container section text-center align-items-center" style={{marginBottom: "10rem"}}>
            <div className="my-5">
                <h3 className="text-pri">Mis Redes Sociales</h3>
                <p>Comparto consejos y mi trabajo como dermatóloga para educar y ayudar.</p>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="custom-card p-6">
                    <form>
                        <div className="row justify-content-center custom-container text-white">
                            <div className="d-flex justify-content-between text-start gap-3">
                                <div className="mb-3 w-50">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3 w-50">
                                    <label htmlFor="lastName" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="lastName" />
                                </div>
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="gmail" className="form-label">Gmail</label>
                                <input type="email" className="form-control" id="gmail" />
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn w-button text-white button-hover" style={{height: "48px"}}>Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
