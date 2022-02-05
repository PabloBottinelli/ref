import './NavBar.css'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='nav'>
            <Link to={`/`}><h1>LOGO</h1></Link>
            <Link to={`/referidos`}><a>Referidos</a></Link>
            <Link to={`/descuentos`}><a>Descuentos</a></Link>
            <Link to={`/becas`}><a>Becas</a></Link>
            <Link to={`/hacks`}><a>Hacks</a></Link>
        </nav>
    )
}

export default NavBar