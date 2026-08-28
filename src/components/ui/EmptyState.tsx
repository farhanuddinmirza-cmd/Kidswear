import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export default function EmptyState({ icon, title, description, ctaLabel, ctaTo }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-6 py-20 text-center">
      {icon && <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ivory-dark text-ink-soft">{icon}</div>}
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      {description && <p className="max-w-sm text-sm text-ink-soft">{description}</p>}
      {ctaLabel && ctaTo && (
        <Link to={ctaTo}>
          <Button variant="primary" size="md" className="mt-2">
            {ctaLabel}
          </Button>
        </Link>
      )}
    </div>
  );
}
