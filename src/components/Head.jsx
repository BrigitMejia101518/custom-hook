import { useCartStore } from "../utilidades/useCartStore";

function Head() {
    const total = useCartStore((state) => state.items.length);
    return <header>🛒 {total}</header>;
}

export {
    Head
} 