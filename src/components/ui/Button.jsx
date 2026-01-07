import { forwardRef } from "react";
import { cn } from "../../utils/Utils";


const Button = forwardRef(
  (
    {
      className = "",
      label,
      link,
      screen = "md",
      value,
      children,
      icon: Icon,
      onClick,
      primary,
      secondary = false,
      outline = false,
      destructive = false,
      ...props
    },
    ref
  ) => {

    const sizeClasses = {
      xs: "min-w-[80px]  py-2.5 px-3",     
      sm: "min-w-[100px]  py-3 px-4",      
      md: "min-w-[140px] py-2 px-4",
      lg: "min-w-[200px] py-2.5 px-6",
    };
    
    return (
      <button
        onClick={onClick}
        value={value}
        ref={ref}
        {...props}
       className={cn(  
  "  w-full py-3 lg:rounded-none md:rounded-none sm:rounded-none rounded-md   lg:text-md  text-sm  tracking-wide hover:text-base  flex gap-2 items-center shrink justify-center transition-transform duration-500 hover:scale-105  cursor-pointer ",
  sizeClasses[screen] || sizeClasses["xs"], 
  primary && "hover:bg-gray-600 bg-gray-700  hover:font-semibold text-white",
  secondary && "hover:bg-blue-600 bg-blue-700  hover:font-semibold text-white",
  outline && "bg-transparent border-2 border-green-800 hover:bg-territory  text-gray-900 hover:text-white ",
  destructive && "bg-red-500 text-white  hover:bg-red-600 ",
  !primary && !outline && !destructive && !secondary &&
    "bg-[#060606]/96 text-white ",
  className
)}
      >
       <span className="flex items-center justify-center gap-2 leading-none">
          {value || label}
          {Icon && <Icon size={18} />}
        </span>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;