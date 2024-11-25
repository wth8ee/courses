import { XMarkIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import { createPortal } from "react-dom";

export function Modal({ isOpen, onClose, className, children }) {
  if (!isOpen) {
    return;
  }

  function handleClick(e) {
    const inModal = e.target.closest("[data-id=modal]");
    if (!inModal) {
      onClose();
    }
  }

  const Modal = (
    <div
      className="fixed inset-0 bg-transparent flex justify-center"
      onClick={handleClick}
    >
      <div
        data-id="modal"
        className={clsx(
          className,
          `bg-red-400 w-[max(300px,40%)] p-adpt min-h-[40px] h-[calc(max(2vw,10px)+max(1.2vw,12px))] rounded-lg 
          text-background font-medium text-adptmd flex items-center justify-between opacity-0 mt-adptsm`
        )}
      >
        {children}
        <XMarkIcon
          className="h-[max(2vw,20px)] cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );

  return createPortal(Modal, document.getElementById("modals"));
}
