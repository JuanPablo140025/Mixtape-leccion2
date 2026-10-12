function TarjetaCancion({ titulo, artista, album, duracion, portada, anio, reproducciones, favorita, energia }) {
    return (
        <article className="tarjeta">
            {/* Ticket 3 de clase: Etiqueta de favorita */}
            {favorita && <span className="etiqueta-favorita">❤️ Favorita</span>}
            
            <img src={portada} alt={`Portada de ${titulo}`} className="tarjeta-portada" />
            <h2 className="tarjeta-titulo">{titulo}</h2>
            <p className="tarjeta-artista">{artista}</p>
            
            <p className="tarjeta-detalle">Álbum: {album}</p>
            <p className="tarjeta-detalle">Duración: {duracion}</p>
            <p className="tarjeta-detalle">Año: {anio}</p>
            <p className="tarjeta-detalle">Reproducciones: {reproducciones.toLocaleString()}</p>
            <p className="tarjeta-detalle">Lanzada hace {2026 - anio} años</p>

            {/* Home Challenge - Ticket 2: Barra de energía */}
            <div className="barra-energia">
                <div 
                    className="barra-energia-relleno" 
                    style={{ width: `${energia}%` }}
                ></div>
            </div>
        </article>
    );
}

export default TarjetaCancion;
