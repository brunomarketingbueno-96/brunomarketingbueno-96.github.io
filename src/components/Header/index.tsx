import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import Logo from "@/components/Logo";
import Menu from "@/components/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const mobileMenu = typeof document !== "undefined" ? createPortal(
    <div
      className={`
        md:hidden fixed top-14 left-0 w-full h-[calc(100dvh-3.5rem)]
        bg-black backdrop-blur-md z-999 flex flex-col overflow-y-auto
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <Menu mobile onClose={() => setIsOpen(false)} />
    </div>,
    document.body
  ) : null;

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="flex items-center justify-between px-6 md:px-20 h-16 relative z-50">
        <Logo />

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-zinc-900 transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-900 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-900 transition-transform duration-300 ease-in-out ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <div className="hidden md:flex">
          <Menu />
        </div>
      </div>

      {mobileMenu}

    </header>
  );
}
