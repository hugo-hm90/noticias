import {Link, useLocation}from '@remix-run/react'
import news from '../../public/img/news.png'


function Header() {

  const location = useLocation();
  
  return (
    <header className="nav">
      <h1 className='encabezado'>Noticias HM</h1>
        <ul className="menu" data-animation="center">
            <Link to='/' className="logo">
                <img src={news} alt="Logo" className='logo'/>
            </Link>
            <Link to='/entretenimiento' className={location.pathname === '/entretenimiento' ? 'active' : ''} > Entretenimiento</Link>
            <Link to='/negocios' className={location.pathname === '/negocios' ? 'active' : ''} > Negocios</Link>
            
        </ul>
        
    </header>
    
  )
}


    
export default Header