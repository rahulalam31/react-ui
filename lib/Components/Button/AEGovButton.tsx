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
  const baseClass = "aegov-btn";

  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  }[variant];

  const styleClass = {
    solid: "aegov-btn",
    outline: "aegov-btn btn-outline",
    soft: "aegov-btn btn-soft",
    link: "aegov-btn btn-link",
  }[buttonStyle];

  const sizeClass = {
    base: "btn-base",
    lg: "btn-lg",
    sm: "btn-sm",
    xs: "btn-xs",
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
