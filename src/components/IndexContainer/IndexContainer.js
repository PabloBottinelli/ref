import './IndexContainer.css'
import {Link} from 'react-router-dom';

const IndexContainer = () => {
    return(
        <div>
            <h2>Bienvenid@ a la página mas rata del mundo </h2><img src='../assets/rat.svg' alt='rat' className='rat'></img>
            <div className='ctn'>
                <div className='titulo'>
                    <h2>Referidos</h2>
                    <p>Encontrá tutoriales paso a paso de como participar de las campañas de referidos que lanzan las empresas</p>
                </div>
                <div className='vermas'>
                    <Link to={`/referidos`}><a>Ver mas...</a></Link>
                </div>
            </div>
            <div className='ctn'>
                <div className='titulo'>
                    <h2>Descuentos</h2>
                    <p>Encontrá tutoriales paso a paso de como participar de las campañas de referidos que lanzan las empresas</p>
                </div>
                <div className='vermas'>
                    <Link to={`/referidos`}><a>Ver mas...</a></Link>
                </div>
            </div>
            <div className='ctn'>
                <div className='titulo'>
                    <h2>Becas</h2>
                    <p>Encontrá tutoriales paso a paso de como participar de las campañas de referidos que lanzan las empresas</p>
                </div>
                <div className='vermas'>
                    <Link to={`/referidos`}><a>Ver mas...</a></Link>
                </div>
            </div>
            <div className='ctn'>
                <div className='titulo'>
                    <h2>Hacks</h2>
                    <p>Encontrá tutoriales paso a paso de como participar de las campañas de referidos que lanzan las empresas</p>
                </div>
                <div className='vermas'>
                    <Link to={`/referidos`}><a>Ver mas...</a></Link>
                </div>
            </div>
        </div>
    )
}

export default IndexContainer