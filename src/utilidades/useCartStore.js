import { create } from "zustand";

export const useCartStore = create((set) => ({
    items: [],

    add: (product) => 
        set((state) => ({ items: [...state.items, {...product, amount: 1 }] })),

    remove: (id) => 
        set((state) => ({ items: state.items.filter((item) => item.id !== id) })),

    increase: (id) =>
        set((state) => ({ 
            items: state.items.map((item) => 
                item.id === id ? {...item, amount: item.amount + 1 } : item,
        ),
    })),

    clear: () => set({ items: [] }),

}));