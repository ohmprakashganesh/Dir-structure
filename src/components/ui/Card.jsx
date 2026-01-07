import Button from "./Button";

// src/components/display/Card.jsx
export const Card = ({ image, category, title, price, oldPrice, rating = 4.5, onAction }) => {
  return (
    /* Removed fixed h-[300px] to allow natural height; Added min-w to prevent squishing */
    <div className="group w-full bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col">
      
      {/* 1. Image Container - Fixed Ratio like Flipkart */}
      <div className="relative aspect-[3/4] sm:aspect-square overflow-hidden bg-white p-2">
        <img 
          src={image || "https://via.placeholder.com/400"} 
          alt={title} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-blue-600 text-[9px] font-bold text-white rounded-sm uppercase tracking-tighter">
            {category}
          </span>
        )}
      </div>

      {/* 2. Content Section */}
      <div className="p-3 flex flex-col flex-grow space-y-1">
        <h3 className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-1 group-hover:text-blue-600">
          {title}
        </h3>

        {/* Rating Badge */}
        <div className="flex items-center gap-1">
          <span className="flex items-center bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
            {rating} <span className="ml-0.5 text-[8px]">★</span>
          </span>
          <span className="text-[10px] text-gray-400 font-medium">(1,240)</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-sm sm:text-base font-bold text-gray-900">₹{price}</span>
          {oldPrice && (
            <>
              <span className="text-xs text-gray-400 line-through">₹{oldPrice}</span>
              <span className="text-xs text-green-600 font-semibold">
                {Math.round(((oldPrice - price) / oldPrice) * 100)}% off
              </span>
            </>
          )}
        </div>
           <p className="text-xs font-bold text-blue-600 uppercase tracking-wide hover:text-blue-800">
          View Details
         </p>
      </div>
      {/* 3. Action - Simple and clean */}
      <div className="px-3 pb-3"> 
         <Button secondary  className="w-full transition-all duration-500" >Add to Cart</Button>
      </div>
    </div>
  );
};