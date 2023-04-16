import {Link} from '@remix-run/react'

function Footer() {
  return (
    <footer className="footer">
        <div className="contenedor">
            <div className='navegacion'>
            <Link to='/'> Inicio</Link>    
            <Link to='/entretenimiento'> Entretenimiento</Link>
            <Link to='/negocios'> Negocios</Link>    
            </div>
            
            <p>Todos los derechos reservados { new Date().getFullYear()} </p>
        </div>

    </footer>
  )
}

export default Footer