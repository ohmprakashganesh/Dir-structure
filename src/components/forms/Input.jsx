import  { forwardRef } from 'react'
import BaseField from './BaseField';

export const Input = forwardRef( 
    ({label,required,error,type="text", variant="default",...rest},
    ref)=>{
   const activeVariant = error ? "error" : (variant || "default");
   // layout/sizing-spacing/typography/borders&shapes/interactions
const baseStyle = "w-full px-3 py-3 md:py-2 lg:py-2 font-light text-xs text-gray-800 border border-gray-500 rounded-md transition-colors focus:outline-none focus:border-gray-600 focus:ring-[0.5px] focus:ring-gray-600";  
      const variants = {
  default: " border-gray-500/40  focus:ring-blue-400",
  success: " border-green-500/40 focus:ring-green-400",
  error: " border-red-300 focus:ring focus:ring-red-400",
};
        return(
            <BaseField label={label} required={required} error={error} >
                <input
                 ref={ref}
                 type={type}
                 className={`${baseStyle} ${variants[activeVariant]}`}
                 {...rest}
                 />
           </BaseField>

        )
    } )