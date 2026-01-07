import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { cn } from '../../utils/Utils';

const DatePicker = ({ label, value, onChange, error, required, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    });
  };

  // Function to clear the date
  const handleReset = (e) => {
    e.stopPropagation(); // Prevents the dropdown from opening when clicking reset
    onChange(""); 
  };

  return (
    <div className={cn("flex flex-col gap-1 w-full", className)} ref={containerRef}>
      {label && (
        <label className=" text-gray-700 ml-1 uppercase ">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2.5 border rounded-lg bg-white cursor-pointer transition-all",
            error ? "border-red-500 bg-red-50/10" : "border-gray-200 hover:border-blue-400",
            isOpen && "ring-2 ring-blue-100 border-blue-500"
          )}
        >
          <div className="flex items-center gap-3">
            <CalendarIcon size={18} className={cn("text-gray-400", value && "text-blue-500")} />
            <span className={cn("text-sm", !value && "text-gray-400")}>
              {value ? formatDate(value) : "Select Date"}
            </span>
          </div>

          {/* Reset Button: Only shows if a value exists */}
          {value && (
            <button
              type="button"
              onClick={handleReset}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-red-500"
              title="Clear date"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {isOpen && (
          <div className="absolute z-50 mt-2 p-4 bg-white border border-gray-200 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 min-w-[200px]">
            <input
              type="date"
              className="w-full outline-none text-sm p-2 bg-gray-50 rounded border border-gray-100 focus:border-blue-500"
              value={value || ""}
              onChange={(e) => {
                onChange(e.target.value);
                setIsOpen(false);
              }}
              autoFocus
            />
            {/* Optional: Inline Reset inside dropdown */}
            <button 
              type="button"
              onClick={handleReset}
              className="w-full mt-3 py-1.5 text-[10px] font-bold text-gray-500 uppercase hover:text-red-500 border-t border-gray-100"
            >
              Reset Selection
            </button>
          </div>
        )}
      </div>

      {error && <p className="text-[10px] text-red-500 mt-1 ml-1">{error}</p>}
    </div>
  );
};

export default DatePicker;