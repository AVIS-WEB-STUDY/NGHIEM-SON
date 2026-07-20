interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
    total: number;
}

const productCarts: Product[] = [
    {
        name: "Margherita",
        description: "Tomato, Mozzarella, Basil",
        price: 12,
        total: 2,
        image: "/pizza1.jpg",
    },
    {
        name: "Capricciosa",
        description: "Tomato, Mozzarella, Hm, Mushrooms, Artichoke",
        price: 0,
        total: 0,
        image: "/pizza1.jpg",
    },
    {
        name: "Romana",
        description: "Tomato, Mozzarella, Prosciutto",
        price: 15,
        total: 6,
        image: "/pizza1.jpg",
    },
    {
        name: "Prosciutto e Rucola",
        description: "Tomato, Mozzarella, Prosciutto, Arugula",
        price: 16,
        total: 5,
        image: "/pizza1.jpg",
    },
    {
        name: "Prosciutto e Rucola",
        description: "Tomato, Mozzarella, Prosciutto, Arugula",
        price: 16,
        total: 5,
        image: "/pizza1.jpg",
    },
    {
        name: "Diavola",
        description: "Tomato, Mozzarella, Spicy Salami, Chili Flakes",
        price: 16,
        total: 5,
        image: "/pizza1.jpg",
    },
    {
        name: "Vegetale",
        description: "Tomato, Mozzarella, Bell Peppers, Onions, Mushrooms",
        price: 16,
        total: 5,
        image: "/pizza1.jpg",
    },
    {
        name: "Napoli",
        description: "Tomato, Mozzarella, Fresh Tomato, Basil",
        price: 16,
        total: 5,
        image: "/pizza1.jpg",
    },
];

const Cart = () => {
    return (
        <div className="max-w-7xl mx-auto p-5">
            {productCarts.map((product, index) => {
                const isOutOfStock = product.total === 0;

                return (
                    <div
                        key={index}
                        className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className={`w-20 h-20 rounded-lg object-cover ${
                                isOutOfStock ? "grayscale opacity-50" : ""
                            }`}
                        />

                        <div className={`flex justify-between gap-4 flex-1`}>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 ">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-500  italic">
                                        {product.description}
                                    </p>
                                </div>

                                <p className="text-sm font-semibold text-gray-900">
                                    {!!product.total &&
                                        `$${product.price.toFixed(2)}`}
                                </p>
                            </div>
                            <div className="flex items-end">
                                <button className="items-end bg-yellow-400 text-gray-900 font-bold text-xs px-5 py-2 rounded-full transition-colors duration-200 whitespace-nowrap hover:bg-yellow-500 active:scale-95">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
