import { Coffee } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <Coffee size={32} className="mx-auto animate-pulse text-accent" />
        <p className="mt-4 text-sm text-muted-foreground">Brewing...</p>
      </div>
    </div>
  );
}
