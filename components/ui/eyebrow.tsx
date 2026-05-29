import LogoSymbolIcon from "@/icons/logos/logo-symbol";
import { cn } from "@/lib/utils";

const Eyebrow = ({
  children,
  className,
  logoClassName,
  animated = true,
  animationDelay = 0,
}: {
  children?: React.ReactNode;
  className?: string;
  logoClassName?: string;
  animated?: boolean;
  animationDelay?: number;
}) => {
  return animated ? (
    <div data-reveal-group data-reveal-delay={animationDelay} className={cn("gap-sm flex items-center", className)}>
      <EyebrowInner logoClassName={logoClassName}>{children}</EyebrowInner>
    </div>
  ) : (
    <div className={cn("gap-sm flex items-center", className)}>
      <EyebrowInner logoClassName={logoClassName}>{children}</EyebrowInner>
    </div>
  );
};

function EyebrowInner({ children, logoClassName }: { children?: React.ReactNode; logoClassName?: string }) {
  return (
    <>
      <LogoSymbolIcon className={cn("text-primary w-[2.2rem]", logoClassName)} />
      <p className="font-sans text-base font-medium">{children}</p>
    </>
  );
}

export default Eyebrow;
