import { ComponentType, FC } from "react";
import Eyebrow from "@/components/ui/eyebrow";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import ConnectionIcon from "@/icons/ui/connection-icon";
import GearIcon from "@/icons/ui/gear-icon";
import LampIcon from "@/icons/ui/lamp-icon";
import SparklesIcon from "@/icons/ui/sparkles-icon";

interface Feature {
  icon: ComponentType<{ className?: string }>;
  label: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: GearIcon,
    label: "Setup-Free Automation",
    description:
      "Others: Spend hours building zaps, triggers, and actions. Billix: Just describe the outcome you want — we handle the logic, connections, and execution automatically. 'Send today's sales report to the team.' → Billix figures out the right files, generates the report, and sends it — no setup.",
  },
  {
    icon: SparklesIcon,
    label: "Natural Language Control",
    description:
      "You don't need to learn a tool — you just talk to it. Billix understands context, handles multi-step workflows, and updates you when it's done.",
  },
  {
    icon: ConnectionIcon,
    label: "Connected to Everything",
    description:
      "Over 500+ integrations out of the box — Gmail, Slack, Notion, HubSpot, Google Sheets, ClickUp, and more. If your app has an API, Billix can act on it.",
  },
  {
    icon: LampIcon,
    label: "Real Execution, Not Suggestions",
    description:
      "While other AI tools write responses, Billix actually performs the work. Think of it as your digital employee that gets things done — not just one that talks.",
  },
];

const FeatureItem: FC<Feature> = ({ icon: Icon, label, description }) => (
  <div className="gap-base border-foreground/20 pt-lg flex grid-cols-8 flex-col border-t sm:grid">
    <div data-reveal-group className="col-span-3 flex h-fit items-center">
      <div className="border-foreground grid h-[3.6rem] shrink-0 basis-[3.6rem] place-content-center rounded-full border border-dashed">
        <Icon />
      </div>
      <div className="body-base bg-background-muted text-foreground py-xs px-base rounded-full whitespace-nowrap">
        {label}
      </div>
    </div>
    <p data-split="heading" className="body-base col-span-4 col-start-5">
      {description}
    </p>
  </div>
);

const WhyUsSection = () => {
  return (
    <section className="grid-12 px-(--container-px)">
      <div data-reveal-group className="hidden md:block">
        <LogoSymbolIcon className="text-foreground" />
      </div>
      <div className="gap-xl col-span-12 col-start-1 flex flex-col sm:gap-[6.4rem] md:col-span-8 md:col-start-5">
        <div className="gap-base sm:gap-xl flex flex-col">
          <Eyebrow>Why Billix</Eyebrow>
          <h2
            data-split="heading"
            className="font-sans text-[3.2rem] leading-[1.2] font-bold tracking-[-2%] sm:text-[4rem]"
          >
            Traditional automation tools require flows, logic, and triggers. Billix understands your goal and executes
            the task inside your apps — just like a real employee.
          </h2>
        </div>
        <div className="gap-xl flex w-full flex-col sm:gap-[6.4rem]">
          {FEATURES.map(feature => (
            <FeatureItem key={feature.label} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
