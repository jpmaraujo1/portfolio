import { nav, portfolio } from "@/content/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#071428]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <a href="#top" className="font-serif text-lg tracking-tight text-[#f7f3ea]">
          {portfolio.name}
          <span className="ml-2 align-middle font-sans text-[10px] font-medium tracking-[0.22em] text-[#f3e6c8]/80 uppercase">
            Placeholder
          </span>
        </a>
        <nav aria-label="Page">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#d5e0f0]">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link inline-flex min-h-11 items-center tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
