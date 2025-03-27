import './App.css'
import Footer from './components/Footer'
import Hablemos from './components/Hablemos'
import Nav from './components/Nav'
import Networks from './components/Networks'
import Testimoniales from './components/Testimonials'

function App() {

  return (
    <div>
      <Nav/>
      <div className='container'>
        <div className="card m-4">
          <img src="/banner1.png" class="card-img" alt=""/>
        </div>
        <div className='position-relative py-2 px-4 position-absolute start-50 translate-middle'>
          <button className='btn btn-pri d-flex mt-5'>Contactame</button>
        </div>
      </div>
      <Networks/>
      <Testimoniales/>
      <Hablemos/>
      <Footer/>
    </div>
  )
}

export default App
