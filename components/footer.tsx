import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground/30 bg-card/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="flex flex-col justify-center items-center ">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/Logo.png"
                alt="FinanceGuy logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-md object-cover"
              />
              <span className="text-foreground font-display text-sm">FINANCEGUY</span>
            </div>
            <p className="text-xl text-muted-foreground font-body">
              Track. Quest. Hoard your gold.
            </p>
          </div>
        </div>
        <div className="border-t-2 border-foreground/20 pt-8">
          <p className="text-center text-lg text-muted-foreground font-body">
            © FinanceGuy · Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
