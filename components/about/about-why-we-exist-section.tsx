import Eyebrow from "@/components/ui/eyebrow";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import AccessibilityIcon from "@/icons/ui/accessibility-icon";
import LimitsIcon from "@/icons/ui/limits-icon";
import TeamIcon from "@/icons/ui/team-icon";
import XIcon from "@/icons/ui/x-icon";

const reasons = [
  {
    number: "01",
    icon: XIcon,
    title: "To remove the complexity of modern work",
    description:
      "Work today is overloaded with tools, tabs, and manual steps. People spend more time switching between apps than actually getting work done. Billix exists to eliminate that complexity. We believe technology should feel invisible — you speak naturally, and your work simply happens. No configuration, no technical setup, just effortless execution.",
  },
  {
    number: "02",
    icon: TeamIcon,
    title: "To Give Everyone an AI Teammate — Not Just an AI Chat",
    description:
      "Most AI tools stop at generating text. They don't take action, don't understand context, and don't integrate with how people actually work. Billix was built to bridge that gap. We exist to give every individual and every business a reliable AI teammate that can think, understand, and execute real tasks across tools in real time.",
  },
  {
    number: "03",
    icon: LimitsIcon,
    title: "To Break the Limits of Single-Model AI",
    description:
      "AI shouldn't lock you into one provider or one brain. Different tasks need different strengths — reasoning, creativity, precision, or speed. Billix brings 40+ models together into one workspace so users get the strongest intelligence for every situation. We exist to give people true AI freedom: the ability to choose, switch, and compare instantly.",
  },
  {
    number: "04",
    icon: AccessibilityIcon,
    title: "To Make Automation Accessible to Everyone",
    description:
      "Traditional automation tools require technical skills, triggers, flow builders, and endless setup. Most people never use them to their full potential. Billix exists to change that. Our automation is conversational, intuitive, and built for real humans — not engineers. If you can explain what you want, Billix can do it for you.",
  },
];

const ReasonCard = ({
  reason,
  isFirst,
  isLast,
}: {
  reason: (typeof reasons)[0];
  isFirst: boolean;
  isLast: boolean;
}) => {
  const Icon = reason.icon;

  return (
    <div
      className={`grid-12 gap-xl border-y-foreground/20 col-span-12 py-[6.4rem] ${isFirst ? "border-y" : "border-b"} ${isLast ? "border-0" : ""}`}
    >
      <p
        data-split="heading"
        data-split-padding-bottom="0.4rem"
        className="col-span-12 font-sans text-[12.8rem] leading-[0.75] font-bold sm:col-span-4 md:col-span-3 md:text-[21.6rem]"
      >
        {reason.number}
      </p>
      <div className="gap-base col-span-12 flex flex-col sm:col-span-8 sm:col-start-5 md:col-span-6 md:col-start-7">
        <div data-reveal-group className="flex">
          <div className="border-foreground grid aspect-square h-full shrink-0 place-content-center rounded-full border border-dashed">
            <Icon />
          </div>
          <p className="bg-background-muted py-sm px-base rounded-full font-sans font-medium">{reason.title}</p>
        </div>
        <p data-split="heading" className="text-foreground/60 body-base">
          {reason.description}
        </p>
      </div>
    </div>
  );
};

const AboutWhyWeExistSection = () => {
  return (
    <section className="grid-12 gap-xl px-(--container-px) sm:gap-y-[4.8rem]">
      <div className="gap-base sm:gap-xl col-span-12 flex flex-col sm:col-span-8 md:col-span-5">
        <Eyebrow>Why we exist</Eyebrow>
        <h2 data-split="heading" data-split-padding-bottom="0.4rem" className="h2">
          The reason behind<span className="h2-serif"> Everything </span>we build at Billix
        </h2>
      </div>
      <div data-reveal-group className="col-start-12 self-end justify-self-end">
        <LogoSymbolIcon className="hidden w-[7rem] md:block" />
      </div>
      <div className="grid-12 col-span-12">
        {reasons.map((reason, index) => (
          <ReasonCard key={reason.number} reason={reason} isFirst={index === 0} isLast={index === reasons.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default AboutWhyWeExistSection;
