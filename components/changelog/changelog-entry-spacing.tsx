interface ChangelogEntrySpacingProps {
  size?: "sm" | "xl" | "6xl";
}

const ChangelogEntrySpacing: React.FC<ChangelogEntrySpacingProps> = ({ size = "sm" }) => {
  const sizeMap: Record<"sm" | "xl" | "6xl", string> = {
    sm: "h-(--space-sm)",
    xl: "h-(--space-xl)",
    "6xl": "h-[6.4rem]",
  };
  return <div className={`${sizeMap[size]} w-full`}></div>;
};

export default ChangelogEntrySpacing;
