import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

const sectionItems = [
  { icon: Home, label: "Home" },
  { icon: User, label: "Sobre" },
  { icon: Briefcase, label: "Projetos" },
  { icon: Code, label: "Skills" },
  { icon: Mail, label: "Contato" },
];

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <>
      {/* Desktop / large: vertical sidebar */}
      <nav className="hidden lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:z-50 lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-20 bg-[var(--navigation-background)] backdrop-blur-md lg:border-r lg:border-[var(--color-border)]">
        <div className="absolute top-8 font-serif text-2xl font-bold text-gradient-primary">LJ</div>

        <div className="flex flex-col items-center gap-4">
          {sectionItems.map((item, index) => {
            const isActive = activeSection === index;
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => onNavigate(index)}
                className={cn(
                  "group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
                  isActive
                    ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-lg"
                    : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]"
                )}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />

                {/* Tooltip */}
                <span className="absolute left-full ml-4 px-3 py-1.5 bg-[var(--card)] border border-[var(--color-border)] rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl z-50 text-[var(--color-foreground)]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile / tablet: bottom floating nav */}
      <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-4 z-50 flex items-center gap-3 bg-[var(--navigation-background)]/90 backdrop-blur-md rounded-full px-3 py-2 lg:hidden shadow-lg">
        {sectionItems.map((item, index) => {
          const isActive = activeSection === index;
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate(index)}
              aria-label={item.label}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-md transition",
                isActive ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]" : "text-[var(--color-muted-foreground)] hover:bg-[var(--color-secondary)]"
              )}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </nav>
    </>
  );
}
