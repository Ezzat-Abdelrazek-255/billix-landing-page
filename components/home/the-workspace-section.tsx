import BubbleButton from "@/components/ui/bubble-button";
import Eyebrow from "@/components/ui/eyebrow";
import VideoPlayer from "@/components/ui/video-player";
import { APP_URL } from "@/constants";

const TheWorkspaceSection = () => {
  return (
    <section className="grid-12 gap-[3.2rem] px-(--container-px) sm:gap-y-[6.4rem]">
      <div className="gap-base sm:gap-xl col-span-12 flex flex-col items-center sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
        <div data-reveal-group>
          <Eyebrow>The Workspace</Eyebrow>
        </div>
        <h1 data-split="heading" className="h1-serif">
          <div className="pb-base-sm">The Workspace</div>
        </h1>
        <p data-split="heading" className="body-base text-center">
          Billix brings your tools, tasks, and AI capabilities into one unified workspace. Chat, delegate work, manage
          files, trigger automations, and connect with 500+ apps — with everything searchable, synced, and always up to
          date
        </p>
      </div>
      <div
        data-reveal-group
        className="bg-foreground col-span-12 aspect-square overflow-hidden rounded-sm sm:aspect-auto sm:h-[50rem] md:col-span-10 md:col-start-2 md:h-[72rem]"
      >
        <VideoPlayer src="/workspace.mp4" />
      </div>
      <div className="gap-base col-span-12 flex flex-col items-center sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
        <p data-split="heading" className="body-base text-center">
          Billix replaces scattered tools and messy workflows with one unified AI platform. Chat, automate tasks, create
          content, manage files, and connect with 100+ apps — all in one organized, searchable workspace.
        </p>
        <div data-reveal-group data-animate-whole>
          <BubbleButton isLink href={APP_URL} target="_blank">
            Start for free
          </BubbleButton>
        </div>
      </div>
    </section>
  );
};

export default TheWorkspaceSection;
