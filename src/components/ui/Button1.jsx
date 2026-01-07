import { FaIcons } from "react-icons/fa";
import { cn } from "../../utils/Utils";

 export const Button1 = ({
  className = "",
  colorVariant = "blue", // default variant
  children,
  icon: Icon = FaIcons,// allow custom icons
  ...props
}) => {
  // Define color maps
  const bgColors = {
    blue: "bg-blue-900",
    red: "bg-red-700",
    green: "bg-green-600",
    black: "bg-black"
  };

  const borderColors = {
    blue: "border-blue-900",
    red: "border-red-700",
    green: "border-green-600",
    black: "border-black"
  };

  return (
    <div className='flex justify-center'>
      <button className={cn(
        "group relative min-w-[150px] w-[200px] h-[45px] border",
        borderColors[colorVariant], // Dynamic Border
        "text-black flex items-center overflow-hidden bg-white",
        className
      )}>
        {/* Sliding Background */}
        <div className={cn(
          "absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out",
          bgColors[colorVariant] // Dynamic Sliding BG
        )}></div>

        {/* Icon Section */}
        <div className={cn(
          "relative z-10 w-[30%] h-full flex items-center justify-center text-white",
          bgColors[colorVariant] // Dynamic Icon Box
        )}>
          <Icon size={16} />
        </div>

        <div className="relative z-10 flex items-center h-full w-full font-medium transition-colors duration-300 group-hover:text-white">
          <span className='ml-5'>{children || "Click me"}</span>
        </div>
      </button>
    </div>
  );
};

export default Button1;