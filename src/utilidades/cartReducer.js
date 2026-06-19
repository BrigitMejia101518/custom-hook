function cartReducer(items, action) {
    switch (action.type) {
        case "add":
            return [...items, {...action.product, amount: 1 }];
        case "remove":
            return items.filter((item) => item.id !== action.id);
        case "increase":
            return items.map((item) => item.id === action.id ? {...item, amount: item.amount + 1 } : item,
        );
    case "clear":
        return [];
    default:
        return items;

    }
}

export {
    cartReducer
}