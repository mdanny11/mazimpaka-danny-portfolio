import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function PortraitFrame({
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 80vw",
  variant = "default",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
  variant?: "default" | "hero";
}) {
  if (variant === "hero") {
    return (
      <div className={cn("relative h-full w-full", className)}>
        <Image
          src={siteConfig.assets.portrait}
          alt={`Professional portrait of ${siteConfig.name}`}
          fill
          priority={priority}
          sizes={sizes}
          className="bg-transparent object-contain object-top"
        />
      </div>
    );
  }

  return (
    <div className={cn("relative mx-auto w-full max-w-[240px]", className)}>
      <Image
        src={siteConfig.assets.portrait}
        alt={`Professional portrait of ${siteConfig.name}`}
        width={768}
        height={1024}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full bg-transparent object-contain"
      />
    </div>
  );
}
