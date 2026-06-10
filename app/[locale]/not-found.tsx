import BubbleButton from "@/components/ui/bubble-button";
import DotsPattern from "@/components/ui/dots-pattern";
import Eyebrow from "@/components/ui/eyebrow";
import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="not-found-page flex flex-col gap-(--sections-gap)">
      <section className="relative z-0 flex min-h-[80dvh] flex-col items-center justify-center px-(--container-px) pt-(--page-pt) pb-[8rem]">
        <DotsPattern className="opacity-10" />

        {/* Decorative large 404 in background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="text-foreground/[0.03] select-none font-sans text-[40rem] font-bold leading-none sm:text-[56rem] md:text-[72rem]">
            404
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-xl">
          <Eyebrow animated={false}>{t("eyebrow")}</Eyebrow>

          <div className="flex flex-col items-center gap-base-sm text-center">
            <h1 className="font-sans text-[4.8rem] leading-[1.1] font-bold tracking-[-0.02em] sm:text-[6.4rem] md:text-[8rem]">
              {t("titleLine1")}
              <br />
              <span className="font-serif font-light italic">{t("titleLine2")}</span>
            </h1>

            <p className="body-base max-w-[48rem] text-center">{t("description")}</p>
          </div>

          <div className="mt-base flex flex-col items-center gap-base sm:flex-row">
            <BubbleButton isLink href="/">
              {t("backToHome")}
            </BubbleButton>
            <BubbleButton isLink href="/contact" variant="tertiary">
              {t("contactSupport")}
            </BubbleButton>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-[4rem] flex items-center gap-sm">
          <LogoSymbolIcon className="text-foreground/20 w-[1.8rem]" />
          <p className="text-foreground/20 font-sans text-sm font-medium">billix.io</p>
        </div>
      </section>
    </main>
  );
}
