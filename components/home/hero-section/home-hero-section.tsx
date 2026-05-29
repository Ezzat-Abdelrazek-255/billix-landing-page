import HomeChatbox from "./home-chat-input";
import HomeHeroHeading from "./home-hero-heading";
import HomeHeroValueProposition from "./home-hero-value-proposition";

const HomeHeroSection = () => {
  return (
    <section className="gap-base-sm sm:gap-base md:gap-xl hero-section flex flex-col px-(--container-px) pt-[18rem] md:pt-[12rem]">
      <HomeHeroHeading />
      <div className="gap-base flex flex-col">
        <HomeChatbox />
        <HomeHeroValueProposition />
      </div>
    </section>
  );
};

export default HomeHeroSection;
