
import BannerImage from "../assets/banner-main.png";
import BgShadow from "../assets/bg-shadow.png";

function Banner() {
  return (
    <div className="container mx-auto px-4">
      <section
        className="relative mt-8 overflow-hidden rounded-2xl bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${BgShadow})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-12 text-center sm:py-16 md:py-20">
          
          {/* Banner Image */}
          <img
            src={BannerImage}
            alt="Dream 11 Cricket Team"
            className="w-52 sm:w-64 md:w-72"
          />

          {/* Heading */}
          <h1 className="mt-6 max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-3xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm font-medium text-gray-300 sm:text-base md:text-lg">
            Beyond Boundaries. Beyond Limits.
          </p>

          {/* CTA */}
          <button className="mt-7 rounded-xl bg-[#E7FE29] px-6 py-3 font-bold text-black shadow-lg shadow-[#E7FE29]/20 outline outline-2 outline-offset-4 outline-[#E7FE29] transition-all duration-300 hover:scale-105 hover:bg-[#d9f51f] active:scale-95">
            Claim Free Credit
          </button>
        </div>
      </section>
    </div>
  );
}

export default Banner;
