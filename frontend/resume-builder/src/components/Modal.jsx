import React from "react";

const Modal = ({ 
    children,
    isOpen,
    onClose,
    title,
    hideHeader,
    showActionBtn,
    actionBtnIcon = null,
    actionBtnText,
    onActionBtnClick,
}) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/30"
            aria-modal="true"
            role="dialog"
        >
            {/* Modal Container */}
            <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[95vw] md:max-w-md lg:max-w-lg xl:max-w-xl max-h-[90vh]">
                {/* Modal Header */}
                {!hideHeader && (
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 className="md:text-lg font-medium text-gray-900">{title}</h3>

                        {showActionBtn && (
                            <button 
                                className="btn-small-light ml-auto mr-2"
                                onClick={onActionBtnClick}
                                aria-label={actionBtnText || "Modal action"}
                            >
                                {actionBtnIcon}
                                {actionBtnText}
                            </button>
                        )}
                    </div>
                )}

                {/* Close Button */}
                <button 
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center absolute top-3.5 right-2.5"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <svg 
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path 
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                </button>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;