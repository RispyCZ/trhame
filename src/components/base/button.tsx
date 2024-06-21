import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { className?: string, children: React.ReactNode }>(({ children, className, ...props }, ref) => {
  return (
    <button ref={ref} className={cn(
      "group relative inline-block focus:outline-none border-transparent",
      className
    )}
      {...props}
    >
      <span
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-emerald-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
      ></span>

      <span
        className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
      >
        {children}
      </span>
    </button>
  )
})