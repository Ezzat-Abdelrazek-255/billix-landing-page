"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import DotsPattern from "../dots-pattern";
import AirtableIcon from "@/icons/brands/airtable-icon";
import DocsIcon from "@/icons/brands/docs-icon";
import DriveIcon from "@/icons/brands/drive-icon";
import DropboxIcon from "@/icons/brands/dropbox-icon";
import GithubIcon from "@/icons/brands/github-icon";
import GmailIcon from "@/icons/brands/gmail-icon";
import LinkedinIcon from "@/icons/brands/linkedin-icon";
import MidjourneyIcon from "@/icons/brands/midjourney-icon";
import NotionIcon from "@/icons/brands/notion-icon";
import XIcon from "@/icons/brands/x-icon";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";

type ActionItemData = {
  id: string;
  icon: ComponentType<{ className?: string }>;
};

const ACTION_ITEMS: ActionItemData[] = [
  {
    id: "docs",
    icon: DocsIcon,
  },
  {
    id: "midjourney",
    icon: MidjourneyIcon,
  },
  {
    id: "linkedin",
    icon: LinkedinIcon,
  },
  {
    id: "gmail",
    icon: GmailIcon,
  },
  {
    id: "x",
    icon: XIcon,
  },
  {
    id: "dropbox",
    icon: DropboxIcon,
  },
  {
    id: "github",
    icon: GithubIcon,
  },
  {
    id: "notion",
    icon: NotionIcon,
  },
  {
    id: "airtable",
    icon: AirtableIcon,
  },
  {
    id: "drive",
    icon: DriveIcon,
  },
];

const FeatureHeader: React.FC = () => {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col justify-between md:h-full">
      <LogoSymbolIcon className="hidden w-[6.4rem] md:block" />

      <div className="gap-sm flex flex-col items-start text-left">
        <h3 className="h3-serif bg-background-muted w-fit">{t("features.actions.title")}</h3>
        <p className="body-base-sm text-primary text-balance">{t("features.actions.description")}</p>
      </div>
    </div>
  );
};

const ActionTimeline: React.FC<{ items: ActionItemData[] }> = ({ items }) => {
  const t = useTranslations("home");

  return (
    <div className="gap-xl relative z-0 flex h-full w-full flex-col">
      <div className="bg-primary absolute top-(--space-lg) left-[2rem] -z-10 h-full w-[1px] -translate-x-1/2" />
      <div className="from-background-muted/0 to-background-muted absolute top-0 left-0 z-10 h-[120%] w-full bg-linear-to-b" />

      <div className="gap-xl absolute left-0 flex flex-col">
        <AnimatePresence mode="popLayout">
          {items.map(({ id, icon: Icon }) => (
            <motion.div key={id} layoutId={id} exit={{ opacity: 0 }} className="gap-sm flex items-center">
              <div className="bg-background-muted border-primary p-sm grid size-[4rem] place-content-center rounded-full border border-dashed">
                <Icon className="w-full" />
              </div>
              <p className="font-sans text-base font-medium">{t(`features.actions.items.${id}`)}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FeatureActions: React.FC = () => {
  const [cards, setCards] = useState<ActionItemData[]>(ACTION_ITEMS);
  const removedCard = useRef(ACTION_ITEMS[0]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const loop = () => {
      setCards(prev => {
        const [first, ...rest] = prev;
        const removed = removedCard.current;
        removedCard.current = first;
        if (prev.length === ACTION_ITEMS.length) {
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

  return (
    <div className="p-lg bg-background-muted relative z-0 h-full w-full overflow-hidden rounded-sm">
      <DotsPattern />

      <div className="gap-xl flex h-full w-full flex-col md:grid md:grid-cols-2">
        <FeatureHeader />
        <ActionTimeline items={cards} />
      </div>
    </div>
  );
};

export default FeatureActions;
