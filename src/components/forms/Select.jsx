import { forwardRef } from "react";
import  BaseField  from "./BaseField";

export const Select = forwardRef(({ label, required, error, options = [], variant, ...rest }, ref) => {
  const activeVariant = error ? "error" : (variant || "default");

  // logical order: layout -> sizing -> typography -> borders -> interactions
  const baseStyle = "w-full px-3 py-3 md:py-2 lg:py-2 appearance-none bg-white font-light text-xs text-gray-800 border border-gray-500 rounded-md transition-colors focus:outline-none focus:border-gray-600 focus:ring-[0.5px] focus:ring-gray-600 cursor-pointer";

  const variants = {
    default: "border-gray-500/40 focus:ring-blue-400",
    success: "border-green-500/40 focus:ring-green-400",
    error: "border-red-300 focus:ring-red-400",
  };

  return (
    <BaseField label={label} required={required} error={error}>
      <div className="relative w-full">
        <select
          ref={ref}
          defaultValue=""
          className={`${baseStyle} ${variants[activeVariant]}`}
          {...rest}
        >
          <option value="" disabled hidden>Select an option</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="py-2">
              {opt.label}
            </option>
          ))}
        </select>
        
        {/* Custom Arrow Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </BaseField>
  );
});