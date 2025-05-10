import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function AutoSliderCard() {
  const slides = [
    {
      category: "MANAGEMENT",
      title:
        "AI in Business Management: Improving Efficiency and Decision Making",
      author: "Ethan Caldwell",
      date: "July 7, 2024",
      image: "/logo2.jpg",
    },
    {
      category: "TECHNOLOGY",
      title: "The Future of Remote Work: Trends and Best Practices",
      author: "Sarah Johnson",
      date: "August 12, 2024",
      image: "/kunal.jpg",
    },
    {
      category: "INNOVATION",
      title: "Sustainable Business Models for the Modern Economy",
      author: "Alex Rivera",
      date: "September 3, 2024",
      image: "/kunal.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Start auto-sliding
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 5000);

    // Clean up interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div
      className="w-full bg-neutral-700 rounded-xl md:rounded-3xl overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-80 md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
            height={100}
            width={100}
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
              <div className="bg-white/20 text-white text-xs px-2 py-1 inline-block rounded mb-2">
                {slide.category}
              </div>
              <h3 className="text-base md:text-xl font-semibold text-white mb-1">
                {slide.title}
              </h3>
              <p className="text-xs md:text-sm text-white/80">
                {slide.author} on {slide.date}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation buttons - visible on hover */}
        <button
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 z-20 opacity-0 hover:opacity-100 transition-opacity group-hover:opacity-100"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 z-20 opacity-0 hover:opacity-100 transition-opacity group-hover:opacity-100"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
