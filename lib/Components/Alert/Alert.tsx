import { FC, ReactNode } from "react";

interface AlertProps {
	children: ReactNode;
	onClick?: () => void;
	alertStyle?: "info" | "error" | "success" | "warning";
	size?: "base" | "lg" | "sm" | "xs";
	iconOnly?: boolean;
	className?: string;
  }

export const Alert: FC<AlertProps> = ({
	children, onClick,
	alertStyle = 'info',
	size = 'base',
	iconOnly = false,
	className = '',
	...props }) => {

	const baseClass = 'aegov-alert';

	const styleClass = {
		info: 'alert-info',
		error: 'alert-error',
		success: 'alert-success',
		warning: 'alert-warning'
	}[alertStyle];

	const sizeClass = {
		base: 'btn-base',
		lg: 'btn-lg',
		sm: 'btn-sm',
		xs: 'btn-xs'
	}[size];

	const iconClass = iconOnly ? 'btn-icon' : '';
	return (
		<div
			className={`${baseClass} ${styleClass} ${sizeClass} ${iconClass} ${className}`}
			onClick={onClick}
			{...props}
		>
      <div className="alert-content">
			{children}
      </div>
		</div>
	);
};


// import  { FC, ReactNode } from "react";

// interface AlertProps {
//   children: ReactNode;
//   type?: "info" | "warning" | "danger";
// }

// export const Alert: FC<AlertProps> = ({ children, type = "info" }) => {
//   const baseStyle = "px-4 py-2 rounded";
//   const styles = {
//     info: "bg-blue-100 text-blue-700",
//     warning: "bg-yellow-100 text-yellow-700",
//     danger: "bg-red-100 text-red-700",
//   };
//   return <div className={`${baseStyle} ${styles[type]}`}>{children}</div>;
// };
