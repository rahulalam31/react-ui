import type { FC, ReactNode, MouseEventHandler } from "react";
import "./button.css";

interface ButtonProps {
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	type: ReactNode;
	style: ReactNode;
	variant: ReactNode;
	size: ReactNode;
	iconOnly: ReactNode;
	disabled: ReactNode;
	className: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, onClick, type = 'button', style = 'solid', variant = 'primary', size = 'base', iconOnly = false, disabled = false, className = '', ...props }) => {

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
	}[style];

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

