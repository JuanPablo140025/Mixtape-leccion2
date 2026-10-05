import Encabezado from "./components/Encabezado.jsx";
import TarjetaCancion from "./components/TarjetaCancion.jsx";
import PiePagina from "./components/PiePagina.jsx";

function App() {
    return (
        <main className="app">
            <Encabezado />
            <TarjetaCancion />
            <PiePagina />
        </main>
    );
}

export default App;