// // Source - https://stackoverflow.com/a/59761563
// // Posted by Enes Kirimi, modified by community. See post 'Timeline' for change history
// // Retrieved 2026-04-01, License - CC BY-SA 4.0

// import * as React from 'react';
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// interface DateConstructor  {
//     startDate: Date;
// } 

// export class DateSelector extends React.Component<{}, DateConstructor> {
//     constructor(props) {
//         super(props);
//         this.state = {
//             startDate: new Date()
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }

//     private handleChange(date) {
//         console.log('date is here!', date);
//         this.setState({
//             startDate: date
//         });
//     }

//     public render() {
//         const { startDate } = this.state;
//         return (
//             <DatePicker
//                 dateFormat="dd/MM/yyyy"
//                 selected={startDate} 
//                 onChange={this.handleChange}
//             />
//         )
//     }
// }









import { useState } from "react";
import DatePicker from "react-datepicker";

// Still required for the core positioning logic
import "react-datepicker/dist/react-datepicker.css";

interface DateSelectorProps {
  value: Date | null|undefined ;
  onChange: (date: Date | null) => void;
  label:String;
  placeholder:string;
}

export const DateSelector: React.FC<DateSelectorProps> = ({value,onChange,label,placeholder}) => {

  return (
    <div className="flex  items-center  max-w-sm">   
      <div className="relative">
        <DatePicker
          selected={value}
          placeholderText={placeholder}
          onChange={(date: Date | null) => onChange(date)}
          dateFormat="dd/MM/yyyy"
          // Styling the main input field
          className="w-full min-w-32 h-11    px-4 cursor-pointer py-2  border bg-white  rounded-md border-gray-900 shadow-sm 
                     focus:ring-1
  focus:ring-blue-200 focus:border-blue-100 outline-none transition-all duration-200 text-gray-800 "
          
          // Styling the floating calendar container
          calendarClassName="!bg-white !border-gray-200 !shadow-2xl !rounded-xl !p-2 !font-sans"
          
          // Logic for styling specific day states
          dayClassName={(date) => 
            "rounded-full transition-all hover:!bg-blue-50 hover:!text-blue-600"
          }
          
          // Additional features for a "Proper" design
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={10}
          prevMonthButtonLabel="<"
          nextMonthButtonLabel=">"
        />
        
        {/* Calendar Icon Overlay */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};



//  using method 
  <DateSelector
          onChange={(date) => { if (date) addFrom(date.toString()); }}
          value={new Date()}
          placeholder="Start Date"
          label="From"
        />