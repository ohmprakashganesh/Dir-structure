import React, { useState, useEffect, useRef } from 'react';
import { Clock, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/Utils';

const TimePicker = ({ 
  label, 
  value, 
  onChange, 
  error, 
  required,
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Generate time slots (e.g., 09:00, 09:30...)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let min = 0; min < 60; min += 30) { // 30-minute intervals
        const h = hour.toString().padStart(2, '0');
        const m = min.toString().padStart(2, '0');
        slots.push(`${h}:${m}`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e) => {
      if (!containerRef.current?.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={cn("flex flex-col gap-1 w-full", className)} ref={containerRef}>
      {label && (
        <label className="text-xs  text-gray-700 ml-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2 border rounded-md bg-white text-sm transition-all",
            error ? "border-red-500  ring-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500",
            !value && "text-gray-400"
          )}
        >
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gray-400" />
            <span>{value || "Select Time"}</span>
          </div>
          <ChevronDown size={14} className={cn("transition-transform", isOpen && "rotate-180")} />
        </button>

        {/* Dropdown List */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-xl max-h-60 overflow-y-auto">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                className={cn(
                  "w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors",
                  value === time ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-700"
                )}
                onClick={() => {
                  onChange(time);
                  setIsOpen(false);
                }}
              >
                {time}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-[10px] text-red-500 mt-1 ml-1">{error}</p>}
    </div>
  );
};

export default TimePicker;