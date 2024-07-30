import  { FC, ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  type?: "info" | "warning" | "danger";
}

export const Alert: FC<AlertProps> = ({ children, type = "info" }) => {
  const baseStyle = "px-4 py-2 rounded";
  const styles = {
    info: "bg-blue-100 text-blue-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };
  return <div className={`${baseStyle} ${styles[type]}`}>{children}</div>;
};
