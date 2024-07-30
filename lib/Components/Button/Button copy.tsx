import type { ReactNode, MouseEventHandler } from "react"
import PropTypes from 'prop-types';
import "./button.css"
// interface ButtonProps {
//     children: ReactNode;
//     onClick?: MouseEventHandler<HTMLButtonElement>;
// }
const Button = ({ children = '', onClick, type = 'button', style = 'solid', variant = 'primary', size = 'base', iconOnly = false, disabled = false, className = '', ...props  }) => {

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
    return(
    <button
    // type={type} 
    className={`${baseClass} ${variantClass} ${styleClass} ${sizeClass} ${iconClass} ${className}`} 
    onClick={onClick} 
    disabled={disabled} 
    {...props}>{children}</button>)
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    style: PropTypes.oneOf(['solid', 'outline', 'soft', 'link']),
    size: PropTypes.oneOf(['base', 'lg', 'sm', 'xs']),
    variant: PropTypes.oneOf(['primary', 'secondary']),
    iconOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
  };

export {Button};