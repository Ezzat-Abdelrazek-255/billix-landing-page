"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import BubbleButton from "./bubble-button";
import DirectionalButton from "./directional-button";
import DotsPattern from "./dots-pattern";
import { INTRO_STAGGER, LOADER_DELAY } from "@/constants";
import CookiesIcon from "@/icons/ui/cookies-icon";
import FileIcon from "@/icons/ui/file-icon";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";

interface ConsentItemProps {
  icon: React.ComponentType;
  label: string;
  description: React.ReactNode;
}

const ConsentItem = ({ icon: Icon, label, description }: ConsentItemProps) => (
  <>
    <div className="flex h-fit w-full items-center justify-start pt-[0.4rem]">
      <div className="border-background grid aspect-square h-full shrink-0 basis-[2.4rem] place-content-center rounded-full border border-dashed">
        <Icon />
      </div>
      <div className="bg-foreground-muted px-base-sm py-2xs text-background h-[2.4rem] w-full rounded-full text-center font-sans text-sm leading-[1.1] font-medium">
        {label}
      </div>
    </div>
    <p className="text-background/60 text-base-sm col-start-2 self-center font-sans font-medium">{description}</p>
  </>
);

const COOKIE_CONSENT_KEY = "cookie-consent";

const setCookieConsent = (value: "accepted" | "rejected") => {
  try {
    document.cookie = `${COOKIE_CONSENT_KEY}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
  } catch (error) {
    console.error("Failed to set cookie consent:", error);
  }
};

const getCookieConsent = (): string | null => {
  try {
    const cookies = document.cookie.split("; ");
    const consentCookie = cookies.find(cookie => cookie.startsWith(`${COOKIE_CONSENT_KEY}=`));
    return consentCookie ? consentCookie.split("=")[1] : null;
  } catch (error) {
    console.error("Failed to get cookie consent:", error);
    return null;
  }
};

const CookieConsent = () => {
  const containerRef = useRef(null);
  const [shouldShow, setShouldShow] = useState(false);
  const t = useTranslations("common.cookieConsent");

  const consentItems = [
    {
      id: "cookies",
      icon: CookiesIcon,
      label: t("cookiesLabel"),
      description: t("cookiesDescription"),
    },
    {
      id: "privacy",
      icon: FileIcon,
      label: t("privacyLabel"),
      description: t.rich("privacyDescription", {
        link: chunks => (
          <Link className="text-secondary font-medium underline" href="/privacy-policy">
            {chunks}
          </Link>
        ),
      }),
    },
  ] as const;

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      const timer = setTimeout(() => setShouldShow(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  useGSAP(
    () => {
      if (!shouldShow) return;

      gsap.from(".cookie-consent", {
        yPercent: 100,
        opacity: 0,
        ease: "primary",
        duration: 0.7,
        delay: LOADER_DELAY + INTRO_STAGGER * 5,
      });

      ScrollTrigger.addEventListener("scrollStart", function() {
        gsap.to(".cookie-consent", {
          yPercent: 100,
          opacity: 0,
          ease: "primary",
          duration: 0.7,
        });
      });
    },
    { scope: containerRef, dependencies: [shouldShow] },
  );

  const handleClose = () => {
    gsap.to(".cookie-consent", {
      yPercent: 100,
      opacity: 0,
      ease: "primary",
      duration: 0.7,
      onComplete: () => setShouldShow(false),
    });
  };

  const handleAccept = () => {
    setCookieConsent("accepted");
    handleClose();
  };

  const handleReject = () => {
    setCookieConsent("rejected");
    handleClose();
  };

  if (!shouldShow) return null;

  return (
    <div ref={containerRef} className="grid-12 p-xl pointer-events-none fixed bottom-0 left-0 w-full">
      <div className="bg-foreground text-background p-base gap-base cookie-consent pointer-events-auto relative z-0 col-span-12 flex max-w-[600px] flex-col items-start justify-self-end rounded-sm shadow-md sm:col-span-7 sm:col-start-6 md:col-span-4 md:col-start-9">
        <DotsPattern colorVariable="--background" className="opacity-10" />
        <button
          onClick={handleClose}
          className="bg-foreground-muted p-sm absolute top-(--space-base) right-(--space-base) grid size-[3.2rem] cursor-pointer place-content-center rounded-full"
          aria-label={t("closeAriaLabel")}
        >
          <X className="w-[1.6rem]" />
        </button>

        <div className="gap-base-lg flex flex-col">
          <h2 className="text-background rounded-full font-serif text-xl leading-none font-light">{t("title")}</h2>

          <div className="gap-x-base gap-y-sm grid grid-cols-[auto_1fr] grid-rows-[repeat(2,auto)]">
            {consentItems.map(item => (
              <ConsentItem key={item.id} icon={item.icon} label={item.label} description={item.description} />
            ))}
          </div>
        </div>

        <div className="gap-sm flex w-full justify-end">
          <DirectionalButton onClick={handleReject} className="bg-foreground text-background border-background">
            {t("reject")}
          </DirectionalButton>
          <BubbleButton variant="secondary" onClick={handleAccept}>
            {t("accept")}
          </BubbleButton>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
