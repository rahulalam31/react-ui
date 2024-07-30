import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface AEGovButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  buttonStyle?: "solid" | "outline" | "soft" | "link";
  size?: "base" | "lg" | "sm" | "xs";
  variant?: "primary" | "secondary";
  iconOnly?: boolean;
  disabled?: boolean;
  className?: string;
}

export const AEGovButton: FC<AEGovButtonProps> = ({
  children,
  onClick,
  type = "button",
  buttonStyle = "solid",
  variant = "primary",
  size = "base",
  iconOnly = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClass =
    "inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClass = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500",
  }[variant];

  const styleClass = {
    solid: "border border-solid",
    outline:
      "border-2 border-solid border-blue-500 bg-white text-blue-500 hover:text-white",
    soft: "bg-opacity-50",
    link: "underline text-blue-600 hover:text-blue-700",
    undefined: "",
  }[buttonStyle];

  const sizeClass = {
    base: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    sm: "px-3 py-1.5 text-sm",
    xs: "px-2 py-1 text-xs",
  }[size];

  const iconClass = iconOnly ? "p-2" : "";

  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass} ${styleClass} ${sizeClass} ${iconClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};