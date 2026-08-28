import type { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidthClass?: string;
}

export default function Modal({ open, onClose, children, maxWidthClass = "max-w-3xl" }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/50 animate-fade-in" onClick={onClose} />
      <div className={`relative w-full ${maxWidthClass} max-h-[90vh] overflow-y-auto rounded-2xl bg-ivory p-6 shadow-card animate-fade-in sm:p-8`}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 hover:bg-ivory-dark"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
