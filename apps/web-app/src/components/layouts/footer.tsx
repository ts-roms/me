export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/70 bg-white/60 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>&copy; {year} Orions. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a
              className="hover:text-indigo-600 hover:underline"
              href="/about"
            >
              About
            </a>
            <a
              className="hover:text-indigo-600 hover:underline"
              href="#contact"
            >
              Contact
            </a>
            <a
              className="hover:text-indigo-600 hover:underline"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
