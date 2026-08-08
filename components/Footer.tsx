export default function Footer() {
  return (
    <footer className="w-full">
      <div
        className="
        relative
        z-50
        flex
        w-full
        flex-col
        items-center
        justify-center
        gap-3
        py-5
        text-center
        sm:gap-4
        bg-[#f7f1e8]
        "
      >
        {/* ================= LOGO ================= */}
        <div className="flex items-center justify-center">
          <img
            src="https://www.thegalley.com.au/wp-content/uploads/2014/10/The-galley-logo-final.png"
            alt="The Galley"
            className="
          h-10
          w-auto
          object-contain
          sm:h-11
          md:h-12
        "
          />
        </div>

        {/* ================= CREDIT ================= */}
        <p
          className="
        text-center
        text-[10px]
        font-medium
        tracking-[0.12em]
        text-[#403D39]
        sm:text-xs
      "
        >
          Designed and Developed by{' '}
          <span className="font-semibold text-[#D90B18]">Vinod Mathew</span>
        </p>
      </div>
    </footer>
  );
}
