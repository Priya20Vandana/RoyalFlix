import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const slides = [
    {
      id: 1,
      title: "The Empress",
      label: "A ROYALFLIX ORIGINAL",
      description:
        "Power. Love. Sacrifice. Follow the extraordinary journey of a young woman who reshaped an empire and changed history forever.",
      image: "/theempress.png",
    },
    {
      id: 2,
      title: "The Crown",
      label: "A STORY OF POWER AND DUTY",
      description:
        "Inside the world of the British monarchy, where tradition, responsibility, and personal sacrifice shape a royal legacy.",
      image: "/TheCrown.jpg",
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        label: "A TIMELESS STORY OF LOVE",
        description:
          "In a world shaped by class, reputation, and expectation, Elizabeth Bennet discovers that love can often be found where it is least expected.",
        image: "/hero.jpg",
      }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === slides.length - 1
          ? 0
          : previousSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[currentSlide];

  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${current.image})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-label">{current.label}</p>

        <h1>{current.title}</h1>

        <p className="hero-description">{current.description}</p>

        <div className="hero-buttons">
          <button className="play-btn">
            <span>▶</span>
            Play
          </button>

          <button className="info-btn">
            <span>ⓘ</span>
            More Info
          </button>
        </div>
      </div>

      <div className="hero-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`indicator ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to ${slide.title}`}
          ></button>
        ))}
      </div>

      <div className="hero-tagline">
        <span>ROYAL STORIES</span>
        <span>NEVER FADE</span>
      </div>
    </section>
  );
}

export default Hero;