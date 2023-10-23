import "./Start.css";

export default function Start() {
    return(
        <div className="start-container">
            <div className="start-img">
                <img srcSet={require('../../../assets/images/mi-sitio.png')} alt="Not found" />
                <h2>Mi sitio</h2>
            </div>
            <div className="start-img">
                <img srcSet={require('../../../assets/images/reservations.png')} alt="Not found" />
                <h2>Reservaciones</h2>
            </div>
            <div className="start-img">
                <img srcSet={require('../../../assets/images/mi-sitio.png')} alt="Not found" />
                <h2>Mi sitio</h2>
            </div>
            <div className="start-img">
                <img srcSet={require('../../../assets/images/mi-sitio.png')} alt="Not found" />
                <h2>Mi sitio</h2>
            </div>
            <div className="start-img">
                <img srcSet={require('../../../assets/images/mi-sitio.png')} alt="Not found" />
                <h2>Mi sitio</h2>
            </div>
            <div className="start-img">
                <img srcSet={require('../../../assets/images/mi-sitio.png')} alt="Not found" />
                <h2>Mi sitio</h2>
            </div>

        </div>
    )
}