import { useState, forwardRef, useRef, useEffect } from "react";
import { cn } from "../../utils/Utils";    // Using your cn utility
import { ChevronDown, Search, X } from "lucide-react";
import BaseField from "../forms/BaseField";

export const SearchableSelect = forwardRef(
  ({ label, required, error, options = [], placeholder = "Select option...", onSelect, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const containerRef = useRef(null);

    // Filter options based on typing
    const filteredOptions = options.filter((opt) =>
      opt.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option) => {
      setSelectedOption(option);
      setSearchTerm("");
      setIsOpen(false);
      if (onSelect) onSelect(option.value);
    };

    const activeVariant = error ? "error" : "default";

    const variants = {
      default: "border-gray-500/40 focus-within:ring-blue-400",
      error: "border-red-300 focus-within:ring-red-400",
    };

    const baseStyle = "w-full flex items-center justify-between px-3 py-3 md:py-2 font-light text-xs text-gray-800 border rounded-md bg-white transition-all cursor-pointer focus-within:ring-[0.5px]";

    return (
      <BaseField label={label} required={required} error={error}>
        <div className="relative w-full" ref={containerRef}>
          {/* Main Toggle / Input Display */}
          <div
            className={cn(baseStyle, variants[activeVariant])}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={!selectedOption ? "text-gray-400" : "text-gray-800"}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown className={cn("transition-transform duration-200 text-gray-400", isOpen && "rotate-180")} size={16} />
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {/* Search Bar inside dropdown */}
              <div className="flex items-center px-2 border-b border-gray-100 bg-gray-50">
                <Search size={14} className="text-gray-400" />
                <input
                  autoFocus
                  type="text"
                  className="w-full p-2 bg-transparent outline-none text-xs"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Options List */}
              <ul className="max-h-48 overflow-y-auto">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => (
                    <li
                      key={option.value}
                      className="px-3 py-2 text-xs hover:bg-blue-50 cursor-pointer transition-colors flex justify-between items-center"
                      onClick={() => handleSelect(option)}
                    >
                      {option.label}
                      {selectedOption?.value === option.value && (
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      )}
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-2 text-xs text-gray-400 italic">No results found</li>
                )}
              </ul>
            </div>
          )}
          {/* Hidden input to pass the value to forms */}
          <input type="hidden" ref={ref} {...rest} value={selectedOption?.value || ""} />
        </div>
      </BaseField>
    );
  }
);
SearchableSelect.displayName = "SearchableSelect";