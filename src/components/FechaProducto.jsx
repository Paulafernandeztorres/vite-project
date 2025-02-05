
import './fechaProducto.css';

function FechaProducto(props) {

    const ano = props.fecha.getFullYear();
    const mes = props.fecha.toLocaleString('es-ES', { month: 'long' });
    const dia = props.fecha.toLocaleString('es-ES', { day: '2-digit' });

    return (
        <div className='producto-fecha'>
            <div className='producto-fecha__dia'>{dia}</div>
            <div className='producto-fecha__mes'>{mes}</div>
            <div className='producto-fecha__ano'>{ano}</div>
        </div>
    )
}

export default FechaProducto;