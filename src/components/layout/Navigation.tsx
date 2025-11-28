import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { cn } from "@/lib/utils"; // Usando nossa função cn para segurança

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
    <nav className="fixed left-0 top-0 bottom-0 z-50 flex flex-col items-center justify-center w-20 bg-(--navigation-background) backdrop-blur-md border-r border-(--color-border)">
      <div className="absolute top-8 font-serif text-2xl font-bold text-gradient-primary">
        LJ
      </div>

      <div className="flex flex-col items-center gap-4">
        {sectionItems.map((item, index) => {
          console.log('Rendering item:', item.label, 'Active Section:', activeSection);
          const isActive = activeSection === index;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate(index)}
              className={cn(
                "group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-(--color-primary) text-(--color-primary-foreground) shadow-lg"
                  : "text-(--color-muted-foreground) hover:text-(--color-foreground) hover:bg-(--color-secondary)"
              )}
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" strokeWidth={1.5} />
              
              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-3 py-1.5 bg-(--card) border border-(--color-border) rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl z-50 text-(--color-foreground)">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Progress indicator (moved to bottom-right, active item thicker) */}
      <div className="absolute right-6 bottom-6 flex flex-col items-center gap-2">
        {sectionItems.map((_, index) => (
          <div
            key={index}
            className={cn(
              "rounded-full transition-all duration-300 transform-gpu",
              activeSection === index
                ? "w-5 h-2 bg-(--color-primary) shadow-[0_0_10px_var(--color-primary)]"
                : "w-1.5 h-1.5 bg-(--color-muted-foreground)/20"
            )}
          />
        ))}
      </div>
    </nav>
  );
}