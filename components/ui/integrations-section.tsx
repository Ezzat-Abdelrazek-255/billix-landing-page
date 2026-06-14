"use client";

import dynamic from "next/dynamic";
import DotsPattern from "./dots-pattern";
import LazyVisible from "./lazy-visible";
import LogoCircle from "@/icons/logos/logo-circle";
import { useTheme } from "@/providers/theme-provider";
import { useTranslations } from "next-intl";

const FallingObjects = dynamic(() => import("./falling-objects"), { ssr: false });

const IntegrationsSection = () => {
  const t = useTranslations("home");
  const { theme } = useTheme();

  return (
    <section data-reveal-group className="grid-12 text-background px-(--container-px)">
      <div className="bg-foreground p-2xl relative z-0 col-span-12 flex aspect-square flex-col justify-between overflow-hidden rounded-sm sm:aspect-[2.5] md:col-span-6 md:aspect-square">
        <div className="absolute right-0 -z-10">
          <LogoCircle className="text-background w-[42rem]" />
        </div>
        <h2 className="font-serif text-[4.8rem] leading-[1.1] text-white mix-blend-difference">
          {t("integrations.title")}
        </h2>
        <div className="gap-xl flex flex-col font-sans text-[1.6rem] font-medium text-white mix-blend-difference md:text-[2rem]">
          <p>{t("integrations.paragraph1")}</p>
          <p>{t("integrations.paragraph2")}</p>
        </div>
      </div>
      {/* Hand Cursor */}
      <div
        data-cursor="accent"
        className="border-primary/20 bg-background-muted relative z-0 col-span-6 hidden aspect-square flex-col justify-between rounded-sm border border-dashed md:flex"
      >
        <p className="text-primary absolute top-(--space-2xl) left-(--space-2xl) font-serif text-[4.8rem] leading-[1.1] font-light">
          {t("integrations.count")}
        </p>
        <DotsPattern />
        <LazyVisible className="absolute inset-0">
          <FallingObjects
          scale={1}
          pills={[
            { texture: theme === "light" ? "/pills/airtable.png" : "/pills/airtable-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/asana.png" : "/pills/asana-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/clickup.png" : "/pills/clickup-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/drive.png" : "/pills/drive-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/gitlab.png" : "/pills/gitlab-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/gmail.png" : "/pills/gmail-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/hubspot.png" : "/pills/hubspot-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/jotform.png" : "/pills/jotform-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/linear.png" : "/pills/linear-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/notion.png" : "/pills/notion-dark.png", width: 220, height: 60 },
            {
              texture: theme === "light" ? "/pills/salesforce.png" : "/pills/salesforce-dark.png",
              width: 220,
              height: 60,
            },
            { texture: theme === "light" ? "/pills/sentry.png" : "/pills/sentry-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/slack.png" : "/pills/slack-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/stripe.png" : "/pills/stripe-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/telegram.png" : "/pills/telegram-dark.png", width: 220, height: 60 },
            { texture: theme === "light" ? "/pills/trello.png" : "/pills/trello-dark.png", width: 220, height: 60 },
          ]}
          />
        </LazyVisible>
      </div>
    </section>
  );
};

export default IntegrationsSection;
