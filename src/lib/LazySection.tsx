import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
}

const LazySection = ({ children }: LazySectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when 20% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // load only once
        }
      },
      {
        threshold: 0.2,
        rootMargin: "100px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection;