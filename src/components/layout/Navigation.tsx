import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { cn } from "@/lib/utils"; // Usando nossa função cn para segurança

interface NavigationProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

const sectionItems = [
  { icon: Home, label: "Home" }, // Index 0
  { icon: User, label: "Sobre" }, // Index 1
  { icon: Briefcase, label: "Projetos" }, // Index 2
  { icon: Code, label: "Skills" }, // Index 3
  { icon: Mail, label: "Contato" }, // Index 4
];

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed left-0 top-0 bottom-0 z-50 flex flex-col items-center justify-center w-20 bg-card/80 backdrop-blur-md border-r border-border/50">
      
      {/* Logo */}
      <div className="absolute top-8 font-serif text-2xl font-bold text-gradient-primary">
        LJ
      </div>

      {/* Navigation items */}
      <div className="flex flex-col items-center gap-4">
        {sectionItems.map((item, index) => {
          const isActive = activeSection === index;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate(index)}
              className={cn(
                "group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-blue-500/25" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" strokeWidth={1.5} />
              
              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl z-50">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1.5">
        {sectionItems.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-1 rounded-full transition-all duration-300",
              activeSection === index 
                ? "h-8 bg-primary shadow-[0_0_10px_var(--color-primary)]" 
                : "h-1.5 bg-muted-foreground/20"
            )}
          />
        ))}
      </div>
    </nav>
  );
}