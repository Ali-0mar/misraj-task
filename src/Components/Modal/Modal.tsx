import React, {useState, ReactNode, useEffect} from 'react';
import "./Modal.scss"
type ModalProps = {
    isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
};
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const [isVisible, setIsVisible] = useState(isOpen);

    useEffect(()=>{
        setIsVisible(isOpen)
    },[isOpen])
    const handleClose = () => {
        setIsVisible(false);
        onClose && onClose();
    };
    return isVisible ? (
        <div
            className='overlay'
        >
            <div
                className = 'wrapper'
            >
                {children}
                <button onClick={handleClose} className='btn modal-close-button'>X</button>
            </div>
        </div>
    ) : null;
};

export default Modal;
