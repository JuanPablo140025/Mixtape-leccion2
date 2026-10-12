# 🎧 Mixtape 2.0 — Lección 2: Divide y Vencerás

**De:** Nova (Hangar 3, Estación Umbral)
**Para:** Cadete de turno

Tu Mixtape funciona, pero la tarjeta solo sabe mostrar una canción: la que está en `cancion.js`. La tripulación pidió una playlist completa. Esta semana trabajas sobre **tu propio proyecto** de la Lección 1 y lo conviertes en una playlist.

> ¿No terminaste la Lección 1? Descarga la respuesta sugerida del repo oficial y arranca desde ahí.

---

## 🧰 Paso 0 — Instalar el kit (5 min)

Este ZIP no es un proyecto nuevo. Son piezas para tu Mixtape:

| Del kit | Va en tu proyecto |
|---|---|
| `src/data/canciones.js` | `src/data/` (al lado de `cancion.js`, no borres nada) |
| `src/estilos-l2.css` | `src/` |
| `public/portadas/` (las 4 portadas) | `public/portadas/` (si te pregunta, reemplaza: son las mismas) |

Después, en `src/main.jsx`, agrega esta línea **debajo** del import de `index.css`:

```jsx
import "./estilos-l2.css";
```

Arranca con `pnpm dev` (si estás en otro computador, primero `pnpm install`). Todo debe verse igual que antes: los estilos nuevos se notan a partir del Ticket 1. Ten la consola abierta (F12).

---

## 🎫 Ticket 1 — La tarjeta recibe props

**Archivos:** `src/components/TarjetaCancion.jsx` y `src/App.jsx`

En `TarjetaCancion.jsx`:

1. Borra el `import { titulo, artista, ... } from "../data/cancion.js"`.
2. Recibe esos mismos datos por props, con destructuring en los paréntesis:

```jsx
function TarjetaCancion({ titulo, artista, album, duracion, portada, anio, reproducciones }) {
```

3. Borra `<Controles />` y `<Siguiente />` de la tarjeta, junto con sus `import`. En una playlist, cada tarjeta tendría sus propios botones de play.

En `App.jsx`:

4. Importa `Controles` y ponlo debajo de la tarjeta.
5. Pásale a la tarjeta los datos de "Luces del Hangar", escritos a mano. Los dos primeros ya están; completa el resto con los datos de `canciones.js`:

```jsx
<TarjetaCancion
    titulo="Luces del Hangar"
    artista="Kuma & The Bolts"
    // agrega aquí album, duracion, portada, anio y reproducciones
/>
```

Recuerda: el texto va entre comillas y los números entre llaves (`anio={2019}`).

✅ **Listo cuando:** ves la tarjeta completa, con "Lanzada hace..." funcionando y los controles abajo.

---

## 🎫 Ticket 2 — La playlist completa

**Archivo:** `src/App.jsx`

1. Importa el array: `import { canciones } from "./data/canciones.js";`
2. Cambia la tarjeta escrita a mano por un `.map()`, dentro de un `<section className="playlist">`. El título ya está; completa las demás props sacándolas de `cancion`:

```jsx
<section className="playlist">
    {canciones.map((cancion) => (
        <TarjetaCancion
            titulo={cancion.titulo}
            // agrega aquí las demás props: artista={cancion.artista} y así
        />
    ))}
</section>
```

3. Guarda y mira la consola: aparece un aviso rojo que pide una `key`. Agrégale a `<TarjetaCancion>` la prop `key` con el dato de cada canción que nunca se repite.

✅ **Listo cuando:** ves las 4 canciones y la consola **no** muestra el aviso rojo de `key`.

---

## 🎫 Ticket 3 — Favoritas

**Archivos:** `src/App.jsx` y `src/components/TarjetaCancion.jsx`

1. Pásale a la tarjeta la prop `favorita` desde el `.map()`.
2. Recíbela en la tarjeta y, solo si es `true`, muestra esto justo debajo de la portada:

```jsx
<span className="etiqueta-favorita">❤️ Favorita</span>
```

Pista: "muestro esto o nada" se resuelve con `&&`.

✅ **Listo cuando:** "Luces del Hangar" y "Bosque de los Anillos" tienen la etiqueta y las otras dos no.

---

## ⭐ Bonus — Contador en el encabezado

**Archivos:** `src/components/Encabezado.jsx` y `src/App.jsx`

Haz que `Encabezado` reciba una prop `total` y muestre debajo del lema:

```jsx
<p className="contador">4 canciones en la estación</p>
```

El 4 no va escrito a mano: sale de la prop. Desde `App`, pásale `total={canciones.length}`.

✅ **Listo cuando:** si agregas una canción al array, el número cambia solo.

---

## 🧯 Si algo falla

- **Error `X is not defined`:** usas una prop en el JSX que no está en las llaves de la función, o está mal escrita.
- **Sale vacío donde debería ir un dato:** el nombre del atributo en `App` no coincide con el de las llaves.
- **Error de `Siguiente` o `Controles`:** borraste la etiqueta pero quedó el `import`, o al revés.
- **Aviso rojo `Each child in a list should have a unique "key" prop`:** falta la `key`, o la pusiste en otra etiqueta y no en `<TarjetaCancion>`.
- **Una portada no carga:** el nombre del archivo en `public/portadas/` tiene que ser idéntico al de `canciones.js`.
- **Las tarjetas salen una debajo de otra y angostas:** falta el `import "./estilos-l2.css";` en `main.jsx`, o quedó arriba del de `index.css`.
