import { titulo, artista, portada, anio, reproducciones } from "../data/cancion.js";

function TarjetaCancion() {
    return (
        <article className="tarjeta">
            <img src={portada} alt="Portada del álbum" className="tarjeta-portada" />
            <h2 className="tarjeta-titulo">{titulo}</h2>
            <p className="tarjeta-artista">{artista}</p>
            
            <p className="tarjeta-detalle">Año: {anio}</p>
            <p className="tarjeta-detalle">Reproducciones: {reproducciones}</p>
            <p className="tarjeta-detalle">Lanzada hace {2026 - anio} años</p>
        </article>
    );
}

export default TarjetaCancion;
