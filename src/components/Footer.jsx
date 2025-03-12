export default function Footer(){
    return(
        <div>
            <footer class="bg-pri text-white text-center text-lg-start">
                <div class="container p-4">
                    <div class="row">
                        <div class="col-md-6">
                            <h5 class="text-white">Landing Page</h5>
                            <p>© 2025 Todos los Derechos Reservados</p>
                        </div>
                        <div class="col-md-6 d-flex flex-column align-items-end"> 
                            <div>
                                <a href="#" class="text-white mb-1"><i class="fab fa-whatsapp"></i>011 1234-5678</a>
                                <i class="bi bi-whatsapp"  style={{margin: "12px"}}></i>
                            </div>  
                            <div>
                                <a href="#" class="text-white mb-2"><i class="fas fa-envelope"></i>landing@gmail.com</a>     
                                <i class="bi bi-envelope" style={{margin: "12px"}}></i>                       
                            </div>  
                            <div>
                                <a href="#" class="text-white mb-2"><i class="fab fa-tiktok"></i>tiktok.com/usuario</a>
                                <i class="bi bi-tiktok" style={{margin: "12px"}}></i>
                            </div>    
                            <div>   
                                <a href="#" class="text-white mb-2"><i class="fab fa-instagram"></i>instagram.com/usuario</a>
                                <i class="bi bi-instagram" style={{margin: "12px"}}></i>
                            </div>                   
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}