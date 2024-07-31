import { FC, ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClick?: () => void;
  alertStyle?: "info" | "error" | "success" | "warning";
  iconImage?: "info" | "error" | "success" | "warning";
  className?: string;
}

export const Alert: FC<AlertProps> = ({
  children, onClick,
  alertStyle = 'info',
  iconImage = '',
  className = '',
  ...props }) => {

  const baseClass = 'aegov-alert';

  const styleClass = {
    info: 'alert-info',
    error: 'alert-error',
    success: 'alert-success',
    warning: 'alert-warning'
  }[alertStyle];

  const iconClass = {
    info: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true" /><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="124" cy="84" r="12" /></svg>
    ),
    error: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true" /><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z" /></svg>
    ),
    success: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true" /><path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M80,104l40-80a32,32,0,0,1,32,32V80h64a16,16,0,0,1,15.87,18l-12,96A16,16,0,0,1,204,208H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
    ),
    warning: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true" /><path d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="128" y1="144" x2="128" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="128" cy="180" r="12" /></svg>
    ),
  }[iconImage];
  return (
    <div
      role="alert"
      className={`${baseClass} ${styleClass} ${iconClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="alert-icon">
        {iconClass}
      </div>
      <div className="alert-content">
        {children}
      </div>
    </div>
  );
};

