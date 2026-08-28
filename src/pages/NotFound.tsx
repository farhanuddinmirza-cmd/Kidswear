import { AlertCircle } from "lucide-react";
import EmptyState from "../components/ui/EmptyState";

export default function NotFound() {
  return (
    <div className="container-page py-16">
      <EmptyState
        icon={<AlertCircle size={30} />}
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have moved."
        ctaLabel="Back to Home"
        ctaTo="/"
      />
    </div>
  );
}
