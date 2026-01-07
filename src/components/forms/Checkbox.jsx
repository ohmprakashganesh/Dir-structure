import  { forwardRef } from 'react';

export const Checkbox = forwardRef(({ label, required, error, ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          ref={ref}
          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          {...rest}
        />
        <span className="text-xs font-light text-gray-600">{label}</span>
      </label>
      {error && <span className="text-[10px] text-red-500">{error}</span>}
    </div>
  );
});