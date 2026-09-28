import Link from "next/link";
import { BrandLogo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <BrandLogo href={null} height={96} />
      <h1 className="font-heading text-3xl sm:text-4xl">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        That route does not exist on this portfolio.
      </p>
      <Button render={<Link href="/" />} variant="gold" className="h-11 px-5">
        Back home
      </Button>
    </div>
  );
}
