import { BrandLogo } from "@/components/brand/logo";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 bg-ivory dark:bg-background">
      <BrandLogo href={null} height={120} />
      <p className="text-sm tracking-[0.2em] text-gold uppercase">Loading</p>
    </div>
  );
}
