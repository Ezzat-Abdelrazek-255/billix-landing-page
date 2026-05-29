import { INTRO_DURATION, LOADER_DELAY } from "@/constants";

const HomeHeroHeading = () => {
  return (
    <h1
      className="text-center"
      data-split-duration={INTRO_DURATION}
      data-split="heading"
      data-split-delay={LOADER_DELAY - 0.1}
    >
      <span className="h2 pb-sm block leading-none">Stop handling the daily work</span>
      <br />
      <span className="h2-serif pb-base-sm block leading-none">Start directing billix</span>
    </h1>
  );
};

export default HomeHeroHeading;
