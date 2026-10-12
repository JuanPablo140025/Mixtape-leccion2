import Encabezado from "./components/Encabezado.jsx";
import Seccion from "./components/Seccion.jsx";
import TarjetaCancion from "./components/TarjetaCancion.jsx";
import PiePagina from "./components/PiePagina.jsx";
import { canciones } from "./data/canciones.js";

function App() {
    return (
        <main className="app">
            <Encabezado total={canciones.length} />

            <Seccion titulo="Turno de noche">
                {canciones.length > 0 ? (
                    <section className="playlist">
                        {canciones.map((cancion) => (
                            <TarjetaCancion
                                key={cancion.id}
                                titulo={cancion.titulo}
                                artista={cancion.artista}
                                album={cancion.album}
                                duracion={cancion.duracion}
                                portada={cancion.portada}
                                anio={cancion.anio}
                                reproducciones={cancion.reproducciones}
                                favorita={cancion.favorita}
                                energia={cancion.energia}
                            />
                        ))}
                    </section>
                ) : (
                    <p className="playlist-vacia">Aún no hay canciones en la estación</p>
                )}
            </Seccion>

            <PiePagina />
        </main>
    );
}

export default App;