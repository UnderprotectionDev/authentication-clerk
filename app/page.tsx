import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <SignedOut>
        <Button className="bg-white text-black">Sign In</Button>
      </SignedOut>
      <SignedIn>
        <Button className="bg-white text-black">User</Button>
      </SignedIn>
    </div>
  );
}
