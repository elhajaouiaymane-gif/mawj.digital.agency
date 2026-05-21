"use client";

import { useRef, ReactNode, MouseEvent } from "react";

export default function MagneticButton({
  children,
  className = "",
  as: Component = "button",
  ...props
}: {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`magnetic inline-block transition-transform duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
