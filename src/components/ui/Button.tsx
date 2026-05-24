"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  external?: boolean;
}

const variants = {
  primary:   "bg-brand-navy text-white hover:bg-brand-navy-mid border border-brand-navy",
  secondary: "bg-transparent text-brand-navy border border-brand-navy hover:bg-brand-navy hover:text-white",
  gold:      "bg-brand-gold text-brand-navy border border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark",
  ghost:     "bg-transparent text-brand-navy hover:text-brand-gold underline-offset-4 hover:underline border border-transparent",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className,
  showArrow = false,
  type = "button",
  disabled = false,
  loading = false,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded font-medium",
    "transition-all duration-200 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
      {showArrow && !loading && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(classes, "group")}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(classes, "group")}
    >
      {content}
    </button>
  );
}
