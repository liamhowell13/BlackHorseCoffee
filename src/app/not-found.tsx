import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-[70px]">
      <div className="text-center px-4">
        <Coffee size={48} className="mx-auto text-accent" />
        <h1 className="mt-6 font-serif text-5xl font-bold text-foreground">
          404
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Looks like this page spilled. Let&apos;s get you a fresh one.
        </p>
        <Button asChild className="mt-6 rounded-full" size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
