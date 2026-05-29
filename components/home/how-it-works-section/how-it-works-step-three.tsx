"use client";
import { useEffect, useRef, useState } from "react";
import CalenderIcon from "@/icons/brands/calender-icon";
import DocsIcon from "@/icons/brands/docs-icon";
import GmailIcon from "@/icons/brands/gmail-icon";
import HubspotIcon from "@/icons/brands/hubspot-icon";
import MidjourneyIcon from "@/icons/brands/midjourney-icon";
import NotionIcon from "@/icons/brands/notion-icon";
import { AnimatePresence, motion } from "motion/react";

const CARDS = [
  {
    icon: MidjourneyIcon,
    title: "Image generated",
    time: "Just now",
    service: "Midjourney",
  },
  {
    icon: HubspotIcon,
    title: "CRM update completed",
    time: "1 min ago",
    service: "HubSpot",
  },
  {
    icon: GmailIcon,
    title: "Email drafted",
    time: "2 mins ago",
    service: "Gmail",
  },
  {
    icon: DocsIcon,
    title: "Document summary ready",
    time: "3 mins ago",
    service: "Google Docs",
  },
  {
    icon: CalenderIcon,
    title: "Meeting summary ready",
    time: "4 mins ago",
    service: "Calendar",
  },
  {
    icon: NotionIcon,
    title: "New Notion page created",
    time: "5 mins ago",
    service: "Notion",
  },
];

const HowItWorksStepThree = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState(CARDS);
  const removedCard = useRef(CARDS[0]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const loop = () => {
      setCards(prev => {
        const [first, ...rest] = prev;
        const removed = removedCard.current;
        removedCard.current = first;
        if (prev.length === CARDS.length) {
          return [...rest];
        } else {
          if (rest.find(item => item.title === removed.title)) return rest;
          return [...rest, removed];
        }
      });
      timeout = setTimeout(loop, 1200);
    };

    loop();

    return () => clearTimeout(timeout);
  }, []);

  //
  return (
    <div
      data-cursor="accent"
      ref={containerRef}
      className="bg-background-muted p-base group relative z-0 flex h-[22.4rem] w-full flex-col justify-between overflow-hidden rounded-sm"
    >
      <p className="h2">03</p>
      <div className="gap-sm flex flex-col">
        <h3 className="h3">Tell Billix what you want</h3>
        <p className="text-foreground/60 w-4/5 font-sans font-medium">
          See results as Billix completes each step Everything is saved, organized, and fully searchable inside your
          workspace
        </p>
      </div>
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <div className="from-background-muted to-background-muted/0 absolute inset-0 z-10 h-full w-full bg-linear-to-t from-30% to-60%"></div>
        <div className="gap-sm list absolute top-0 -right-1/2 flex w-full translate-y-[3.2rem] flex-col">
          <AnimatePresence mode="popLayout">
            {cards.map(card => (
              <motion.article
                layoutId={card.service}
                exit={{ opacity: 0 }}
                key={card.title}
                className="bg-background card p-sm gap-base flex origin-top items-center rounded-sm"
              >
                <div className="bg-background-muted p-base rounded-xs">
                  <card.icon />
                </div>

                <div>
                  <div className="gap-sm flex items-center">
                    <p className="font-sans font-medium">{card.title}</p>
                    <p className="text-foreground/60 text-sm">{card.time}</p>
                  </div>

                  <p className="text-foreground/60 font-sans font-medium">{card.service}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksStepThree;
