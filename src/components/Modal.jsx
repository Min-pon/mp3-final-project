import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const modalRef = useRef();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="fixed inset-0 bg-black opacity-25"></div>
          <div
            className="relative w-auto max-w-lg mx-auto my-6"
            ref={modalRef}
          >
            <div className="relative bg-white rounded-lg shadow-lg">
              <button
                className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                Close
              </button>
              <div className="p-6">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
