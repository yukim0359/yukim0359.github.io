import { motion } from "framer-motion";
import { Globe2, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n/index.tsx";

const Header = () => {
  const { texts, locale, setLocale } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navItems = useMemo(
    () => [
      { name: texts.header.nav.home, href: "#home", id: "home" },
      { name: texts.header.nav.about, href: "#about", id: "about" },
      { name: texts.header.nav.research, href: "#research", id: "research" },
      { name: texts.header.nav.works, href: "#works", id: "works" },
      { name: texts.header.nav.skills, href: "#skills", id: "skills" },
      { name: texts.header.nav.bio, href: "#bio", id: "bio" },
    ],
    [texts.header.nav],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initialHash = window.location.hash?.replace("#", "");
    if (initialHash) setActiveSection(initialHash);

    const candidates = navItems
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];
    if (!candidates.length) return;

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let bestId = activeSection;
        let bestRatio = -1;
        for (const [id, ratio] of ratios.entries()) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio > 0 && bestId) setActiveSection(bestId);
      },
      {
        root: null,
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
        rootMargin: "-96px 0px -60% 0px",
      },
    );

    for (const el of candidates) observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navItems]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-slate-900">
            <a href="#home">{texts.header.title}</a>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-slate-900 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div
              role="group"
              aria-label={texts.header.language.groupLabel}
              className="ml-2 inline-flex items-stretch overflow-hidden rounded-lg border border-slate-200 bg-white/90 text-xs font-semibold shadow-sm backdrop-blur md:ml-3"
            >
              <span
                className="flex items-center justify-center border-r border-slate-200 bg-slate-50/60 px-2.5 text-slate-600"
                aria-hidden
              >
                <Globe2 size={16} strokeWidth={1.75} />
              </span>
              <div className="flex items-stretch p-0.5">
                <button
                  type="button"
                  onClick={() => setLocale("ja")}
                  aria-pressed={locale === "ja"}
                  className={`min-w-[2.5rem] rounded-md px-2.5 py-1 tracking-wide transition-colors ${
                    locale === "ja"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  JP
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  aria-pressed={locale === "en"}
                  className={`min-w-[2.5rem] rounded-md px-2.5 py-1 tracking-wide transition-colors ${
                    locale === "en"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <button
              className="md:hidden p-2 text-slate-700 hover:text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-slate-900 font-semibold bg-slate-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
