import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  icon?: ReactNode;
}

export default function SectionHeader({ title, subtitle, description, icon }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-2 flex items-center justify-center gap-2">
        {icon}
        {subtitle}
      </h2>
      <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-800">
        {title}
      </h3>
      {description && (
        <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}