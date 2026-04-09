import { useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { SiReactiveresume } from "react-icons/si";

interface Grid {
  rows: number;
  cols: number;
}

const DEFAULT_GRIDS: Record<string, Grid> = {
  "2x2": { rows: 2, cols: 2 },
  "3x3": { rows: 3, cols: 3 },
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
};

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;

interface PixelImageProps {
  src: string[]; // ✅ changed to array
  grid?: PredefinedGridKey;
  customGrid?: Grid;
  grayscaleAnimation?: boolean;
  pixelFadeInDuration?: number;
  maxAnimationDelay?: number;
  colorRevealDelay?: number;
  showReplayButton?: boolean;
}

export const PixelImage = ({
  src,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  customGrid,
  showReplayButton = false,
}: PixelImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [key, setKey] = useState(0);

  // ✅ new state for image index
  const [currentIndex, setCurrentIndex] = useState(0);

  const MIN_GRID = 1;
  const MAX_GRID = 16;

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (grid?: Grid) => {
      if (!grid) return false;
      const { rows, cols } = grid;
      return (
        Number.isInteger(rows) &&
        Number.isInteger(cols) &&
        rows >= MIN_GRID &&
        cols >= MIN_GRID &&
        rows <= MAX_GRID &&
        cols <= MAX_GRID
      );
    };

    return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid];
  }, [customGrid, grid]);

  const resetAnimation = () => {
    setIsVisible(false);
    setShowColor(false);

    // ✅ move to next image (loop back)
    setCurrentIndex((prev) => (prev + 1) % src.length);

    setKey((prev) => prev + 1);
  };

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    const colorTimeout = setTimeout(() => {
      setShowColor(true);
    }, colorRevealDelay + 50);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(colorTimeout);
    };
  }, [colorRevealDelay, key]);

  const pieces = useMemo(() => {
    const total = rows * cols;

    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`;

      const delay = ((index * 23) % total) * (maxAnimationDelay / total);

      return {
        clipPath,
        delay,
      };
    });
  }, [rows, cols, maxAnimationDelay]);

  return (
    <div className="relative h-92 w-72 select-none md:h-126 md:w-86 z-10">
      <div
        className="relative h-92 w-72 md:h-126 md:w-86"
        key={key}
      >
        {pieces.map((piece, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all ease-out",
              isVisible ? "opacity-100" : "opacity-0",
            )}
            style={{
              clipPath: piece.clipPath,
              transitionDelay: `${piece.delay}ms`,
              transitionDuration: `${pixelFadeInDuration}ms`,
            }}
          >
            <img
              src={src[currentIndex]} // ✅ use current image
              alt={`Pixel piece ${index + 1}`}
              draggable={false}
              width={400}
              height={400}
              className={cn(
                "size-full object-cover",
                grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale"),
              )}
              style={{
                transform: "scale(1.02)",
                transition: grayscaleAnimation
                  ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                  : "none",
              }}
            />
          </div>
        ))}
      </div>

      {showReplayButton && (
        <button
          type="button"
          onClick={resetAnimation}
          className="absolute bottom-2 right-2 z-10 rounded-lg text-black text-xl p-2 transition-opacity hover:scale-110 hover:cursor-pointer bg-white/80 backdrop-blur-md opacity-80 hover:opacity-100"
        >
          <SiReactiveresume />
        </button>
      )}
    </div>
  );
};