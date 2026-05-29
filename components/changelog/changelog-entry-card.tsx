const ChangelogEntryCard = ({ children, revealDelay = 0 }: { children?: React.ReactNode; revealDelay?: number }) => {
  return (
    <section
      data-reveal-group
      data-animate-whole
      data-reveal-delay={revealDelay}
      className="bg-background-muted flex flex-col rounded-sm p-[4.8rem]"
    >
      {children}
    </section>
  );
};

export default ChangelogEntryCard;
