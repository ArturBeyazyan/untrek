// components/Modal.tsx
import React, { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Երբ սեղմում ես դրսում, փակում ենք մոդալը
  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg p-6 relative">
        <button onClick={onClose}className="absolute top-2 right-2 text-gray-600 hover:text-black">✕</button>
        {children}
      </div>
    </div>
  );
};
// const [isModalOpen, setIsModalOpen] = useState(false);
// <div className="p-8">
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         Բացել մոդալը
//       </button>

//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <h2 className="text-2xl font-bold mb-4">Սա մոդալ է</h2>
//         <p>Ցանկացած կոնտենտ կարող ես տեղադրել այստեղ։</p>
//       </Modal>
//     </div>