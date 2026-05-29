import Image from "next/image";

interface ChangelogEntryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ChangelogEntryImage: React.FC<ChangelogEntryImageProps> = ({ src, alt, width, height }) => (
  <Image width={width} height={height} src={src} className="w-full rounded-sm" alt={alt} />
);

export default ChangelogEntryImage;
