import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import ReactModal from 'react-modal';

import Icon from '@/components/ui/Icon';

import scss from './Modal.module.scss';

ReactModal.setAppElement('#root');

interface Props {
    modalIsOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    overlayClassName?: string;
    className?: string;
}

const Modal: FC<Props> = ({ modalIsOpen, onClose, children, overlayClassName, className }) => {
    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={onClose}
            closeTimeoutMS={300}
            overlayClassName={clsx(scss.overlay, overlayClassName)}
            className={clsx(scss.modal, className)}
        >
            <button type="button" onClick={onClose} className={scss.closeButton}>
                <Icon variant="close" className={scss.closeIcon} />
            </button>

            {children}
        </ReactModal>
    );
};

export default Modal;
