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
  Phone,
  Menu,
  X
} from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Coffee, Users } from 'lucide-react';
import SpecialExperiences from '../components/SpecialExperiences';
import MainSlider from '../components/MainSlider';
import Footer from '../components/Footer';

const galleryItems = [
  {
    image: '/images/cafe.png',
    title: 'Cappuccino',
    subtitle: 'Small / Medium / Large'
  },
  {
    image: '/images/cafe.png',
    title: 'Latte',
    subtitle: 'Smooth & Creamy'
  },
  {
    image: '/images/cafe.png',
    title: 'Espresso',
    subtitle: 'Single / Double Shot'
  },
  {
    image: '/images/cafe.png',
    title: 'Mocha',
    subtitle: 'Rich Chocolate Blend'
  },
  {
    image: '/images/cafe.png',
    title: 'Flat White',
    subtitle: 'Signature Coffee'
  },
  {
    image: '/images/cafe.png',
    title: 'Chaya',
    subtitle: 'Kerala Chaya'
  }
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
          <source src="/images/galleysample.mp4" type="video/mp4" />
        </video>

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
          py-6
          text-white
          backdrop-blur-md
          "
          style={{
            backgroundColor: 'rgba(77, 102, 92, 0.8)'
          }}
        >
          <FaInstagram
            className="mb-5 cursor-pointer text-white transition hover:text-amber-400"
            size={18}
          />
          <FaFacebookF
            className="cursor-pointer text-white transition hover:text-amber-400"
            size={16}
          />
          <div className="my-4 h-10 w-px bg-white/40" />
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
            py-2
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

        <div
          className="
          absolute
          bottom-75
          left-5
          z-50
          lg:hidden
          "
        >
          <button
            onClick={() => setShowOffer(true)}
            className="
            rounded-full
            bg-[#4D665C]
            bottom-20
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            shadow-xl
            transition
            hover:bg-[#C89B3C]
          "
          >
            🎉 GET 10% OFF
          </button>
        </div>

        {/* Hero */}
        <div
          className="
            absolute
            bottom-110
            left-6
            z-20
            max-w-3xl
            sm:left-10
            md:bottom-40
            md:left-16
            lg:left-20
            "
        >
          <h1
            className="
            text-white
            "
          >
            <span
              className="
                block
                text-4xl
                font-bold
                sm:text-5xl
                md:text-6xl
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
               sm:text-6xl
               md:text-7xl
               "
            >
              THE GALLEY
            </span>
          </h1>
        </div>

        {/* Scroll Down */}

        <button
          className="
          absolute
          bottom-40
          md:bottom-24
          lg:bottom-16
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          text-[#e37632]
          transition
          duration-300
        "
        >
          <span
            className="
            text-[17px]
            font-medium
            uppercase
            tracking-[0.45em]
            drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]
          "
          >
            Scroll Down
          </span>

          <div className="mt-1 flex flex-col items-center">
            <ChevronDown
              size={30}
              strokeWidth={2.2}
              className="-mb-3 animate-bounce"
            />
            <ChevronDown
              size={30}
              strokeWidth={2.2}
              className="animate-bounce"
            />
          </div>
        </button>

        {/* Book Button */}
        <button
          className="
          absolute
          bottom-75
          right-4
          z-20
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/30
          bg-[#4D665C]
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          sm:bottom-8
          sm:right-8
          md:bottom-10
          md:right-10
          hover:bg-[#C89B3C]
          hover:scale-105
          active:bg-[#C89B3C]
          active:scale-95
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
        bg-[#2F3F39]
        border-b
        border-[#46564F]
        px-0
        py-8
        dark:bg-[#121111]
        transition-colors
        duration-500
        min-h-screen
        overflow-x-hidden
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

          {/* Desktop Menu */}
          <nav
            className="
            hidden
            md:flex
            items-center
            gap-4
            lg:gap-6
            text-sm
            font-medium
            text-[#F8F4EE]
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
              hover:bg-[#C89B3C]
              hover:text-[#1c1611]
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
              hover:bg-[#C89B3C]
              hover:text-[#1c1611]
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
              hover:bg-[#C89B3C]
              hover:text-[#1c1611]
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
              hover:bg-[#C89B3C]
              hover:text-[#1c1611]
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
              hover:bg-[#C89B3C]
              hover:text-[#1c1611]
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
              hover:bg-[#C89B3C]
              hover:text-[#1c1611]
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
              hover:bg-[#C89B3C]
              hover:text-[#1c1611]
              hover:shadow-lg
              dark:hover:bg-[#C89B3C]
              dark:hover:text-white
              "
            >
              CONTACT
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="
              md:hidden
              rounded-full
              bg-white/10
              p-3
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
              "
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Buttons Section */}
        <div
          className="
            w-full
            mt-8
            bg-[#f0e9dd]
            px-0
            py-10
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
              bg-[#495A4D]
              px-12
              py-5
              text-xl
              font-bold
              text-white
              shadow-lg
              transition
              hover:bg-[#36453B]
              dark:shadow-black/40
            "
            >
              BOOK NOW
            </button>

            <button
              className="
              min-w-[260px]
              rounded-full
              bg-[#495A4D]
              px-12
              py-5
              text-xl
              font-bold
              text-white
              shadow-lg
              transition
              hover:bg-[#36453B]
              dark:shadow-black/40
            "
            >
              ORDER ONLINE
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-[#6B645D] dark:text-[#C8C2BA]">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#36453B]" />
              <span>Open 7 Days</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#36453B]" />
              <span>Coomera, QLD, 4209</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#36453B]" />
              <span>(07) 5502 6435</span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <div className="h-px w-32 bg-[#495A4D]/70"></div>
            <Coffee className="mx-5 h-5 w-5 text-[#C89B3C]" />
            <div className="h-px w-32 bg-[#495A4D]/70"></div>
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
                mb-4
                text-left
                text-7xl
                font-black
                uppercase
                text-[#2D241E]
                dark:text-white
              "
              >
                OUR PHOTOS
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
                  mx-auto
                  flex
                  w-full
                  max-w-[280px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#495A4D]
                  px-5
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-[#36453B]
                  hover:shadow-xl
                  my-2
                  sm:w-fit
                  sm:max-w-none
                  sm:px-6
                  sm:py-4
                  sm:text-sm
                  lg:px-8
                  lg:py-6
                  lg:tracking-wider
                  lg:mr-12
                  "
                >
                  VIEW ALL PHOTOS
                  <ArrowRight size={18} className="sm:h-5 sm:w-5" />
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
                    w-full
                    sm:w-[340px]
                    lg:w-[320px]
                    overflow-hidden
                    rounded-2xl
                    shadow-xl
                    cursor-pointer
                    snap-center
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
        <MainSlider />
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
              right-2
              top-4
              z-20
              flex
              h-8
              w-8
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
              overflow-hidden
              block
              w-full
              md:w-1/2
              "
            >
              <img
                src="/images/hero.png"
                className="
                  h-auto
                  w-full
                  object-cover
                  animate-slideInLeft
                  py-14
                  "
              />
            </div>

            {/* RIGHT CONTENT - displays first */}

            <div
              className="
              w-full
              px-1
              py-5
              sm:px-8
              sm:py-8
              md:w-1/2
              md:p-10
              mt-8
            "
            >
              <h2
                className="
                text-3xl
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
                Subscribe and receive 10% discount on your next visit to The
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

      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div
            className="
            fixed
            right-0
            top-0
            z-50
            h-screen
            w-72
            bg-[#24342D]/95
            backdrop-blur-xl
            shadow-2xl
            p-8
          "
          >
            <div className="mb-12 flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full p-2 text-white hover:bg-white/10"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg font-semibold text-white">
              <a href="/">HOME</a>
              <a href="/booking">BOOK NOW</a>
              <a href="/order">ORDER ONLINE</a>
              <a href="/team">JOIN THE TEAM</a>
              <a href="/menu">MENU</a>
              <a href="/about">ABOUT US</a>
              <a href="/contact">CONTACT</a>
            </nav>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
