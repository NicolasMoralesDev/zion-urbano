import React from 'react'

const Pie = () => {
  return (
    <footer className="container-fluid bg-dark text-light">
   <ul className="flex-md-row container-fluid flex-sm-column justify-content-around">
   <div className='row-cols-1'>
    <h4>Nuestra Ubicacion</h4>
   <li className='d-flex aling-items-center flex-column'> <h6 className='p-2'> Campana 243 Local 8 Gal. Los fabricantes</h6> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0045661464173!2d-58.475688500000004!3d-34.6293249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9921f056503%3A0x8564a65c24a1ea3f!2sGaler%C3%ADa%20Comercial%20LOS%20FABRICANTES!5e0!3m2!1ses-419!2sar!4v1665336309555!5m2!1ses-419!2sar" width={300} height={150}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li>
    </div>
    <div className='row-cols-1'>
    <h4>Nuestras Redes</h4>
    <li>Facebook</li>
    <li>Instagram</li>
    </div>
    <div className='row-cols-1'>
    <h4>Contacto</h4>
    <li>+11 - 65759558</li>
    <li>Zion Urbano</li>
    </div>
  </ul>
  <h6 id='copyright' > © copyright  <a href="" className='nav-link'>  Nicolas Morales  </a>  y  <a href="" className='nav-link'>Luciano Rivera</a> - 2022</h6>
    </footer>
  )
}

export default Pie