import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

export const Button: FC<ButtonProps> = ({
	children, onClick,
	type = 'button',
	buttonStyle = 'solid',
	variant = 'primary',
	size = 'base',
	iconOnly = false,
	disabled = false,
	className = '',
	...props }) => {

	const baseClass = 'aegov-btn';

	const variantClass = {
		primary: '',
		secondary: 'btn-secondary'
	}[variant];

	const styleClass = {
		solid: 'btn-solid',
		outline: 'btn-outline',
		soft: 'btn-soft',
		link: 'btn-link'
	}[buttonStyle];

	const sizeClass = {
		base: 'btn-base',
		lg: 'btn-lg',
		sm: 'btn-sm',
		xs: 'btn-xs'
	}[size];

	const iconClass = iconOnly ? 'btn-icon' : '';
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

