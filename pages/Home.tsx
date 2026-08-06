import { useState, useEffect, useRef } from 'react';
import {
  Sun,
  Moon,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Phone
} from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Coffee, UtensilsCrossed, Users } from 'lucide-react';
import SpecialExperiences from '../components/SpecialExperiences';

const galleryItems = [
  {
    image: 'src/assets/cafe.png',
    title: 'Cappuccino',
    subtitle: 'Small / Medium / Large'
  },
  {
    image: 'src/assets/cafe.png',
    title: 'Latte',
    subtitle: 'Smooth & Creamy'
  },
  {
    image: 'src/assets/cafe.png',
    title: 'Espresso',
    subtitle: 'Single / Double Shot'
  },
  {
    image: 'src/assets/cafe.png',
    title: 'Mocha',
    subtitle: 'Rich Chocolate Blend'
  },
  {
    image: 'src/assets/cafe.png',
    title: 'Flat White',
    subtitle: 'Signature Coffee'
  },
  {
    image: 'src/assets/cafe.png',
    title: 'Chaya',
    subtitle: 'Kerala Chaya'
  }
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showOffer, setShowOffer] = useState(false);

  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  return (
    <>
      <section className="sticky top-0 h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="src/assets/sample.mp4" type="video/mp4" />
        </video>
        {/* Theme Overlay */}
        {/* <div
          className="
          absolute
          inset-0
          bg-black/10
          dark:bg-black/30
          transition-all
          duration-700
        "
        ></div> */}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        {/* Left Social */}
        <div
          className="
          fixed
          left-8
          top-1/2
          z-50
          hidden
          -translate-y-1/2
          lg:flex
          flex-col
          items-center
          rounded-full
          px-4
          py-8
          text-white
          backdrop-blur-md
        "
          style={{
            backgroundColor: 'rgba(77, 102, 92, 0.8)'
          }}
        >
          <FaInstagram
            className="mb-5 cursor-pointer text-white transition hover:text-amber-400"
            size={22}
          />

          <FaFacebookF
            className="cursor-pointer text-white transition hover:text-amber-400"
            size={20}
          />

          <div className="my-6 h-20 w-px bg-white/40" />

          <span
            onClick={() => setShowOffer(true)}
            style={{ writingMode: 'vertical-rl' }}
            className="
            rotate-180
            cursor-pointer
            rounded-full
            border
            border-white/30
            px-2
            py-4
            text-xs
            font-semibold
            tracking-[0.5em]
            text-white
            transition-all
            duration-300
            ease-out
            hover:scale-105
            hover:border-[#D4AF37]
            hover:text-[#D4AF37]
            hover:shadow-[0_0_12px_rgba(212,175,55,0.35)]
                    "
          >
            GET 10% OFF
          </span>
        </div>

        {/* Hero */}
        <div className="absolute left-6 top-1/2 z-20 max-w-3xl -translate-y-1/2 md:left-20">
          <div className="mb-74 h-22 w-1 bg-amber-400"></div>

          {/* <h1
            className="
            text-5xl
            font-black
            uppercase
            leading-[1.15]
            tracking-wide
            text-white
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
            mx-10
            "
          >
            WELCOME
            <br />
            TO THE
            <br />
            GALLEY
            <br />
            CAFE
          </h1> */}
          <h1
            className="
            mx-12
            text-white
          "
          >
            <span
              className="
                block
                font-['Great_Vibes']
                text-5xl
                italic font-bold
                normal-case
                md:text-7xl
                lg:text-8xl
              "
            >
              Welcome to
            </span>

            <span
              className="
              block
              text-5xl
              font-black
              uppercase
              tracking-wide
              md:text-6xl
              lg:text-6xl
            "
            >
              THE GALLEY
            </span>
          </h1>
        </div>

        {/* Scroll Down */}
        <button className="absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-white transition hover:text-amber-400">
          <span className="mt-2 text-xs uppercase tracking-[0.4em]">
            Scroll Down
          </span>
          <ChevronDown className="animate-bounce" size={34} />
          <ChevronDown className="animate-bounce" size={34} />
        </button>

        {/* Book Button */}
        <button
          className="
          absolute
          bottom-10
          right-6
          z-20
          flex
          items-center
          gap-3
          rounded-full
          border
          border-white/30
          bg-[#4D665C]
          px-7
          py-4
          my-12
          md:my-10
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:bg-amber-400
          hover:text-black
          hover:shadow-xl
          md:right-10
        "
        >
          Book Now
          <ArrowRight size={20} />
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
        absolute
        top-6
        right-6
        z-30
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        bg-white/20
        text-white
        backdrop-blur-md
        transition
        hover:bg-white
        hover:text-black
      "
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </section>

      <section
        className="
        relative
        z-30
        mt-2
        rounded-t-[40px]
        bg-[#F7F1E8]
        border-b
        border-[#E8DCC8]
        px-0
        py-8
        dark:bg-[#121111]
        transition-colors
        duration-500
        min-h-screen
      "
      >
        {/* Navigation */}
        <div
          className="
          mx-auto
    flex
    max-w-7xl
    items-center
    justify-between
    gap-6
    px-6
    lg:px-8
          "
        >
          {/* Logo */}
          <img
            src="http://www.thegalley.com.au/wp-content/uploads/2014/10/The-galley-logo-final.png"
            className="h-12 w-auto"
            alt="The Galley Cafe"
          />

          {/* Menu */}
          <nav
            className="
            hidden
            md:flex
            items-center
            gap-4
            lg:gap-6
            text-sm
            font-medium
            text-gray-700
            dark:text-white
            md:text-base
            [font-family:'Montserrat',sans-serif]
            "
          >
            <a
              className="
              cursor-pointer
              rounded-full
              px-3
              py-2
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:shadow-lg
              dark:hover:bg-[#C89B3C]
              dark:hover:text-white
              "
            >
              HOME
            </a>
            <a
              className="
              cursor-pointer
              rounded-full
              px-5
              py-2
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:shadow-lg
              dark:hover:bg-[#C89B3C]
              dark:hover:text-white
              "
            >
              BOOK NOW
            </a>
            <a
              className="
              cursor-pointer
              rounded-full
              px-5
              py-2
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:shadow-lg
              dark:hover:bg-[#C89B3C]
              dark:hover:text-white
            "
            >
              ORDER ONLINE
            </a>

            <a
              className="
              cursor-pointer
              rounded-full
              px-5
              py-2
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:shadow-lg
              dark:hover:bg-[#C89B3C]
              dark:hover:text-white
            "
            >
              JOIN THE TEAM
            </a>

            <a
              className="
              cursor-pointer
              rounded-full
              px-5
              py-2
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:shadow-lg
              dark:hover:bg-[#C89B3C]
              dark:hover:text-white
            "
            >
              MENU
            </a>
            <a
              className="
              cursor-pointer
              rounded-full
              px-5
              py-2
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:shadow-lg
              dark:hover:bg-[#C89B3C]
              dark:hover:text-white
            "
            >
              ABOUT US
            </a>
            <a
              className="
              cursor-pointer
              rounded-full
              px-5
              py-2
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:shadow-lg
              dark:hover:bg-[#C89B3C]
              dark:hover:text-white
            "
            >
              CONTACT
            </a>
          </nav>
        </div>

        {/* Buttons Section */}
        <div
          className="
            w-full
            mt-8
            bg-[#E8DCC8]
            px-0
            py-16
            dark:bg-[#000000]
            "
        >
          {/* Buttons */}
          <div
            className="
            flex
            flex-col
            items-center
            justify-center
            gap-6
            md:flex-row
            "
          >
            <button
              className="
              min-w-[260px]
              rounded-full
              bg-[#c8ae8d]
              px-12
              py-5
              text-xl
              font-bold
              text-white
              shadow-lg
              transition
              hover:bg-[#B1872F]
              dark:shadow-black/40
            "
            >
              BOOK NOW
            </button>

            <button
              className="
              min-w-[260px]
              rounded-full
              bg-[#c8ae8d]
              px-12
              py-5
              text-xl
              font-bold
              text-white
              shadow-lg
              transition
              hover:bg-[#B1872F]
              dark:shadow-black/40
            "
            >
              ORDER ONLINE
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-[#6B645D] dark:text-[#C8C2BA]">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#C89B3C]" />
              <span>Open 7 Days</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#C89B3C]" />
              <span>Coomera, QLD, 4209</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#C89B3C]" />
              <span>(07) 5502 6435</span>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center">
            <div className="h-px w-24 bg-[#C8AE8D]/40"></div>

            <Coffee className="mx-5 h-5 w-5 text-[#C89B3C]" />

            <div className="h-px w-24 bg-[#C8AE8D]/40"></div>
          </div>

          {/* Photos */}
          <div
            className="mt-16
            w-full
            px-2
            sm:px-4
            lg:px-10"
          >
            <div
              className="
              "
            >
              {/* Small Gold Heading */}
              <p
                className="
                mb-4
                text-sm
                font-bold
                uppercase
                tracking-[0.4em]
                text-[#C89B3C]
              "
              >
                VIVID. VIBE. AMBIANCE. RETRO.
              </p>

              {/* Main Heading */}
              <h2
                className="
                mb-6
                text-left
                text-7xl
                font-black
                uppercase
                text-[#2D241E]
                dark:text-white
              "
              >
                PHOTOS
              </h2>

              {/* Description */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Description */}
                <p
                  className="
                  max-w-xl
                  py-4
                  text-left
                  text-lg
                  leading-8
                  text-[#6e695a]
                  dark:text-gray-300
                  "
                >
                  Experience the perfect blend of flavours and moments where
                  every corner tells a unique story crafted with passion and
                  timeless
                  <br />
                  crafted with passion. Find it here !
                </p>

                {/* View Photos Button */}
                <button
                  className="
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-[#c8ae8d]
                  px-8
                  py-6
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-[#B1872F]
                  hover:shadow-xl
                  lg:mr-12
                  "
                >
                  VIEW ALL PHOTOS
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={() =>
                  photoRef.current?.scrollBy({
                    left: -350,
                    behavior: 'smooth'
                  })
                }
                className="
                absolute
                left-4
                top-1/2
                z-20
                -translate-y-1/2
                rounded-full
                bg-black/50
                p-3
                text-white
                backdrop-blur-md
                hover:bg-[#C89B3C]
              "
              >
                <ChevronLeft size={28} />
              </button>

              {/* Images */}

              <div
                ref={photoRef}
                id="photo-scroll"
                className="
                flex
                gap-6
                overflow-hidden
                scroll-smooth
                snap-x
                snap-mandatory
                
                "
              >
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    className="
                    photo-hover
                    relative
                    shrink-0
                    w-[320px]
                    overflow-hidden
                    rounded-2xl
                    shadow-xl
                    cursor-pointer
                    "
                  >
                    <img
                      src={item.image}
                      className="
                      h-72
                      w-full
                      object-cover
                      transition-all
                      duration-500
                      ease-in-out
                      hover:scale-110
                      "
                    />

                    {/* Bottom Gradient */}
                    <div
                      className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-32
                      bg-gradient-to-t
                      from-black/80
                      via-black/30
                      to-transparent
                    "
                    />

                    {/* Text */}
                    <div
                      className="
                      absolute
                      bottom-5
                      left-5
                      z-10
                    "
                    >
                      <h3
                        className="
                      text-2xl
                      font-black
                      text-white
                    "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                        mt-1
                        text-sm
                        tracking-wide
                        text-white/90
                      "
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() =>
                  photoRef.current?.scrollBy({
                    left: 350,
                    behavior: 'smooth'
                  })
                }
                className="
                absolute
                right-4
                top-1/2
                z-20
                -translate-y-1/2
                rounded-full
                bg-black/50
                p-3
                text-white
                backdrop-blur-md
                hover:bg-[#C89B3C]
                "
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
        {/* Feature Strip */}
        <div className="w-full mt-2">
          <div
            className="
              w-full
              
              bg-[#121111]
              px-0
              py-3
              shadow-2xl
              rounded-none
              border
              border-[#C8AE8D]
              "
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2">
              {/* Column 1 */}
              <div className="flex items-center justify-center gap-2">
                <Coffee size={14} className="text-[#C8AE8D]" />

                <p className="text-xs font-bold uppercase tracking-wide text-[#C8AE8D]">
                  Great Location
                </p>
              </div>

              {/* Column 2 */}
              <div className="relative flex items-center justify-center">
                {/* Outer Outline Text */}
                <h3
                  className="
                    text-2xl
                    font-black
                    
                    uppercase
                    tracking-wider
                    text-transparent
                    [-webkit-text-stroke:1.5px_#C8AE8D]
                    dark:[-webkit-text-stroke:1.5px_#D8B56B]
                    select-none
                  "
                >
                  Amazing Food
                </h3>

                {/* Center White Text */}
                <h3
                  className="
                  absolute
                  text-2xl
                  font-black
                  
                  uppercase
                  tracking-wider
                  text-black
                  select-none
                "
                >
                  Amazing Food
                </h3>
              </div>

              {/* Column 3 */}
              <div className="flex items-center justify-center gap-2">
                <Users size={14} className="text-[#C8AE8D]" />

                <p className="text-xs font-bold uppercase tracking-wide text-[#C8AE8D]">
                  More Merrier
                </p>
              </div>
            </div>
          </div>
        </div>
        <SpecialExperiences />
      </section>

      {showOffer && (
        <div
          className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/60
          px-4
          "
        >
          <div
            className="
            relative
            flex
            max-w-4xl
            overflow-hidden
            rounded-3xl
            bg-white
            shadow-2xl
            dark:bg-[#171717]
          "
          >
            {/* Close */}

            <button
              onClick={() => setShowOffer(false)}
              className="
              absolute
              right-4
              top-4
              z-20
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-black/60
              text-white
              transition
              hover:bg-[#C89B3C]
            "
            >
              ✕
            </button>

            {/* LEFT IMAGE animation */}

            <div
              className="
              hidden
              overflow-hidden
              md:block
              md:w-1/2
              "
            >
              <img
                src="src/assets/hero.png"
                className="
              h-full
              w-full
              object-cover
              animate-slideInLeft
              "
              />
            </div>

            {/* RIGHT CONTENT - displays first */}

            <div
              className="
              w-full
              p-10
              md:w-1/2
            "
            >
              <h2
                className="
                text-4xl
                font-black
                uppercase
                text-[#2D241E]
                dark:text-white
                "
              >
                GET 10% OFF
              </h2>

              <p
                className="
                mt-5
                leading-7
                text-gray-600
                dark:text-gray-300
                "
              >
                Subscribe now and receive 10% discount on your next visit to The
                Galley Cafe.
              </p>

              <input
                type="email"
                placeholder="Enter your email"
                className="
                mt-8
                w-full
                rounded-full
                border
                border-gray-300
                bg-white
                px-6
                py-4
                text-gray-900
                placeholder:text-gray-500
                outline-none
                transition

                dark:border-gray-600
                dark:bg-[#2A2A2A]
                dark:text-white
                dark:placeholder:text-gray-400
              "
              />

              <button
                className="
              mt-4
              rounded-full
              bg-[#C89B3C]
              px-10
              py-4
              font-bold
              text-white
              "
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
