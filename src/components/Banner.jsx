import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import ArrowImage from '../assets/images/Vector.svg';
import { bikes, specs } from '../data/bikes.js';

const HEADLINE = "let's ride!";

export default function Banner() {
  const container = useRef(null);
  const [activeId, setActiveId] = useState(bikes[0].id);

  const activeBike = bikes.find((bike) => bike.id === activeId) ?? bikes[0];

  const { contextSafe } = useGSAP(
    () => {
      // Entrance timeline.
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.headline span', {
          yPercent: 120,
          duration: 0.6,
          stagger: 0.05,
          ease: 'back.out(1.7)',
        })
        .from('.title', { xPercent: -120, autoAlpha: 0, duration: 0.9 }, '-=0.3')
        .from('.line', { scaleX: 0, duration: 0.6 }, '-=0.4')
        .from('.subtitle', { y: 40, autoAlpha: 0, duration: 0.6 }, '-=0.3')
        .from(
          '.swatch',
          { y: 30, autoAlpha: 0, stagger: 0.12, duration: 0.5 },
          '-=0.2'
        )
        .from('.buy-now-part', { y: 30, autoAlpha: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-bike', { xPercent: 60, autoAlpha: 0, duration: 1 }, '<0.1');

      // Continuous idle float on the hero bike.
      gsap.to('.bike-float', {
        y: -18,
        duration: 2.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Parallax drift as the page scrolls.
      gsap.to('.bike-parallax', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Scroll-reveal for the spec cards.
      gsap.from('.features-card', {
        y: 60,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 85%',
        },
      });
    },
    { scope: container }
  );

  const handleSelect = contextSafe((id) => {
    if (id === activeId) return;
    setActiveId(id);
    gsap.fromTo(
      '.hero-bike',
      { autoAlpha: 0, scale: 0.92, xPercent: 8 },
      { autoAlpha: 1, scale: 1, xPercent: 0, duration: 0.6, ease: 'power2.out' }
    );
  });

  return (
    <section className="banner-section" ref={container} id="home">
      <div className="container">
        <div className="banner-grid">
          <div className="left-section">
            <div className="h2-container">
              <h2 className="headline" aria-label={HEADLINE}>
                {HEADLINE.split('').map((char, index) => (
                  <span key={index} aria-hidden="true">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h2>
            </div>

            <h1 className="title">e-bike</h1>
            <div className="line" />
            <h4 className="subtitle">
              Simple and sleek design with users in mind.
            </h4>

            <div className="description-section">
              <div
                className="choose-color"
                role="radiogroup"
                aria-label="Choose a bike colour"
              >
                {bikes.map((bike) => (
                  <label
                    key={bike.id}
                    className={`swatch${activeId === bike.id ? ' is-active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="bike-color"
                      value={bike.id}
                      checked={activeId === bike.id}
                      onChange={() => handleSelect(bike.id)}
                    />
                    <img src={bike.image} alt={bike.name} />
                  </label>
                ))}
              </div>

              <div className="buy-now-part">
                <button type="button" className="buy-now">
                  <span className="buy-now__icon">
                    <img src={ArrowImage} alt="" />
                  </span>
                  <span className="buy-now__label">
                    <h3>Buy Now</h3>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="banner-right">
            <div className="bike-parallax">
              <div className="bike-float">
                <img
                  className="hero-bike"
                  src={activeBike.image}
                  alt={`${activeBike.name} e-bike`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          {specs.map((spec) => (
            <article className="features-card" key={spec.label}>
              <div className="features-card__value">
                {spec.value}
                {spec.unit && <span>{spec.unit}</span>}
              </div>
              <p>{spec.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
