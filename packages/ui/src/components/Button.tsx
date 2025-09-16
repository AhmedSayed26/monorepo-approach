"use client";

import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  const style: React.CSSProperties =
    variant === "primary"
      ? { background: "#2563eb", color: "white", border: 0, padding: "8px 12px", borderRadius: 6 }
      : { background: "#e5e7eb", color: "#111827", border: 0, padding: "8px 12px", borderRadius: 6 };
  return <button style={style} {...props} />;
};
