import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-cream text-charcoal section-pad">
      <div className="text-center">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyan mb-6">
          Error 404
        </div>
        <h1 className="heading-serif text-[clamp(3rem,8vw,6rem)] leading-[0.9] mb-8">
          Page not found
        </h1>
        <p className="font-mono text-[12px] tracking-[0.15em] text-charcoal/50 mb-12 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-full bg-charcoal text-cream font-mono text-[11px] tracking-[0.25em] uppercase hover:bg-cyan hover:text-abyss transition-all duration-300"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
