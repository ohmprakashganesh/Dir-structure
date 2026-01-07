import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export const DropDown = ({ label, options, value, onChange, error }) => {
  // Find the current selected option object based on the value from RHF
  const selectedOption = options.find(opt => opt.value === value) || null;

  const buttonStyle = `w-full px-3 py-3 md:py-2 lg:py-2 text-left bg-white font-light text-xs text-gray-800 border rounded-md transition-colors focus:outline-none focus:ring-[0.5px] ${
    error ? "border-red-300 focus:ring-red-400" : "border-gray-500/40 focus:ring-gray-600"
  }`;
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-xs font-bold text-gray-700">{label}</label>}
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className={buttonStyle}>
            <span className="block truncate">
              {selectedOption ? selectedOption.label : "Select Country"}
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* THIS IS THE ROUNDED WINDOW */}
            <ListboxOptions className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-xs shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-100">
              {options.map((opt) => (
                <ListboxOption
                  key={opt.value}
                  value={opt.value}
                  className={({ active, selected }) =>
                    `relative cursor-pointer select-none py-2.5 px-4 transition-colors ${
                      active ? 'bg-blue-50 text-blue-900' : 'text-gray-900'
                    } ${selected ? 'font-medium bg-blue-100' : ''}`
                  }
                >
                  {opt.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
      {error && <p className="text-[10px] text-red-500 mt-1">{error}</p>}
    </div>
  );
};