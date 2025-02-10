import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    picture: string;
    quantity: number; // Quantity qo'shildi
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    updateQuantity: (id: number, quantity: number) => void; // Miqdorni yangilash
    removeFromCart: (id: number) => void; // Mahsulotni olib tashlash
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        // LocalStorage'dan saqlangan ma'lumotni o'qish
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Har safar cartItems yangilanayotganida uni localStorage'da saqlash
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((product) => product.id === item.id);
            if (existingItem) {
                // Mahsulot allaqachon bor bo'lsa, faqat quantityni oshirish
                return prevItems.map((product) =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
    };

    const removeFromCart = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
