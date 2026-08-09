import { useEffect, useRef, useState } from 'react';

const TOTAL_SLIDES = 3;
const AUTO_SLIDE_TIME = 5000;

export default function MainSlider() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const currentSlideRef = useRef(0);
  const touchStartX = useRef(0);

  const [activeSlide, setActiveSlide] = useState(0);
  const [animateSlide1, setAnimateSlide1] = useState(false);

  /* =========================================================
     GO TO SLIDE
  ========================================================= */

  useEffect(() => {
    if (activeSlide === 0) {
      setAnimateSlide1(false);

      const timer = window.setTimeout(() => {
        setAnimateSlide1(true);
      }, 150);

      return () => window.clearTimeout(timer);
    } else {
      setAnimateSlide1(false);
    }
  }, [activeSlide]);

  const goToSlide = (index: number) => {
    let nextIndex = index;

    /*
      Infinite loop
    */
    if (nextIndex < 0) {
      nextIndex = TOTAL_SLIDES - 1;
    }

    if (nextIndex >= TOTAL_SLIDES) {
      nextIndex = 0;
    }

    currentSlideRef.current = nextIndex;

    setActiveSlide(nextIndex);

    /* =========================================
   SLIDE 1 TEXT ANIMATION
========================================= */

    setAnimateSlide1(false);

    if (nextIndex === 0) {
      window.setTimeout(() => {
        setAnimateSlide1(true);
      }, 400);
    }

    const slideWidth = window.innerWidth;
    const translateX = nextIndex * slideWidth;

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(-${translateX}px, 0, 0)`;

      trackRef.current.style.transition =
        'transform 1500ms cubic-bezier(0.22, 1, 0.36, 1)';
    }
  };

  /* =========================================================
     AUTOMATIC SLIDER + MOUSE WHEEL
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    /*
      AUTOMATIC SLIDE
    */

    const autoSlide = window.setInterval(() => {
      const current = currentSlideRef.current;

      const next = current >= TOTAL_SLIDES - 1 ? 0 : current + 1;

      goToSlide(next);
    }, AUTO_SLIDE_TIME);

    /*
      MOUSE WHEEL
    */

    let wheelLocked = false;

    const handleWheel = (event: WheelEvent) => {
      const rect = section.getBoundingClientRect();

      /*
        Only control the wheel when this slider
        is actually visible on screen.
      */

      const isVisible = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isVisible) {
        return;
      }

      /*
        Prevent multiple slides from jumping
        because of one large wheel event.
      */

      if (wheelLocked) {
        event.preventDefault();
        return;
      }

      event.preventDefault();

      wheelLocked = true;

      const current = currentSlideRef.current;

      if (event.deltaY > 0) {
        /*
          Scroll down:
          Slide 1 -> 2 -> 3 -> 1
        */

        const next = current >= TOTAL_SLIDES - 1 ? 0 : current + 1;

        goToSlide(next);
      } else if (event.deltaY < 0) {
        /*
          Scroll up:
          Slide 3 -> 2 -> 1 -> 3
        */

        const previous = current <= 0 ? TOTAL_SLIDES - 1 : current - 1;

        goToSlide(previous);
      }

      window.setTimeout(() => {
        wheelLocked = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, {
      passive: false
    });

    /*
      CLEANUP
    */

    return () => {
      window.clearInterval(autoSlide);

      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  /* =========================================================
     HANDLE WINDOW RESIZE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      const current = currentSlideRef.current;
      const width = window.innerWidth;

      if (trackRef.current) {
        trackRef.current.style.transition = 'none';

        trackRef.current.style.transform = `translate3d(-${current * width}px, 0, 0)`;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /* =========================================================
     MOBILE TOUCH START
  ========================================================= */

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  /* =========================================================
     MOBILE TOUCH END
  ========================================================= */

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const endX = event.changedTouches[0].clientX;

    const distance = touchStartX.current - endX;

    /*
      Ignore very small movements
    */

    if (Math.abs(distance) < 50) {
      return;
    }

    const current = currentSlideRef.current;

    if (distance > 0) {
      /*
        Swipe LEFT
        1 -> 2 -> 3 -> 1
      */

      goToSlide(current + 1);
    } else {
      /*
        Swipe RIGHT
        1 -> 3 -> 2 -> 1
      */

      goToSlide(current - 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[#D90B18]
      "
    >
      {/* =====================================================
          HORIZONTAL TRACK
      ===================================================== */}

      <div
        ref={trackRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="
          flex
          h-full
          w-max
          touch-pan-y
        "
        style={{
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        {/* ===================================================
            SLIDE 1
        =================================================== */}

        <div
          className="
            relative
            h-screen
            w-screen
            shrink-0
            overflow-hidden
            bg-[#D90B18]
          "
        >
          {/* =================================================
              VIDEO
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-10
              w-[88vw]
              max-w-[1000px]
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-2xl
              md:w-[62vw]
              lg:w-[56vw]
            "
          >
            <video
              className="
                block
                aspect-[1.8/1]
                h-auto
                w-full
                object-cover
              "
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/images/galleysample.mp4" type="video/mp4" />
            </video>

            {/* 15% DARK VIDEO OVERLAY */}

            <div
              className="
              pointer-events-none
              absolute
              inset-0
              z-10
              rounded-2xl
              bg-black/15
              "
            />

            {/* CENTER HERO TEXT */}
            <h1
              className={`
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-30
              w-[90%]
              -translate-x-1/2
              -translate-y-1/2
              text-center
              font-semibold
              uppercase
              leading-[0.9]
              tracking-[-0.05em]
              text-[#f7d9b0]
              text-[2rem]
              sm:text-[2.5rem]
              md:text-[2rem]
              lg:text-[4rem]
              xl:text-[5rem]
              transition-all
              duration-[1300ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]

              ${
                animateSlide1
                  ? 'scale-100 opacity-100'
                  : 'translate-y-[80px] scale-[1.25] opacity-0'
              }
            `}
            >
              A Taste of The Galley
            </h1>
          </div>

          {/* =================================================
              BOTTOM TEXT
          ================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              top-[67%]
              left-0
              z-30
              w-full
              text-center
              sm:bottom-[5%]
              "
          >
            <p
              className="
                mx-auto 
                mt-1
                w-[90vw] 
                max-w-[900px] 
                text-center 
                text-[10px] 
                font-medium 
                leading-[1.6] 
                tracking-[0.12em] 
                text-[#FFE5C2] 
                sm:mt-5 
                md:mt-6 
                md:text-sm
              "
            >
              Fresh flavours and carefully crafted dishes bring people together
              <br />
              in a warm and welcoming atmosphere where every moment feels
              <br />
              special. Enjoy great food, wonderful company and memorable
              <br />
            </p>
          </div>

          {/* =================================================
              RIGHT SIDE TEXT
          ================================================= */}
          <div
            className="
            pointer-events-none
            absolute
            z-40

            /* MOBILE — directly below A Taste Of */
            left-1/2
            top-[25%]
            w-full
            -translate-x-1/2
            text-center

            /* DESKTOP — keep original right-side position */
            md:left-auto
            md:right-[25px]
            md:top-1/2
            md:w-[23vw]
            md:translate-x-0
            md:-translate-y-1/2
            md:px-8
            "
          >
            <p
              className="
                font-semibold
                leading-[1.05]
                tracking-[-0.03em]
                text-[#FFE5C2]

                /* MOBILE */
                text-[1.2rem]
                text-center

                /* DESKTOP */
                md:text-right
                md:text-[clamp(1.2rem,3vw,3.5rem)]
                md:leading-[1.5]
                md:tracking-[-0.04em]
                "
            >
              Great cafe in Coomera
              {/* MOBILE ONLY */}
              <span className="md:hidden">
                <br />
                <span className="text-[0.65rem] tracking-[0.08em]">
                  FANTASTIC VIBE &amp; VIEW
                </span>
              </span>
              {/* DESKTOP ONLY */}
              <span className="hidden md:inline">
                <br />
                FANTASTIC
                <br />
                VIBE &amp;
                <br />
                VIEW, A GREAT
                <br />
                SPOT
                <br />
                FOR EVERY
                <br />
                FAMILY EVENT
              </span>
            </p>
          </div>
        </div>

        {/* ===================================================
            SLIDE 2
            SIGNATURE DISHES
        =================================================== */}

        <section
          className="
            relative
            h-screen
            w-screen
            shrink-0
            overflow-hidden
            bg-[#D90B18]
            px-3
            py-4
            sm:px-6
            sm:py-6
            md:px-8
            md:py-8
            lg:px-10
          "
        >
          <div
            className="
              mx-auto
              grid
              h-full
              w-full
              max-w-[1800px]
              grid-cols-2
              gap-3
              sm:gap-4
              md:grid-cols-4
              md:gap-4
              lg:gap-5
              "
          >
            {/* =================================================
                CARD 1
            ================================================= */}

            <div
              className="
                group
                relative
                h-[calc(50vh-1.5rem)]
                overflow-hidden
                rounded-xl

                sm:h-[calc(50vh-2rem)]

                md:h-full
              "
            >
              <img
                src="/images/poke.png"
                alt="French cuisine"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  z-10
                  bg-black/20
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-3
                  text-center
                "
              >
                <h3
                  className="
                    font-serif
                    text-3xl
                    font-medium
                    uppercase
                    tracking-wide
                    text-[#FFE5C2]

                    sm:text-4xl
                    md:text-5xl
                    lg:text-5xl
                  "
                >
                  French
                </h3>

                <span
                  className="
                   mt-2
                  rounded-full
                  bg-[#FFE5C2]/80
                  px-3
                  py-1
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#403d39]
                  shadow-sm
                  sm:text-sm
                  "
                >
                  Cuisine
                </span>
              </div>
            </div>

            {/* =================================================
                CARD 2
            ================================================= */}

            <div
              className="
                group
                relative
                h-[calc(50vh-1.5rem)]
                overflow-hidden
                rounded-xl

                sm:h-[calc(50vh-2rem)]

                md:h-full
              "
            >
              <img
                src="/images/slide2.png"
                alt="Handmade pasta"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-3
                  text-center
                "
              >
                <h3
                  className="
                    font-serif
                    text-3xl
                    font-medium
                    uppercase
                    tracking-wide
                    text-[#FFE5C2]

                    sm:text-4xl
                    md:text-5xl
                    lg:text-5xl
                  "
                >
                  Pasta
                </h3>

                <span
                  className="
                  rounded-full
                  bg-[#FFE5C2]/80
                  px-3
                  py-1
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#403d39]
                  shadow-sm
                  sm:text-sm
                  "
                >
                  Handmade
                </span>
              </div>
            </div>

            {/* =================================================
                CARD 3
            ================================================= */}

            <div
              className="
                group
                relative
                h-[calc(50vh-1.5rem)]
                overflow-hidden
                rounded-xl

                sm:h-[calc(50vh-2rem)]

                md:h-full
              "
            >
              <img
                src="/images/poke.png"
                alt="Grilled steak"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-3
                  text-center
                "
              >
                <h3
                  className="
                    font-serif
                    text-3xl
                    font-medium
                    uppercase
                    tracking-wide
                    text-[#FFE5C2]

                    sm:text-4xl
                    md:text-5xl
                    lg:text-5xl
                  "
                >
                  Steak
                </h3>

                <span
                  className="
                  rounded-full
                  bg-[#FFE5C2]/80
                  px-3
                  py-1
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#403d39]
                  shadow-sm
                  sm:text-sm
                  "
                >
                  Grilled
                </span>
              </div>
            </div>

            {/* =================================================
                CARD 4
            ================================================= */}

            <div
              className="
                group
                relative
                h-[calc(50vh-1.5rem)]
                overflow-hidden
                rounded-xl

                sm:h-[calc(50vh-2rem)]

                md:h-full
              "
            >
              <img
                src="/images/slide2.png"
                alt="Dessert"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-3
                  text-center
                "
              >
                <h3
                  className="
                    font-serif
                    text-3xl
                    font-medium
                    uppercase
                    tracking-wide
                    text-[#FFE5C2]

                    sm:text-4xl
                    md:text-5xl
                    lg:text-5xl
                  "
                >
                  Dessert
                </h3>

                <span
                  className="
                  rounded-full
                  bg-[#FFE5C2]/80
                  px-3
                  py-1
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#403d39]
                  shadow-sm
                  sm:text-sm
                  "
                >
                  Sweet
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            SLIDE 3
            CASUAL DINING
        =================================================== */}

        <section
          className="
            relative
            flex
            h-screen
            w-screen
            shrink-0
            items-center
            justify-center
            overflow-hidden
            bg-[#D90B18]
            px-5

            sm:px-8
            md:px-10
            lg:px-16
          "
        >
          {/* =================================================
              BACKGROUND TITLE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[9%]
              sm:top-[2%]
              z-0
              -translate-x-1/2
              whitespace-nowrap
            "
          >
            <h2
              className="
                whitespace-nowrap
                font-serif
                text-[clamp(3.2rem,12vw,11rem)]
                font-medium
                uppercase
                leading-none
                tracking-[-0.03em]
                text-[#FFE5C2]/40
              "
            >
              Casual Dining
            </h2>
          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              w-full
              max-w-[850px]
              flex-col
              items-center
              text-center
            "
          >
            {/* SMALL LABEL */}

            <p
              className="
                mb-2
                text-[8px]
                font-medium
                uppercase
                tracking-[0.4em]
                text-[#FFE5C2]

                sm:mb-3
                sm:text-xs
              "
            >
              Relax · Taste · Enjoy
            </p>

            {/* =================================================
                DINNER PLATE
            ================================================= */}

            <div
              className="
                relative
                flex
                h-[42vh]
                w-[42vh]
                max-h-[450px]
                max-w-[450px]
                items-center
                justify-center

                sm:h-[46vh]
                sm:w-[46vh]

                md:h-[50vh]
                md:w-[50vh]
              "
            >
              {/* Shadow */}

              <div
                className="
                  absolute
                  bottom-[9%]
                  left-1/2
                  h-[8%]
                  w-[60%]
                  -translate-x-1/2
                  rounded-full
                  bg-black/25
                  blur-2xl
                "
              />

              {/* Plate */}

              <div
                className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-full
                bg-[#FFE5C2]
              "
              >
                {/* ================= PLATE DIV ================= */}

                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-[#FFE5C2]
                  "
                >
                  {/* ================= CURVED TEXT ================= */}

                  <svg
                    viewBox="0 0 400 400"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-10
                      h-full
                      w-full
                    "
                  >
                    <defs>
                      {/* Top curve */}
                      <path
                        id="topCurve"
                        d="M 65,200 A 135,135 0 0,1 335,200"
                        fill="none"
                      />

                      {/* Bottom curve */}
                      <path
                        id="bottomCurve"
                        d="M 70,215 A 130,130 0 0,0 330,215"
                        fill="none"
                      />
                    </defs>

                    {/* EXPLORE */}

                    <text
                      fill="#D90B18"
                      fontSize="28"
                      fontWeight="600"
                      letterSpacing="4"
                      textAnchor="middle"
                    >
                      <textPath href="#topCurve" startOffset="50%">
                        EXPLORE
                      </textPath>
                    </text>

                    {/* FOOD VARIETIES */}

                    <text
                      fill="#D90B18"
                      fontSize="18"
                      fontWeight="500"
                      letterSpacing="3"
                      textAnchor="middle"
                    >
                      <textPath href="#bottomCurve" startOffset="50%">
                        FOOD VARIETIES
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* ================= CENTER ARROW ================= */}

                <div
                  className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  z-20
                  -translate-x-1/2
                  -translate-y-1/2
                "
                >
                  <svg
                    viewBox="0 0 40 40"
                    className="
                    h-10
                    w-10
                    sm:h-12
                    sm:w-12
                  "
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 20H30"
                      stroke="#D90B18"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M22 12L30 20L22 28"
                      stroke="#D90B18"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-4
                max-w-[580px]
                px-5
                [font-family:'Montserrat',sans-serif]
                text-sm
                leading-relaxed
                text-[#FFE5C2]/90
                mt-[7px]
                sm:mt-[7px]
                sm:text-base

                md:text-lg
              "
            >
              Take your time, savour every bite, and enjoy relaxed moments,
              great food and unforgettable company.
            </p>
          </div>

          {/* =================================================
              BOTTOM THREE WORDS
          ================================================= */}

          <div
            className="
              absolute
              bottom-5
              left-1/2
              z-20
              w-[88%]
              max-w-[850px]
              -translate-x-1/2
              border-t
              border-[#FFE5C2]/30
              pt-3

              sm:bottom-7
              sm:pt-4
            "
          >
            <div className="grid grid-cols-3 py-4">
              {/* RELAXED */}

              <div className="text-center">
                <span
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#FFE5C2]

                    sm:text-xs
                  "
                >
                  Relaxed
                </span>
              </div>

              {/* DELICIOUS */}

              <div
                className="
                  border-x
                  border-[#FFE5C2]/30
                  text-center
                "
              >
                <span
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#FFE5C2]

                    sm:text-xs
                  "
                >
                  Delicious
                </span>
              </div>

              {/* MEMORABLE */}

              <div className="text-center">
                <span
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#FFE5C2]

                    sm:text-xs
                  "
                >
                  Memorable
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =====================================================
          SLIDE INDICATORS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          z-[100]
          flex
          -translate-x-1/2
          gap-3
        "
      >
        {[0, 1, 2].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => goToSlide(item)}
            aria-label={`Go to slide ${item + 1}`}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300

              ${activeSlide === item ? 'w-10 bg-white' : 'w-3 bg-white/40'}
            `}
          />
        ))}
      </div>
    </section>
  );
}
