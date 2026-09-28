import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function BrandLogo({
  className,
  height = 48,
  priority = false,
  href = "/",
}: {
  className?: string;
  height?: number;
  priority?: boolean;
  href?: string | null;
}) {
  const image = (
    <Image
      src={siteConfig.assets.logo}
      alt={`${siteConfig.logoName} monogram`}
      width={height}
      height={height}
      priority={priority}
      className={cn("h-full w-auto max-w-full bg-transparent object-contain", className)}
    />
  );

  const mark = (
    <span className="inline-flex bg-transparent" style={{ height }}>
      {image}
    </span>
  );

  if (!href) {
    return mark;
  }

  return (
    <Link
      href={href}
      className="inline-flex bg-transparent focus-visible:ring-2 focus-visible:ring-gold"
      aria-label={`${siteConfig.name} home`}
    >
      {mark}
    </Link>
  );
}
