import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-slate-900 text-white shadow-[0_8px_16px_-6px_rgba(15,23,42,0.6)] hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(15,23,42,0.8)] border border-slate-700',
  secondary:
    'bg-emerald-500 text-white shadow-[0_8px_16px_-6px_rgba(16,185,129,0.5)] hover:bg-emerald-600 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(16,185,129,0.7)] border border-emerald-400',
  outline: 'border border-slate-300 bg-white/50 backdrop-blur-sm text-slate-900 hover:border-emerald-400 hover:bg-emerald-50/50 hover:-translate-y-0.5 hover:shadow-sm',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  icon,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-bold tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {variant === 'primary' || variant === 'secondary' ? (
        <span className="absolute inset-0 w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
      ) : null}
      {icon ? <span className="relative z-10 flex h-4 w-4 items-center justify-center transition-transform duration-300 group-hover:scale-110">{icon}</span> : null}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
