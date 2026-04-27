export function Footer() {
  return (
    <footer className="bg-[#05050A] border-t border-white/5 py-12">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground/60 max-w-4xl space-y-4">
        <p>
          $LM10MAG is NOT an official token of Lionel Messi, any football club, federation, or organization. It is a fan-created meme coin with no intrinsic value or expectation of profit.
        </p>
        <p className="font-bold text-foreground/50">
          This is not financial advice — act under your own risk.
        </p>
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© POSSUL {new Date().getFullYear()}</p>
          <div className="font-mono text-xs">ONE LAST MAGIC</div>
        </div>
      </div>
    </footer>
  );
}
