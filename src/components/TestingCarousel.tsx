import { useState, useRef, TouchEvent } from "react";
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
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchDelta = useRef<number>(0);
  const [swipeOffset, setSwipeOffset] = useState(0);

  const go = (idx: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prev = () => go(current === 0 ? slides.length - 1 : current - 1, "right");
  const next = () => go(current === slides.length - 1 ? 0 : current + 1, "left");

  const onTouchStart = (e: TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (touchStart.current === null) return;
    touchDelta.current = e.touches[0].clientX - touchStart.current;
    setSwipeOffset(touchDelta.current * 0.3);
  };

  const onTouchEnd = () => {
    setSwipeOffset(0);
    if (Math.abs(touchDelta.current) > 50) {
      if (touchDelta.current < 0) next();
      else prev();
    }
    touchStart.current = null;
    touchDelta.current = 0;
  };

  if (slides.length === 0) return null;

  return (
    <div className={cn("relative group", className)}>
      {/* Fixed-height container */}
      <div
        className="relative overflow-hidden rounded-lg bg-secondary/20"
        style={{ height: "clamp(280px, 50vw, 500px)" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={slides[current].image}
          alt={slides[current].label}
          className={cn(
            "absolute inset-0 w-full h-full object-contain transition-all duration-300 ease-out",
            isAnimating && direction === "left" && "animate-slide-in-left",
            isAnimating && direction === "right" && "animate-slide-in-right"
          )}
          style={{ transform: swipeOffset ? `translateX(${swipeOffset}px)` : undefined }}
        />

        {/* Label overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
          <p className="text-white text-sm font-medium">{slides[current].label}</p>
        </div>

        {/* Nav arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? "left" : "right")}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all",
                i === current
                  ? "bg-accent scale-110"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      <p className="text-center text-xs text-muted-foreground mt-1">
        {current + 1} / {slides.length}
      </p>
    </div>
  );
};

export default TestingCarousel;
