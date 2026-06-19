# Clase 40-41 · Custom hooks, `useReducer` y Zustand

Proyecto base **limpio** para construir en vivo, de cero, las clases 40 y 41 de M3.

## Arrancar

```bash
npm install
npm run dev
```

Abre la URL que imprime Vite (normalmente http://localhost:5173).

## Estructura

```
src/
├── index.jsx          # punto de entrada
├── App.jsx            # iremos cambiándolo en clase
├── hooks/             # ← clase 40: useFetch
├── components/        # ← Carrito, Cabecera, Catalogo…
└── store/             # ← clase 41: stores de Zustand
```

---

## Clase 40 — Custom hooks y `useReducer`

1. **`useFetch`** → crea `src/hooks/useFetch.js`. Extrae el bloque
   `datos` / `cargando` / `error` + `useEffect` a un hook reutilizable.
   Pruébalo con `https://rickandmortyapi.com/api/character`.
2. **`useReducer`** → crea `src/components/Carrito.jsx`. Reducer puro fuera del
   componente con las acciones `añadir`, `quitar`, `incrementar`, `vaciar`.
   El componente solo dispara acciones (`dispatch`).

> Al terminar tienes un mini-Redux a mano: estado + acciones + reducer + dispatch.

## Clase 41 — Zustand (estado global)

```bash
npm install zustand
```

1. **`src/store/useCarritoStore.js`** → `create((set) => ({ ... }))` con `items`
   y las acciones como funciones (los antiguos `case` del reducer).
2. **`Cabecera`** lee `items.length` con un selector.
3. **`Catalogo`** añade productos llamando a `añadir()`.

Monta `<Cabecera />` y `<Catalogo />` en ramas distintas del árbol y comprueba
que el contador del carrito se actualiza solo, **sin props ni Provider**.

> Reto: persistir el store con el middleware `persist` de `zustand/middleware`.
# custom-hook
