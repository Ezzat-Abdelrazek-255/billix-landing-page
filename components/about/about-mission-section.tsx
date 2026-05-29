import Eyebrow from "@/components/ui/eyebrow";

const AboutMissionSection = () => {
  return (
    <section className="gap-xl flex flex-col items-center px-(--container-px)">
      <Eyebrow>Our Mission</Eyebrow>
      <div className="grid-12">
        <h2
          data-split="heading"
          className="col-span-12 text-center font-sans text-[3.2rem] leading-[1.1] font-medium tracking-tight md:col-span-8 md:col-start-3 md:text-[4.8rem]"
        >
          Billix eliminates friction across your workflow — no triggers, no flow builders, no context switching. Just
          one intelligent workspace that listens, understands, and gets things done across all your apps.
        </h2>
      </div>
    </section>
  );
};

export default AboutMissionSection;
