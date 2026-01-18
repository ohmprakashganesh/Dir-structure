import { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, RotateCcw } from "lucide-react";

const CustomDatePicker = ({ value, onChange, error, label, className, size = 18 }) => {
  const calendarRef = useRef(null);

  const openDatePicker = () => {
    calendarRef.current.setOpen(true);
  };
  return (
    <div className="flex flex-col gap-1 w-full ">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative w-full " >
        {/* Calendar Icon - Only shows if no date is selected */}
        {!value && (
          <Calendar
            size={size}
            className={className}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 50,
              cursor: "pointer"
            }}
            onClick={openDatePicker}
          />
        )}

        {/* Date Picker */}
       <ReactDatePicker
  ref={calendarRef}
  selected={value}
  onChange={(d) =>{
    const formattedDate=d?d.toISOString().split("T")[0]:"";
   onChange(formattedDate)}}
  placeholderText="Select date"
  wrapperClassName="w-full"
  className={`w-full p-2 pr-10 border active:border-gray-600/50 rounded-md ${
    error ? 'border-red-500' : 'border-gray-300'
  }`}
/>
        {/* Reset Icon - Shows when a date is selected */} 
        {value && (
          <RotateCcw
            size={16}
            className="text-red-500"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              zIndex: 40
            }}
            onClick={() => onChange(null)} // Clears the value in Form state
          />
        )}
      </div>
      
      {/* Error Message */}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CustomDatePicker;