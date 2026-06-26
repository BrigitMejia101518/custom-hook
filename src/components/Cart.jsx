import { useCartStore } from "../utilidades/useCartStore";


const PRODUCTS = [
    {id: 1, name: "Teclado", price: 30},
    {id: 2, name: "Raton", price: 15}
];

function Cart() {

    const items = useCartStore((state) => state.items);
    const add = useCartStore((state) => state.add);
    const remove = useCartStore((state) => state.remove);
    const increase = useCartStore((state) => state.increase);
    const clear = useCartStore((state) => state.clear);

    return (
        <div>
            <h3>Catálogo</h3>
            {PRODUCTS.map((p) => (
                <button key={p.id} onClick={() => add(p)}
                >
                    Añadir {p.name}
                </button>
                ))
            }

            <h3>Carrito({items.length})</h3>
            <ul>
                {
                    items.map((item) => (
                        <li key={item.id}>
                            {item.name} X {item.amount}
                            <button 
                                onClick={() => increase(item.id)}
                            >
                                +
                            </button>
                            <button
                                onClick={() => remove(item.id)}

                            >
                                🗑️
                            </button>
                        </li>
                    ))
                }
            </ul>
            <button
            onClick={clear}>Vaciar</button>
        </div>
    )
}

export {
    Cart
}