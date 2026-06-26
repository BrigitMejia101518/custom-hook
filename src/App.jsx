import "./App.css";
import { Cart } from "./components/Cart";
import { Characters } from "./components/Characters";
import { Head } from "./components/Head";

// 👋 Punto de partida limpio para las clases 40 y 41.
//
// Aquí iremos montando, en vivo:
//   Clase 40 → src/hooks/useFetch.js  +  src/components/Carrito.jsx (useReducer)
//   Clase 41 → src/store/useCarritoStore.js (Zustand) + Cabecera y Catalogo
//
// Sustituye este componente por lo que vayamos construyendo en clase.

function App() {
  return (
    <main>
      <h1>Clase 40-41 · Hooks y Zustand</h1>
      <p>Proyecto base listo. Empezamos de cero 🚀</p>
      <ul>
        <li>
          <Characters />
        </li>
        <li>
          <Cart />
        </li>
        <li>
          <Head />
        </li>
      </ul>
    </main>
  );
}

export default App;
