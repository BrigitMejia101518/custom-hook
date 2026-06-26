import { useReducer } from "react";
import { cartReducer } from "../utilidades/cartReducer";

const PRODUCTS = [
    {id: 1, name: "teclado", price: 30},
    {id: 2, name: "raton", price: 15}
]

function Cart() {
    const [items, dispatch] = useReducer(cartReducer, [])

    return (
        <div>
            <h3>Catálogo</h3>
            {
                PRODUCTS.map((product) => (
                    <button 
                    key={product.id}
                    onClick={() => dispatch({ type: "add", product})}
                    >
                        Añadir {product.name}
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
                                onClick={() => dispatch({ type: "increase", id: item.id })}
                            >
                                +
                            </button>
                            <button
                                onClick={() => dispatch({ type: "remove", id: item.id })}

                            >
                                🗑️
                            </button>
                        </li>
                    ))
                }
            </ul>
            <button
            onClick={() => dispatch({ type: "clear" })}>Vaciar</button>
        </div>
    )
}

export {
    Cart
}