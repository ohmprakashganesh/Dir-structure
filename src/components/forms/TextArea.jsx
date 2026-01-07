import  { forwardRef } from 'react';
import BaseField from './BaseField';

export const TextArea = forwardRef(({ label, required, error, variant = "default", ...rest }, ref) => {
  const baseStyle = "px-3 py-2 font-light text-gray-600 text-xs border border-gray-500 rounded-md focus:outline-none focus:ring-[1px]  w-full transition-colors min-h-[100px]";
  const currentVariant=error?"error":(variant || "default")
  const variants = {
    default: "border-gray-500/40 focus:ring-gray-500 ",
    success: " border-green-500/40 focus:outline-none  focus:ring-gray-600",
    error: " border-red-300 focus:ring focus:ring-red-400",
  };
  return (
    <BaseField label={label} required={required} error={error}>
      <textarea ref={ref} className={`${baseStyle} ${variants[currentVariant]}`} {...rest} />
    </BaseField>
  );
});