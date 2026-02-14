import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 font-bold border-2 border-black transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none whitespace-nowrap";
  
  const variants = {
    primary: "bg-yellow-400 text-black brutal-shadow hover:bg-yellow-300",
    secondary: "bg-blue-400 text-black brutal-shadow hover:bg-blue-300",
    danger: "bg-red-400 text-black brutal-shadow hover:bg-red-300",
    outline: "bg-white text-black brutal-shadow hover:bg-gray-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;