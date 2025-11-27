import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  items?: string[];
  onAction?: () => void;
  actionLabel?: string;
  gradient?: "primary" | "secondary" | "earth";
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  image,
  items,
  onAction,
  actionLabel = "Pelajari Lebih Lanjut",
  gradient = "primary",
}: FeatureCardProps) => {
  const gradientClasses = {
    primary: "bg-gradient-primary",
    secondary: "bg-gradient-secondary",
    earth: "bg-gradient-earth",
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium animate-fade-in">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
        </div>
      )}
      
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className={`${gradientClasses[gradient]} rounded-xl p-3 shrink-0`}>
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>

        {items && items.length > 0 && (
          <ul className="space-y-2 pt-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {onAction && (
          <Button
            variant="ghost"
            onClick={onAction}
            className="w-full justify-between group/btn hover:bg-muted mt-4"
          >
            <span>{actionLabel}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
