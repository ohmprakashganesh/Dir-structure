import React, { useState } from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { cn } from "../../utils/Utils";

export const CartItem = ({
    item = {
        name: "Premium Wireless Headphones",
        price: 299,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    }
}) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="w-full bg-white border border-gray-100 rounded-2xl  shadow-sm hover:shadow-md transition-shadow">
           <div className="flex flex-row items-center gap-3 sm:gap-6 p-2 sm:p-4">
    
    {/* 1. Image: Fluid width and height */}
    <div className="w-12 h-12 sm:w-22 sm:h-18 shrink-0 overflow-hidden rounded-lg sm:rounded-xl bg-gray-50">
        <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
        />
    </div>
    {/* 2. Middle: Details with responsive text sizes */}
    <div className="flex-1 min-w-0 flex flex-col items-start text-left">
        <span className="text-[8px] sm:text-xs font-semibold uppercase tracking-wider text-blue-600">
            {item.category}
        </span>
        {/* truncate prevents text from breaking the layout on tiny screens */}
        <h3 className="text-sm sm:text-md font-bold text-gray-900 leading-tight truncate w-full">
            {item.name}
        </h3>
        <p className="text-xs sm:text-xl font-black text-green-900 mt-1 sm:mt-2">
            ${item.price * quantity}
        </p>
    </div>
    {/* 3. Right Side: Smaller controls for mobile */}
    <div className="flex items-center bg-gray-50 rounded-lg sm:rounded-xl p-0.5 sm:p-1 border border-gray-200">
        <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 sm:p-2 hover:bg-white rounded-md transition-all active:scale-90"
        >
            <Minus size={14} className="sm:w-[18px] sm:h-[18px]" />
        </button>
        <span className="w-6 sm:w-10 text-center text-sm sm:text-base font-bold text-gray-900">
            {quantity}
        </span>

        <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-1 sm:p-2 hover:bg-white rounded-md transition-all active:scale-90"
        >
            <Plus size={14} className="sm:w-[18px] sm:h-[18px]" />
        </button>
    </div>
</div>
        </div>
    );
};
export default CartItem;