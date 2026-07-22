"use client";

import {
  ReactNode,
  MouseEvent,
  AnchorHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

interface MagneticButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  strength?: number;
}

export default function MagneticButton({
  children,
  strength = 0.25,
  className = "",
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const updateDevice = () => {
      setEnabled(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  const handleMouseMove = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    if (!enabled || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    buttonRef.current.style.transform = `
      translate(${x * strength}px, ${y * strength}px)
    `;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;

    buttonRef.current.style.transform =
      "translate(0px, 0px)";
  };

  return (
    <a
      ref={buttonRef}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </a>
  );
}