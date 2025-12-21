import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-secondary/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          {/* Brand */}
          <div className="flex flex-col justify-center items-center ">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-6 w-6 text-accent" />
              <span className="font-semibold text-foreground">FinanceGuy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your personal financial assistant for students.
            </p>
          </div>
        </div>
        <div className="border-t border-border/20 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 FinanceGuy. Building financial confidence for students.
          </p>
        </div>
      </div>
    </footer>
  );
}
