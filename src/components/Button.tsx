import { type ReactNode, useMemo } from "react";
import { cn } from "../utils.ts";

export const Button = ({
  children,
  isDisabled = false,
  onClick,
  variant = "primary",
  type = "button",
}: {
  isDisabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}) => {
  const className = useMemo(
    () =>
      cn(
        "flex gap-2 justify-center items-center px-4 py-2 rounded-lg cursor-pointer active:opacity-40 disabled:opacity-40",
        variant === "primary" && "bg-blue-500 text-white min-w-48",
        variant === "secondary" && "border-1 border-neutral-300",
      ),
    [variant],
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
