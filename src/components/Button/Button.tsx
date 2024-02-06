/* eslint-disable react-refresh/only-export-components */
import { ButtonHTMLAttributes, ReactNode, memo } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  handleClick?: () => void;
  children: ReactNode;
  variant?: "text" | "contained";
};

const Button = ({
  children,
  handleClick,
  className,
  variant = "contained",
  ...props
}: Props) => {
  return (
    <button
      onClick={handleClick}
      {...props}
      className={`${
        variant === "text"
          ? "bg-transparent hover:outline-none hover:text-lime-600"
          : "bg-lime-600 disabled:opacity-50"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default memo(Button);
