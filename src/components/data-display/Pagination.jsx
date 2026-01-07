import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "../../utils/Utils";
import { useState } from 'react';
import Products, { allProducts } from '../../data/Mock';
import CartItem from '../ui/CartItem';
import { Input } from '../forms/Input';

export const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  // Logic to prevent going out of bounds
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8 mb-4">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={cn(
          "p-2 rounded-lg border transition-all active:scale-90",
          "disabled:opacity-30 disabled:cursor-not-allowed",
          "hover:bg-gray-50 border-gray-200 text-gray-600"
        )}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Page Numbers - Scaling size for mobile/desktop */}
      <div className="flex items-center gap-1 sm:gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          
          // Responsive logic: hide some numbers on very small screens if totalPages is high
          if (totalPages > 5 && Math.abs(pageNum - currentPage) > 1 && pageNum !== 1 && pageNum !== totalPages) {
            if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                return <span key={pageNum} className="text-gray-400 px-1">...</span>;
            }
            return null;
          }

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={cn(
                "w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-bold transition-all text-sm sm:text-base",
                currentPage === pageNum
                  ? "bg-blue-900 text-white shadow-md shadow-blue-200"
                  : "hover:bg-gray-100 text-gray-600 border border-transparent hover:border-gray-200"
              )}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={cn(
          "p-2 rounded-lg border transition-all active:scale-90",
          "disabled:opacity-30 disabled:cursor-not-allowed",
          "hover:bg-gray-50 border-gray-200 text-gray-600"
        )}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};




export const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;



const filteredList = allProducts.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredList.length; // Usually comes from your API
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Logic to slice your data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>
        <h1 className=' mt-20 text-center font-bold text-red-600 uppercase'>showing the total cart items </h1>
         <h1 className=' text-2xl'>
            ilter by searching 
         </h1>
         <Input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
      {/* Your Grid of Items */}
      <div className="grid grid-cols-1 ">
        {currentItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>

      {/* The Pagination Component */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={(page) => setCurrentPage(page)} 
      />
    </div>
  );
};
export default ProductList;