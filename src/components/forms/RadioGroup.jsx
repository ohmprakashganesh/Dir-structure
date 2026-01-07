import { forwardRef } from 'react';
import BaseField from './BaseField';

export const RadioGroup = forwardRef(({ label, required, error, options = [], name, ...rest }, ref) => {
  return (
    <BaseField label={label} required={required} error={error}>
      <div className="flex gap-4 mt-1">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              ref={ref}
              name={name}
              value={opt.value}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              {...rest}
            />
            <span className="text-xs font-light text-gray-600">{opt.label}</span>
          </label>
        ))}
      </div>
    </BaseField>
  );
});