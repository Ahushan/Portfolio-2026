import React, { useEffect, useRef, useState } from "react";
import "../../styles/v-curved-arrow.css";

type TooltipPosition =
  | "top" | "top-start" | "top-end"
  | "bottom" | "bottom-start" | "bottom-end"
  | "left" | "left-start" | "left-end"
  | "right" | "right-start" | "right-end";

type ArrowVariant = "diamond" | "triangle" | "fancy" | "v-curve";

interface InViewNotificationProps {
  message?: string;
  icon?: React.ReactNode;
  delay?: number;
  className?: string;
  outerClassName?: string;
  messageDivClassName?: string;
  arrowClassName?: string;
  showTooltipCurve?: boolean;
  tooltipPosition?: TooltipPosition;
  arrowVariant?: ArrowVariant;
  arrowColor?: string; // New prop for arrow color
  children?: React.ReactNode;
}

const InViewNotification: React.FC<InViewNotificationProps> = ({
  message,
  icon,
  delay = 0,
  className = "",
  outerClassName = "",
  messageDivClassName = "",
  arrowClassName = "",
  showTooltipCurve = false,
  tooltipPosition = "top",
  arrowVariant = "fancy",
  arrowColor = "#fff",
  children: Children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const isVCurve = arrowVariant === "v-curve" && showTooltipCurve;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay, hasTriggered]);

  // spacing
  const positionStyles: Record<TooltipPosition, string> = {
    top: "mb-3", "top-start": "mb-3", "top-end": "mb-3",
    bottom: "mt-3", "bottom-start": "mt-3", "bottom-end": "mt-3",
    left: "mr-3", "left-start": "mr-3", "left-end": "mr-3",
    right: "ml-3", "right-start": "ml-3", "right-end": "ml-3",
  };

  // arrow base positions (non v-curve)
  const arrowBase: Record<TooltipPosition, string> = {
    top: "absolute bottom-[-6px] left-1/2 -translate-x-1/2",
    "top-start": "absolute bottom-[-6px] left-4",
    "top-end": "absolute bottom-[-6px] right-4",

    bottom: "absolute top-[-6px] left-1/2 -translate-x-1/2",
    "bottom-start": "absolute top-[-6px] left-4",
    "bottom-end": "absolute top-[-6px] right-4",

    left: "absolute right-[-6px] top-1/2 -translate-y-1/2",
    "left-start": "absolute right-[-6px] top-3",
    "left-end": "absolute right-[-6px] bottom-3",

    right: "absolute left-[-6px] top-1/2 -translate-y-1/2",
    "right-start": "absolute left-[-6px] top-3",
    "right-end": "absolute left-[-6px] bottom-3",
  };

  // non v-curve arrows
  const getArrow = () => {
    if (isVCurve) return null;

    const base = arrowBase[tooltipPosition];

    // fancy
    if (arrowVariant === "fancy") {
      return (
        <div
          className={`${base} w-4 h-4 ${messageDivClassName} ${arrowClassName}`}
          style={{
            clipPath:
              tooltipPosition.startsWith("top")
                ? "polygon(50% 100%, 0 0, 100% 0)"
                : tooltipPosition.startsWith("bottom")
                ? "polygon(50% 0%, 0 100%, 100% 100%)"
                : tooltipPosition.startsWith("left")
                ? "polygon(100% 50%, 0 0, 0 100%)"
                : "polygon(0 50%, 100% 0, 100% 100%)",
          }}
        />
      );
    }

    // diamond
    if (arrowVariant === "diamond") {
      return (
        <div
          className={`${base} w-3 h-3 rotate-45 ${messageDivClassName} ${arrowClassName}`}
        />
      );
    }

    // triangle
    return (
      <div
        className={`
          ${base}
          w-0 h-0 border-8 border-transparent
          ${tooltipPosition.startsWith("top") && "border-t-white"}
          ${tooltipPosition.startsWith("bottom") && "border-b-white"}
          ${tooltipPosition.startsWith("left") && "border-l-white"}
          ${tooltipPosition.startsWith("right") && "border-r-white"}
          ${arrowClassName}
        `}
      />
    );
  };

  return (
    <div ref={ref} className={`overflow-visible ${outerClassName}`}>
      <div
        className={`
          relative inline-block
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          ${positionStyles[tooltipPosition]}
          ${className}
        `}
      >
        {/* 🔥 Tooltip wrapper (IMPORTANT CHANGE) */}
        <div
          className={`${isVCurve ? "tooltip-v" : ""}`}
          data-tooltip-position={tooltipPosition}
          style={
            {
              "--tooltip-bg": arrowColor,
            } as React.CSSProperties
          }
        >
          {/* 🔥 CONTENT (must be above arrows) */}
          <div
            className={`
              flex items-center gap-3 px-5 py-3 rounded-xs
              relative z-10
              ${messageDivClassName}
            `}
          >
            {icon && <span>{icon}</span>}
            <span>{message}</span>
            {Children}
          </div>
        </div>

        {/* other arrows */}
        {!isVCurve && getArrow()}
      </div>
    </div>
  );
};

export default InViewNotification;