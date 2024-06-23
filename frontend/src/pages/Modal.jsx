import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 max-w-lg">
        <button onClick={onClose} className="text-right text-gray-700">
          &times;
        </button>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
