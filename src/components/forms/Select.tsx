import { useEffect, useRef, useState } from "react";
interface SelectProps {
  label?: string;
  options: String[];
  value?: string;
  onChange?: (val:String) => void;
  className?: string;
  variant?: "default" | "success" | "error";
  useCartContext?: boolean;
}

export const Select2 = ({
  label,
  options,
  onChange,
  className = "",
  variant = "default",
  value,
}: SelectProps) => {

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);


  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const baseStyle =` max-w-sm py-2 items-center h-11  w-full px-3 min-w-42   max-w-sm px-3 bg-white text-xs text-gray-800
   border rounded-md cursor-pointer flex items-center justify-between focus:ring-1
  focus:ring-blue-200 focus:border-blue-100 outline-none transition-all duration-200 text-gray-800`

  const variants = {
    default: "border-border  focus:ring-blue-400"
  };
  return (
    <div className={`items-center  w-full  pr-2  max-w-sm relative ${className}`} ref={ref}>
      {/* {label && (
        // <label className="block text-sm font-medium text-gray-700 mb-1">
        //   {label}
        // </label>
      )} */}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${baseStyle} ${variants[variant]} `}
      >
        <span>{value?value:"Select option"}</span>
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute  md:gap-10 overflow-y-scroll w-full md:max-w-[200px] lg:max-w-[200px] z-50 mt-1 max-h-60 rounded-md border border-gray-200 bg-white shadow-lg">
          {options.map((itm,ind) => (
            <li
              key={ind}
              onClick={() => {
                onChange(itm);
                setOpen(false);
              }}
              className={`px-3 py-2 text-xs cursor-pointer hover:bg-gray-100 ${
                itm === value? "bg-gray-100 font-medium" : ""
              }`}
            >
              {itm}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Select2;