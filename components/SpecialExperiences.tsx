import { ArrowRight, Leaf, Armchair, Coffee, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecialExperiences() {
  return (
    <section
      className="
        bg-[#E8DCC8]
        py-10
        transition-colors
        duration-500
        dark:bg-[#121111]
      "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p
            className="
              mb-2
              text-sm
              font-bold
              uppercase
              tracking-[0.35em]
              text-[#C89B3C]
              dark:text-[#D8B56B]
            "
          >
            Discover More
          </p>

          <h2
            className="
              mb-6
              text-7xl
              text-[#2D241E]
              dark:text-[#F5F0E8]
              font-black
              uppercase
              text-[#2D241E]
              dark:text-white
              "
          >
            Special Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* ================================================= */}
          {/* Special Functions */}
          {/* ================================================= */}

          <div
            className="
              flex
              flex-col
              justify-between
              rounded-xl
              border
              border-[#E8DCC8]
              bg-white
              p-8
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-xl
              dark:border-[#2C2A29]
              dark:bg-[#1B1A19]
            "
          >
            <div>
              <p
                className="
                  mb-4
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.4em]
                  text-[#C89B3C]
                  dark:text-[#D8B56B]
                "
              >
                Special Functions
              </p>

              <h3
                className="
                  mb-5
                  text-5xl
                  font-black
                  uppercase
                  leading-tight
                  text-[#2D241E]
                  dark:text-[#F5F0E8]
                "
              >
                Celebrate life's special moments
              </h3>

              <p
                className="
                  mb-8
                  leading-7
                  text-[#6B645D]
                  dark:text-[#C8C2BA]
                "
              >
                Elegant spaces, personalised service and exceptional food
                crafted to make every celebration memorable.
              </p>
            </div>

            <Link
              to="/special-functions"
              className="
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-[#C8AE8D]
                px-10
                py-4
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
                dark:shadow-black/40
              "
            >
              Read More
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* ================================================= */}
          {/* Events */}

          <Link
            to="/events"
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              shadow-sm
            "
          >
            <img
              src="src/assets/hero.png"
              alt="Events"
              className="
                h-[450px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <p
                className="
                  mb-3
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-white
                "
              >
                Birthday • Anniversary
              </p>

              <h3 className="mb-6 text-5xl font-bold text-white">Events</h3>

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white
                  transition-all
                  duration-300
                  group-hover:bg-white
                  group-hover:text-[#2F3F39]
                "
              >
                See More Details
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* ================================================= */}
          {/* Highlights */}
          {/* ================================================= */}

          <div
            className="
              rounded-xl
              border
              border-[#E8DCC8]
              bg-white
              p-8
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-xl
              dark:border-[#2C2A29]
              dark:bg-[#1B1A19]
            "
          >
            <p
              className="
                mb-6
                text-sm
                font-bold
                uppercase
                tracking-[0.4em]
                text-[#C89B3C]
                dark:text-[#D8B56B]
              "
            >
              Highlights
            </p>

            <ul className="space-y-6 text-[#544F49] dark:text-[#D7D2CC]">
              <li className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#d6b489]
                    bg-[#FCFAF7]
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:border-[#C8AE8D]
                    group-hover:shadow-md

                    dark:border-[#d6b489]
                    dark:bg-[#1E1D1C]
                    dark:group-hover:border-[#D8B56B]
                    dark:group-hover:bg-[#252321]
                    "
                >
                  <Leaf className="h-5 w-5 text-[#B08A5A] dark:text-[#D8B56B]" />
                </div>
                <span>Premium locally sourced ingredients</span>
              </li>

              <li className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#d6b489]
                    bg-[#FCFAF7]
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:border-[#C8AE8D]
                    group-hover:shadow-md

                    dark:border-[#d6b489]
                    dark:bg-[#1E1D1C]
                    dark:group-hover:border-[#D8B56B]
                    dark:group-hover:bg-[#252321]
                    "
                >
                  <Armchair className="mt-1 h-5 w-5 shrink-0 text-[#B08A5A] dark:text-[#D8B56B]" />
                </div>
                <span>Warm café ambience with indoor & outdoor seating</span>
              </li>

              <li className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#d6b489]
                    bg-[#FCFAF7]
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:border-[#C8AE8D]
                    group-hover:shadow-md

                    dark:border-[#d6b489]
                    dark:bg-[#1E1D1C]
                    dark:group-hover:border-[#D8B56B]
                    dark:group-hover:bg-[#252321]
                    "
                >
                  <Coffee className="mt-1 h-5 w-5 shrink-0 text-[#B08A5A] dark:text-[#D8B56B]" />
                </div>
                <span>Freshly brewed artisan coffee & signature desserts</span>
              </li>

              <li className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#d6b489]
                    bg-[#FCFAF7]
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:border-[#d6b489]
                    group-hover:shadow-md

                    dark:border-[#d6b489]
                    dark:bg-[#1E1D1C]
                    dark:group-hover:border-[#d6b489]
                    dark:group-hover:bg-[#252321]
                    "
                >
                  <PartyPopper className="mt-1 h-5 w-5 shrink-0 text-[#B08A5A] dark:text-[#D8B56B]" />
                </div>
                <span>
                  Perfect venue for celebrations and private gatherings
                </span>
              </li>
            </ul>

            <Link
              to="/highlights"
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                font-semibold
                uppercase
                tracking-wider
                text-[#2F3F39]
                transition-colors
                hover:text-[#B08A5A]
                dark:text-[#F5F0E8]
                dark:hover:text-[#D8B56B]
              "
            >
              Explore More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
