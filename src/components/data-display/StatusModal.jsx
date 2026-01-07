import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { cn } from "../../utils/Utils";
import { useEffect } from 'react';

export const StatusModal = ({ 
  isOpen, 
  onClose, 
  type = "success", // "success" or "error"
  title, 
  subtitle, 
  description,
  
}) => {
useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Configuration for Success vs Error
  const configs = {
    success: {
      icon: <CheckCircle2 className="text-green-600 w-12 h-12" />,
      iconBg: "bg-green-100",
      btnBg: "bg-green-600 hover:bg-green-700 shadow-green-200",
      accentText: "text-green-600",
      defaultTitle: "Success!",
    },
    error: {
      icon: <AlertCircle className="text-red-600 w-12 h-12" />,
      iconBg: "bg-red-100",
      btnBg: "bg-red-600 hover:bg-red-700 shadow-red-200",
      accentText: "text-red-600",
      defaultTitle: "Failed!",
    }
  };

  const config = configs[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/30 backdrop-blur-md animate-in fade-in duration-300">
      
      <div className="relative bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden transform animate-in zoom-in-95 duration-300">
        
        {/* Close "X" Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 flex flex-col items-center text-center">
          {/* Dynamic Icon Circle */}
          <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mb-6", config.iconBg)}>
            {config.icon}
          </div>

          {/* Text Content */}
          <h2 className="text-2xl font-black text-gray-900 leading-tight">
            {title || config.defaultTitle}
          </h2>
          
          {subtitle && (
            <p className={cn("font-bold mt-1 uppercase tracking-wide text-xs", config.accentText)}>
              {subtitle}
            </p>
          )}
          
          <p className="mt-4 text-gray-500 text-sm leading-relaxed">
            {description}
          </p>

          {/* Action Button */}
          <button
            onClick={onClose}
            className={cn(
              "mt-8 w-full py-4 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg",
              config.btnBg
            )}
          >
            {type === 'success' ? 'Continue' : 'Try Again'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default StatusModal;