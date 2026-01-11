import React from "react";
import { cn } from "../../utils/Utils";

export  const Table = ({ children, className }) => (
  <div className="w-full overflow-x-auto rounded-lg border  border-blue-300">
    <table className={cn("w-full text-left text-sm", className)}>{children}</table>
  </div>
);
export const TableHeader = ({ children, className }) => (
  <thead className={cn("bg-gray-50 border-b border-gray-200 text-gray-600 font-semibold uppercase text-[11px] tracking-wider", className)}>
    {children}
  </thead>
);

export const TableRow = ({ children, className }) => (
  <tr className={cn("border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors", className)}>
    {children}
  </tr>
);

export const TableCell = ({ children, className, isHeader = false }) => {
  const Tag = isHeader ? "th" : "td";
  return (
    <Tag className={cn("px-4 py-4 align-middle", className)}>
      {children}
    </Tag>
  );
};

import { BsDatabase } from "react-icons/bs";

export const EmptyState = ({ 
  title = "No data found", 
  description = "There are no records to display at this time.",
  icon: Icon = BsDatabase,
  action 
}) => (
  <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-lg border-2 border-dashed border-gray-100">
    <div className="p-3 bg-gray-50 rounded-full mb-4">
      <Icon size={32} className="text-gray-400" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-500 max-w-xs mt-1">{description}</p>
    {action && <div className="mt-6">{action}</div>}
  </div>
);
export default Table;