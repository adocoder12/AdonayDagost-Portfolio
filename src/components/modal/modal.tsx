import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export default function Modal({
  open,
  onClose,
  children,
  className,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Sync React state with the native dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose} // fires on Esc and dialog.close()
      onClick={(e) => {
        // Click on the backdrop area (the dialog itself, not its content)
        if (e.target === e.currentTarget) onClose();
      }}
      className={cn(
        "m-0 p-4 md:p-10 w-screen h-screen max-w-none max-h-none bg-transparent",
        "open:flex items-center justify-center",
        "backdrop:bg-black/85 backdrop:backdrop-blur-sm",
        className,
      )}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl leading-none opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
      >
        ×
      </button>

      {children}
    </dialog>
  );
}
