import { useState, useRef, TouchEvent, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselSlide {
  image: string;
  label: string;
}

interface TestingCarouselProps {
  slides: CarouselSlide[];
  className?: string;
}

const TestingCarousel = ({ slides, className }: TestingCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const go = useCallback((idx: number) => {
    setCurrent(idx);
    setDragOffset(0);
  }, []);

  const prev = useCallback(() => {
    go(current === 0 ? slides.length - 1 : current - 1);
  }, [current, slides.length, go]);

  const next = useCallback(() => {
    go(current === slides.length - 1 ? 0 : current + 1);
  }, [current, slides.length, go]);

  const onTouchStart = (e: TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (touchStart.current === null) return;
    const delta = e.touches[0].clientX - touchStart.current;
    setDragOffset(delta);
  };

  const onTouchEnd = () => {
    if (Math.abs(dragOffset) > 60) {
      if (dragOffset < 0) next();
      else prev();
    }
    setDragOffset(0);
    touchStart.current = null;
  };

  if (slides.length === 0) return null;

  const containerWidth = containerRef.current?.offsetWidth ?? 0;
  const dragPercent = containerWidth ? (dragOffset / containerWidth) * 100 : 0;

  return (
    <div className={cn("relative", className)}>
      {/* Track container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl bg-muted/40"
        style={{ height: "clamp(260px, 45vw, 480px)" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Sliding track */}
        <div
          className="flex h-full transition-transform duration-500 ease-out will-change-transform"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(calc(-${(current * 100) / slides.length}% + ${dragPercent / slides.length}%))`,
            ...(dragOffset !== 0 ? { transitionDuration: "0ms" } : {}),
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative h-full flex items-center justify-center"
              style={{ width: `${100 / slides.length}%` }}
            >
              <img
                src={slide.image}
                alt={slide.label}
                className="max-w-full max-h-full object-contain select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Label overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent px-4 py-3 pointer-events-none">
          <p className="text-background text-xs sm:text-sm font-medium">{slides[current].label}</p>
        </div>

        {/* Nav arrows — always visible on mobile */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-foreground/40 hover:bg-foreground/60 text-background rounded-full p-1.5 sm:p-2 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-foreground/40 hover:bg-foreground/60 text-background rounded-full p-1.5 sm:p-2 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots + counter */}
      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={cn(
                "rounded-full transition-all duration-300",
                i === current
                  ? "w-6 h-2 bg-accent"
                  : "w-2 h-2 bg-muted-foreground/25 hover:bg-muted-foreground/40"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2">
            {current + 1}/{slides.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default TestingCarousel;
