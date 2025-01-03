/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-20 h-18 rounded-lg">
              <img
                src="/images/avatar-1.png"
                width={50}
                height={70}
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[20ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
    <a href="/images/BAYAN_ALHARBI_CV%20(1).pdf" download>
        <ButtonPrimary
            label="Download CV"
            icon="download"
        />
    </a>

    <ButtonOutline
        href="#about"
        label="Scroll down"
        icon="arrow_downward"
    />
</div>
        </div>

        <div className="hidden lg:block">
        <figure className="w-full max-w-[350px] ml-auto bg-gradient-to-t from-[rgba(182,92,240,0.84)] via-[rgba(182,92,240,0.4)] to-[rgba(182,92,240,0)] rounded-[60px] overflow-hidden">
            <img
              src="/images/hero-banner.png"
              width={500}
              height={300}
              className="w-full"
            />
          </figure>
        </div>

      </div>

    </section>
  )
}

export default Hero