"use client";
import { useEffect, useRef, useState } from "react";
import CalenderIcon from "@/icons/brands/calender-icon";
import DocsIcon from "@/icons/brands/docs-icon";
import GmailIcon from "@/icons/brands/gmail-icon";
import HubspotIcon from "@/icons/brands/hubspot-icon";
import MidjourneyIcon from "@/icons/brands/midjourney-icon";
import NotionIcon from "@/icons/brands/notion-icon";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";

const CARDS = [
  {
    id: "midjourney",
    icon: MidjourneyIcon,
    service: "Midjourney",
  },
  {
    id: "hubspot",
    icon: HubspotIcon,
    service: "HubSpot",
  },
  {
    id: "gmail",
    icon: GmailIcon,
    service: "Gmail",
  },
  {
    id: "docs",
    icon: DocsIcon,
    service: "Google Docs",
  },
  {
    id: "calendar",
    icon: CalenderIcon,
    service: "Calendar",
  },
  {
    id: "notion",
    icon: NotionIcon,
    service: "Notion",
  },
];

const HowItWorksStepThree = () => {
  const t = useTranslations("home");
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
          if (rest.find(item => item.id === removed.id)) return rest;
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
        <h3 className="h3">{t("howItWorks.step3.title")}</h3>
        <p className="text-foreground/60 w-4/5 font-sans font-medium">{t("howItWorks.step3.description")}</p>
      </div>
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <div className="from-background-muted to-background-muted/0 absolute inset-0 z-10 h-full w-full bg-linear-to-t from-30% to-60%"></div>
        <div className="gap-sm list absolute top-0 -right-1/2 flex w-full translate-y-[3.2rem] flex-col">
          <AnimatePresence mode="popLayout">
            {cards.map(card => (
              <motion.article
                layoutId={card.service}
                exit={{ opacity: 0 }}
                key={card.id}
                className="bg-background card p-sm gap-base flex origin-top items-center rounded-sm"
              >
                <div className="bg-background-muted p-base rounded-xs">
                  <card.icon />
                </div>

                <div>
                  <div className="gap-sm flex items-center">
                    <p className="font-sans font-medium">{t(`howItWorks.step3.cards.${card.id}.title`)}</p>
                    <p className="text-foreground/60 text-sm">{t(`howItWorks.step3.cards.${card.id}.time`)}</p>
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
