import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  centered?: boolean;
}

const SectionHeader = ({
  icon: Icon,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) => {
  return (
    <div
      className={`space-y-4 mb-12 ${
        centered ? "text-center mx-auto max-w-3xl" : ""
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 ${
          centered ? "mx-auto" : ""
        }`}
      >
        <Icon className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium text-primary">{subtitle}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
